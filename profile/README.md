# BlackRoad AI

Sovereign AI inference on edge hardware. No cloud dependency.

## What We Build

Large language models running on Raspberry Pi clusters with Hailo-8 AI accelerators. 52 TOPS of on-device compute across a 5-node fleet. Every model runs on hardware we own, on a network we control.

## Infrastructure

- **52 TOPS** -- 2x Hailo-8 accelerators (26 TOPS each)
- **16+ models** on Ollama (Qwen, DeepSeek, Llama, Mistral, custom CECE)
- **Embedding pipeline** -- nomic-embed-text + Qdrant vector database
- **Tokenless gateway** -- agents never touch API keys
- **WireGuard mesh** -- encrypted inter-node inference

## Model Library

| Model | Parameters | Purpose |
|-------|-----------|---------|
| Qwen 2.5 | 7B | General purpose |
| DeepSeek-R1 | 7B | Reasoning, code |
| Llama 3.2 | 3B | Lightweight |
| Mistral | 7B | Balanced |
| CECE (custom) | 7B | Conversational AI |

## Core Repositories

| Repository | What it does |
|---|---|
| [blackroad-ai-cluster](https://github.com/BlackRoad-AI/blackroad-ai-cluster) | Model orchestration across the Pi fleet |
| [blackroad-ai-api-gateway](https://github.com/BlackRoad-AI/blackroad-ai-api-gateway) | Unified API gateway for all models |
| [blackroad-vllm-mvp](https://github.com/BlackRoad-AI/blackroad-vllm-mvp) | High-performance inference via Cloudflare Workers AI |
| [blackroad-ai-memory-bridge](https://github.com/BlackRoad-AI/blackroad-ai-memory-bridge) | Persistent memory for model continuity |
| [blackroad-ai-ollama](https://github.com/BlackRoad-AI/blackroad-ai-ollama) | Ollama runtime configuration |
| [blackroad-ai-qwen](https://github.com/BlackRoad-AI/blackroad-ai-qwen) | Qwen 2.5 deployment |
| [blackroad-ai-deepseek](https://github.com/BlackRoad-AI/blackroad-ai-deepseek) | DeepSeek-V3 deployment |

## Architecture

```
Request --> Cloudflare Edge --> WireGuard Mesh --> Fleet Scheduler
                                                       |
                                 +---------------------+---------------------+
                                 |                     |                     |
                            [Cecilia]             [Octavia]            [Alice]
                            Hailo-8               Hailo-8              Qdrant
                            16 Ollama models      11 Ollama models     Embeddings
                            Embedding             1TB NVMe             PostgreSQL
```

## Philosophy

AI should run on your hardware, answer to your policies, and stay under your control. We do not send data to third-party inference providers unless explicitly configured. The default is always local.

---

Part of [BlackRoad OS](https://github.com/blackboxprogramming/BlackRoad-Operating-System). Pave Tomorrow.
