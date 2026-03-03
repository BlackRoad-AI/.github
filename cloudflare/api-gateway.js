/**
 * BlackRoad API Gateway — Cloudflare Worker
 *
 * Routes all AI vendor traffic through BlackRoad infrastructure.
 * Authentication is enforced by Cloudflare Access (OAuth/OIDC) at the edge,
 * so only @blackboxprogramming and @lucidia-authorized sessions reach this Worker.
 *
 * Route map:
 *   /health              → gateway status
 *   /openai/*            → OpenAI API (proxied, vendor key injected)
 *   /anthropic/*         → Anthropic API (proxied, vendor key injected)
 *   /local/*             → Pi cluster gateway (octavia via Cloudflare Tunnel)
 *
 * Secrets (set via `wrangler secret put`):
 *   OPENAI_API_KEY       — forwarded to OpenAI
 *   ANTHROPIC_API_KEY    — forwarded to Anthropic
 *   LOCAL_GATEWAY_URL    — Cloudflare Tunnel URL for the Pi cluster gateway
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/health') {
      return Response.json({ status: 'ok', gateway: 'blackroad', agent: 'LUCIDIA' });
    }

    const route = resolveRoute(url.pathname, env);
    if (!route) {
      return Response.json({ error: 'Route not found' }, { status: 404 });
    }

    const upstream = new URL(url.pathname.slice(route.prefix.length) || '/', route.origin);
    upstream.search = url.search;

    const headers = new Headers(request.headers);
    // Strip Cloudflare Access assertion — not needed upstream
    headers.delete('cf-access-jwt-assertion');
    headers.delete('cf-access-authenticated-user-email');
    if (route.apiKey) {
      headers.set('Authorization', `Bearer ${route.apiKey}`);
    }

    const upstreamRequest = new Request(upstream.toString(), {
      method: request.method,
      headers,
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
    });

    return fetch(upstreamRequest);
  },
};

function resolveRoute(pathname, env) {
  if (pathname.startsWith('/openai/')) {
    return { origin: 'https://api.openai.com', prefix: '/openai', apiKey: env.OPENAI_API_KEY };
  }
  if (pathname.startsWith('/anthropic/')) {
    return {
      origin: 'https://api.anthropic.com',
      prefix: '/anthropic',
      apiKey: env.ANTHROPIC_API_KEY,
    };
  }
  if (pathname.startsWith('/local/')) {
    return {
      origin: env.LOCAL_GATEWAY_URL || 'http://octavia.local:8787',
      prefix: '/local',
      apiKey: null,
    };
  }
  return null;
}
