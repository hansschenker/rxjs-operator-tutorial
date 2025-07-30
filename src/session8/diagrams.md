# Session 8 — Mermaid Diagrams

## map & mapTo
```mermaid
flowchart LR
  A[input values] --> B[map(x => transform)]
  B --> C[transformed values]
  A --> D[mapTo(constant)] --> E[constant values]
```

## mergeMap
```mermaid
flowchart LR
  A[clicks] --> B[mergeMap]
  B --> C[multiple inner Observables active]
```

## switchMap
```mermaid
flowchart LR
  A[clicks] --> B[switchMap]
  B -- "cancel previous" --> C[inner Observable]
```

## concatMap
```mermaid
flowchart LR
  A[clicks] --> B[concatMap]
  B -- "queue inner Observables" --> C[one at a time]
```

## exhaustMap
```mermaid
flowchart LR
  A[clicks] --> B[exhaustMap]
  B -- "ignore while inner active" --> C[inner Observable]
```
