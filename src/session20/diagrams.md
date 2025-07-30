# Session 20 — Timeouts & Fallbacks

## timeout
```mermaid
flowchart LR
  A[clicks] --> TO[timeout(2000)]
  TO --> SUB[error if >2s gap]
```
## timeoutWith
```mermaid
flowchart LR
  A[clicks] --> TW[timeoutWith(2000, of('fallback'))]
  TW --> SUB[Subscriber fallback]
```
