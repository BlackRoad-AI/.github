<div align="center">

# BlackRoad AI

**AI models, agents, and machine learning infrastructure at scale.**

[![Models](https://img.shields.io/badge/models-10+-black?style=flat-square)](https://github.com/orgs/BlackRoad-AI/repositories)
[![Agents](https://img.shields.io/badge/agents-30K-FF1D6C?style=flat-square)](https://blackroad.ai)
[![Status](https://img.shields.io/badge/status-active-brightgreen?style=flat-square)](https://blackroad.ai)

</div>

---

## 🧠 What We Build

BlackRoad AI is the machine learning arm of BlackRoad OS — deploying, fine-tuning, and orchestrating AI models across edge hardware and cloud GPU clusters.

**Core capabilities:**
- 🔥 Multi-model inference (Qwen, DeepSeek, Llama, Mistral)
- 🧠 PS-SHA∞ persistent memory across model sessions
- ⚡ 30,000 concurrent AI agents on 3-node GPU cluster
- 🔌 Unified API gateway for all providers

---

## 📦 Repositories

### Original Repos

| Repo | Purpose | Stack |
|------|---------|-------|
| [`blackroad-ai-qwen`](https://github.com/BlackRoad-AI/blackroad-ai-qwen) | Qwen 2.5 deployment (7B–72B) | Python · Docker |
| [`blackroad-ai-ollama`](https://github.com/BlackRoad-AI/blackroad-ai-ollama) | Multi-model Ollama wrapper | Python · Docker |
| [`blackroad-ai-api-gateway`](https://github.com/BlackRoad-AI/blackroad-ai-api-gateway) | Unified AI API router | Python · FastAPI |
| [`blackroad-ai-deepseek`](https://github.com/BlackRoad-AI/blackroad-ai-deepseek) | DeepSeek R1/Coder/Math | Python |
| [`blackroad-ai-memory-bridge`](https://github.com/BlackRoad-AI/blackroad-ai-memory-bridge) | PS-SHA∞ cross-model memory | Python · FastAPI |
| [`blackroad-ai-cluster`](https://github.com/BlackRoad-AI/blackroad-ai-cluster) | GPU cluster (22.5K + 7.5K agents) | YAML · Shell |
| [`lucidia-ai-models`](https://github.com/BlackRoad-AI/lucidia-ai-models) | Lucidia consciousness models | Python |
| [`blackroad-vllm-mvp`](https://github.com/BlackRoad-AI/blackroad-vllm-mvp) | vLLM high-throughput serving | Python |

### Upstream Forks (Maintained)

| Fork | Upstream | Purpose |
|------|----------|---------|
| [`vllm`](https://github.com/BlackRoad-AI/vllm) | vllm-project/vllm | High-throughput LLM inference |
| [`ollama`](https://github.com/BlackRoad-AI/ollama) | ollama/ollama | Local model runtime |
| [`transformers`](https://github.com/BlackRoad-AI/transformers) | huggingface/transformers | Model library |
| [`llama.cpp`](https://github.com/BlackRoad-AI/llama.cpp) | ggerganov/llama.cpp | GGUF inference |
| [`Qwen`](https://github.com/BlackRoad-AI/Qwen) | QwenLM/Qwen | Qwen model family |
| [`DeepSeek-V2`](https://github.com/BlackRoad-AI/DeepSeek-V2) | deepseek-ai/DeepSeek-V2 | DeepSeek reasoning |
| [`qdrant`](https://github.com/BlackRoad-AI/blackroad-qdrant) | qdrant/qdrant | Vector DB |
| [`pytorch`](https://github.com/BlackRoad-AI/blackroad-pytorch) | pytorch/pytorch | Deep learning |

---

## 🏗️ Cluster Architecture

```
┌─────────────────────────────────────────────────────┐
│              BlackRoad AI Cluster                    │
│                                                     │
│  octavia-pi (192.168.4.38)    lucidia-pi            │
│  A100 80GB · 22,500 agents    A100 80GB · 7,500     │
│  ┌──────────────────────┐    ┌───────────────────┐  │
│  │ Qwen 72B             │    │ Llama 3.2         │  │
│  │ DeepSeek R1 32B      │    │ Qwen 7B           │  │
│  │ Memory Bridge :8001  │    │ Cloudflared       │  │
│  └──────────────────────┘    └───────────────────┘  │
│              │                        │             │
│              └────────────────────────┘             │
│                    Gateway :8787                    │
└─────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

```bash
# Start Ollama with a BlackRoad model
docker-compose -f blackroad-ai-ollama/docker-compose.yml up -d

# Query via memory-aware API
curl -X POST http://localhost:8001/chat \
  -d '{"model": "qwen2.5:7b", "message": "Hello", "use_memory": true}'

# Check cluster health
./blackroad-ai-cluster/scripts/health-check.sh
```

---

> Part of the [BlackRoad OS](https://github.com/BlackRoad-OS-Inc) ecosystem.
> © BlackRoad OS, Inc. All rights reserved.
