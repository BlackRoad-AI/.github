# BlackRoad-AI

> **"The agent doesn't need to be smart. It needs to know who to call."**

BlackRoad-AI is the intelligence routing layer of the BlackRoad ecosystem. We don't train models or buy GPUs—we orchestrate existing intelligence (Claude, GPT, Llama, NumPy, legal databases) through a unified routing system that delivers the right tool at the right time.

## The Routing Philosophy

```
[User Request] → [Operator] → [Route to Right Tool] → [Answer]
                     ├── Physics question?    → NumPy/SciPy
                     ├── Language task?       → Claude/GPT API
                     ├── Customer lookup?     → Salesforce API
                     ├── Legal question?      → Legal database
                     └── Fast inference?      → Hailo-8 local
```

## What We Build

| Repository | Purpose |
|------------|---------|
| `operator` | Core routing engine - the brain that dispatches requests |
| `inference` | Local AI inference with Hailo-8 (26 TOPS acceleration) |
| `models` | Model configurations, prompts, and routing rules |
| `adapters` | Connectors for external AI services (Claude, GPT, etc.) |
| `benchmarks` | Performance testing and model comparison tools |

## Infrastructure

Our AI routing runs on owned hardware, not rented cloud:

| Node | Role | Hardware |
|------|------|----------|
| **octavia** | Primary AI routing | Pi 5 + Pironman + Hailo-8 |
| **lucidia** | Secondary inference | Pi 5 + Pironman + Hailo-8 |
| **aria** | Agent orchestration | Pi 5 |

## Core Principles

1. **Route, Don't Train** - Intelligence already exists; we just need to connect it
2. **Own the Operator** - The routing logic is ours; the models are utilities
3. **Edge-First** - Run what we can locally, call APIs only when needed
4. **Transparent Routing** - Every decision logged, every call auditable

## Part of the BlackRoad Ecosystem

BlackRoad-AI is one of 15 specialized organizations in the BlackRoad network:

- [BlackRoad-OS](https://github.com/BlackRoad-OS) - Core infrastructure
- [BlackRoad-Cloud](https://github.com/BlackRoad-Cloud) - Deployment & services
- [BlackRoad-Security](https://github.com/BlackRoad-Security) - Security & auditing
- [BlackRoad-Labs](https://github.com/BlackRoad-Labs) - Research & experiments

## Get Started

```bash
# Clone the operator
git clone https://github.com/BlackRoad-AI/operator.git

# Start routing
cd operator && ./start.sh
```

## Architecture

For the complete BlackRoad architecture, see [BLACKROAD_ARCHITECTURE.md](./BLACKROAD_ARCHITECTURE.md).

---

**BlackRoad is a routing company, not an AI company.**

*Connecting intelligence, not creating it.*
