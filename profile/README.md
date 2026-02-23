<div align="center">
  <h1>🧠 BlackRoad AI</h1>
  <p><strong>Model inference. Memory. Identity. At scale.</strong></p>
  <p>
    <img src="https://img.shields.io/badge/Models-Qwen%20%7C%20DeepSeek%20%7C%20Llama-FF1D6C?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Inference-vLLM%20%7C%20Ollama-9C27B0?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Memory-PS--SHA∞-2979FF?style=for-the-badge"/>
  </p>
</div>

## What Lives Here

AI model deployment, inference infrastructure, and memory systems for the BlackRoad platform.

| Repo | Description |
|------|-------------|
| [blackroad-ai-api-gateway](https://github.com/BlackRoad-AI/blackroad-ai-api-gateway) | Unified AI API — route to any model |
| [blackroad-ai-ollama](https://github.com/BlackRoad-AI/blackroad-ai-ollama) | Ollama runtime with `[MEMORY]` integration |
| [blackroad-ai-cluster](https://github.com/BlackRoad-AI/blackroad-ai-cluster) | Pi-distributed inference cluster |
| [blackroad-ai-memory-bridge](https://github.com/BlackRoad-AI/blackroad-ai-memory-bridge) | PS-SHA∞ persistent agent memory |
| [blackroad-ai-qwen](https://github.com/BlackRoad-AI/blackroad-ai-qwen) | Qwen 2.5 model deployment |
| [blackroad-ai-deepseek](https://github.com/BlackRoad-AI/blackroad-ai-deepseek) | DeepSeek-V3 model deployment |
| [lucidia-platform](https://github.com/BlackRoad-AI/lucidia-platform) | Lucidia — personal AI companion |
| [lucidia-3d-wilderness](https://github.com/BlackRoad-AI/lucidia-3d-wilderness) | 3D world where AI models live |

## Stack

**Inference**: vLLM · Ollama · llama.cpp  
**Models**: Qwen 2.5 72B · DeepSeek-V3 · Llama 3.2 · Mistral  
**Memory**: PS-SHA∞ hash-chain journals · Redis · Cloudflare R2  
**Hardware**: Raspberry Pi 5 (Hailo-8, 52 TOPS) · DigitalOcean A100  

## Key Numbers

| Metric | Value |
|--------|-------|
| Agent fleet | 30,000 |
| Pi capacity | 22,500 + 7,500 |
| Memory hash chain | Append-only, cryptographic |
| Models in R2 | 135 GB (Q4_K_M) |

---
*© BlackRoad OS, Inc. All rights reserved. Proprietary.*