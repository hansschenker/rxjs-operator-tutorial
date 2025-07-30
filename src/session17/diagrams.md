# Session 17 — Mermaid Diagrams (Error Handling)

## catchError
```mermaid
flowchart LR
  S[interval(300ms).take(6)] --> M[map(i => throw if i==3)]
  M --> CE[catchError(() => of('fallback'))]
  CE --> SUB[Subscriber (values + fallback + complete)]
```

## retry
```mermaid
flowchart LR
  C[click] --> D[defer(() => maybeFail())]
  D --> R[retry(2)]
  R --> SUB[Subscriber (success or final error after retries)]
```

## retryWhen
```mermaid
flowchart LR
  C[click] --> D[defer(() => maybeFail())]
  D --> RW[retryWhen(errors$ -> errors$.pipe(scan + delay))]
  RW --> SUB[Subscriber (success or gives up)]
```
