# Contributing to BlackRoad-AI

Welcome! BlackRoad-AI is the intelligence routing layer of the BlackRoad ecosystem. We're glad you want to contribute.

## The Routing Philosophy

Before contributing, understand our core principle:

> **"BlackRoad is a routing company, not an AI company."**

We don't train models or buy GPUs. We route requests to existing intelligence. Your contributions should enhance our routing capabilities, not recreate what already exists.

## How to Contribute

### 1. Find Something to Work On

- **Good First Issues**: Look for issues labeled `good first issue`
- **Model Integrations**: Check `model-integration` labeled issues
- **Routing Improvements**: Browse `routing` or `enhancement` labels
- **Documentation**: Always welcome, no issue needed

### 2. Set Up Your Environment

```bash
# Fork and clone
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
cd REPO-NAME

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows

# Install dependencies
pip install -r requirements.txt
pip install -r requirements-dev.txt

# Install pre-commit hooks
pre-commit install
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 4. Make Your Changes

Follow these principles:

#### For Routing Logic
- Every routing decision must be logged
- Explain *why* a route was chosen, not just *what* was chosen
- Consider latency—sometimes local inference beats cloud APIs

#### For Model Integrations
```python
# Good: Clear routing rule
@router.route(
    match=lambda req: "code" in req.intent and req.language == "python",
    priority=10,
    model="claude-3-sonnet"
)
async def handle_python_code(request: Request):
    ...

# Bad: Vague or catch-all routing
@router.route(match=lambda req: True)  # Don't do this
```

#### For Adapters
- Handle rate limits gracefully
- Implement proper error handling
- Cache where appropriate
- Log all external API calls

### 5. Test Your Changes

```bash
# Run all tests
pytest

# Run specific test file
pytest tests/routing/test_operator.py

# Run with coverage
pytest --cov=. --cov-report=html
```

### 6. Submit a Pull Request

1. Push your branch: `git push -u origin feature/your-feature-name`
2. Open a PR against the `main` branch
3. Fill out the PR template completely
4. Wait for review

## Code Style

### Python

- Use `ruff` for linting and formatting
- Type hints are required for public functions
- Docstrings for public APIs (Google style)

```python
def route_request(request: Request, options: RouteOptions | None = None) -> RouteResult:
    """Route a request to the appropriate handler.

    Args:
        request: The incoming request to route.
        options: Optional routing configuration.

    Returns:
        The result of the routing decision.

    Raises:
        RoutingError: If no suitable route is found.
    """
    ...
```

### Commit Messages

Use conventional commits:

```
feat: add Claude 3.5 Sonnet adapter
fix: handle rate limit in OpenAI adapter
docs: update routing diagram
refactor: simplify request matching logic
test: add edge cases for model selection
```

## Architecture Guidelines

### The Routing Layer

```
Request → Operator → [Route Selection] → Handler → Response
              ↓
         [Logging]
```

Every component should:
1. **Accept** standardized input
2. **Log** decisions and actions
3. **Return** standardized output
4. **Handle** errors gracefully

### Adding a New Model/Service

1. Create adapter in `adapters/` directory
2. Register with the operator
3. Define routing rules
4. Add tests
5. Document usage

```python
# adapters/new_service.py
class NewServiceAdapter(BaseAdapter):
    async def complete(self, prompt: str, **kwargs) -> str:
        # Implementation
        ...

# Register in operator
operator.register_adapter("new_service", NewServiceAdapter())

# Add routing rule
operator.add_route(
    match=lambda r: r.requires_capability("new_service_feature"),
    adapter="new_service"
)
```

## Node-Specific Development

If you're working on edge node features:

| Node | Focus Area | Contact |
|------|------------|---------|
| octavia | Primary AI routing, Hailo-8 inference | @maintainer |
| lucidia | Secondary inference, RoadChain | @maintainer |
| aria | Agent orchestration | @maintainer |

## Getting Help

- **Questions**: Open a Discussion or ask in issues
- **Architecture**: See [BLACKROAD_ARCHITECTURE.md](./BLACKROAD_ARCHITECTURE.md)
- **Security**: See [SECURITY.md](./SECURITY.md)

## Recognition

Contributors are recognized in:
- Release notes
- README acknowledgments
- Annual contributor spotlight (for significant contributions)

---

*"Route your skills to where they're needed. We'll handle the orchestration."*
