# Security Policy

## BlackRoad Security Philosophy

> **"The OPERATOR sits between us and all external services. Cloudflare, Salesforce, and GitHub are utilities we command—not landlords we rent from."**

Security in BlackRoad means controlling the routing layer. If you own the operator, you own the security perimeter.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

**DO NOT create a public GitHub issue for security vulnerabilities.**

### How to Report

1. **Email**: Send details to security@blackroad.ai (or create a private security advisory)
2. **GitHub Security Advisory**: Use the "Security" tab → "Report a vulnerability"
3. **Encrypted Communication**: PGP key available upon request

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Affected component (Operator, Inference, Adapters, Edge Nodes)
- Potential impact
- Any suggested fixes

### Response Timeline

| Stage | Timeline |
|-------|----------|
| Initial Response | 24-48 hours |
| Triage & Assessment | 72 hours |
| Fix Development | 7-14 days (severity dependent) |
| Public Disclosure | After fix is deployed |

## Security Architecture

### The Routing Security Model

```
[External Request]
       ↓
  [Cloudflare] ← DDoS protection, WAF, edge filtering
       ↓
  [Tailscale Mesh] ← Encrypted node-to-node communication
       ↓
  [Operator] ← Authentication, authorization, rate limiting
       ↓
  [Target Service] ← Isolated execution environments
```

### Key Security Controls

1. **Edge Protection (Cloudflare)**
   - DDoS mitigation
   - Web Application Firewall
   - Bot management
   - SSL/TLS termination

2. **Network Isolation (Tailscale)**
   - WireGuard-based encryption
   - Zero-trust networking
   - No public IP exposure for nodes
   - Device authentication

3. **Operator Authentication**
   - API key validation
   - Rate limiting per client
   - Request logging and audit trail
   - Input sanitization

4. **Node Security**
   - SSH key-only authentication
   - Minimal attack surface
   - Regular security updates
   - Containerized workloads

### Hash Verification (PS-SHA-∞)

All critical operations use infinite cascade hashing for verification:

```
hash = SHA256(data)
for i in range(verification_rounds):
    hash = SHA256(hash + data + timestamp)
```

## Secure Development

### For Contributors

1. **Never commit secrets** - Use environment variables and secrets management
2. **Validate all inputs** - Especially in routing logic
3. **Use parameterized queries** - No string concatenation for database/API calls
4. **Review dependencies** - Check for known vulnerabilities before adding
5. **Follow least privilege** - Request only necessary permissions

### Protected Information

Never include in code or commits:
- API keys (Claude, GPT, Salesforce, etc.)
- Tailscale auth keys
- SSH private keys
- Database credentials
- Customer data

## Incident Response

If you suspect a security incident:

1. **Isolate**: Disconnect affected node from mesh if safe to do so
2. **Document**: Capture logs, timestamps, affected systems
3. **Report**: Notify security team immediately
4. **Preserve**: Don't modify evidence

## Bug Bounty

We appreciate security researchers who help keep BlackRoad secure. While we don't currently have a formal bug bounty program, we will:

- Acknowledge your contribution publicly (with permission)
- Provide a letter of appreciation for your portfolio
- Consider you for future opportunities

## Contact

- Security issues: security@blackroad.ai
- General questions: [Create an issue](https://github.com/BlackRoad-AI/.github/issues)

---

*"Route securely, or don't route at all."*
