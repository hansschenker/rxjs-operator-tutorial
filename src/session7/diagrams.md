# Session 7 — Buffering & Windowing

## bufferTime
```mermaid
flowchart LR
  A[click events] --> B[bufferTime(2s)]
  B -- "every 2s" --> C["emit array of events"]
```

## bufferCount
```mermaid
flowchart LR
  A[source$] --> B[bufferCount(3)]
  B --> C["emit 3-item arrays"]
```

## windowTime
```mermaid
flowchart LR
  A[source$] --> B[windowTime(2s)]
  B --> C["window Observables"]
  C --> D["values per window"]
```
