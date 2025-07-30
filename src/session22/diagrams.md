# Session 22 — Mermaid Diagrams (Conditional & Boolean)

## defaultIfEmpty
```mermaid
flowchart LR
  A[Subject] --> B[defaultIfEmpty('DEFAULT')]
  B --> S[Subscriber]
  note right of B: if source emits nothing, emit DEFAULT on complete
```

## every
```mermaid
flowchart LR
  A[Subject<number>] --> E[every(n => n % 2 === 0)]
  E --> S[emit true if all even; false early otherwise]
```

## find & findIndex
```mermaid
flowchart LR
  A[Subject<string>] --> F[find(s => s.length >= 5)]
  A --> FI[findIndex(s => s === 'target')]
  F --> S1[emit matching value or undefined]
  FI --> S2[emit index or -1]
```

## isEmpty
```mermaid
flowchart LR
  A[Subject] --> IE[isEmpty()]
  IE --> S[emit true if source completes without any next]
```
