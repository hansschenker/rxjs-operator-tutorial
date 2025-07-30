# Session 18 — Mermaid Diagrams (Side-effects & Scheduling)

## tap
```mermaid
flowchart LR
  A[input events] --> T[tap(side-effect)]
  T --> M[map(toUpperCase)]
  M --> S[Subscriber]
  note right of T: tap does not alter values
```

## observeOn
```mermaid
flowchart LR
  A[range(1..5)] --> B1[tap('pre')]
  B1 --> O[observeOn(asyncScheduler)]
  O --> B2[tap('post')]
  B2 --> S[Subscriber]
  note right of O: downstream notifications are async
```

## subscribeOn
```mermaid
flowchart LR
  A[click handler] --> S1[subscribe()]
  S1 --> SO[subscribeOn(asyncScheduler)]
  SO --> D[defer logs 'subscribing' asynchronously]
  D --> SUB[Subscriber]
```
