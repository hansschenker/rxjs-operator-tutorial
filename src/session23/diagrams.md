# Session 23 — Mermaid Diagrams (Mathematical & Aggregate)

## count
```mermaid
flowchart LR
  A[Subject<number>] --> C[count() / count(pred)]
  C --> S[emit count on complete]
```

## reduce
```mermaid
flowchart LR
  A[inputs] --> R[reduce((acc,x)=>acc+x,0)]
  R --> S[sum on complete]
```

## max & min
```mermaid
flowchart LR
  A[Subject<number>] --> MAX[max()]
  A --> MIN[min()]
  MAX --> S1[max on complete]
  MIN --> S2[min on complete]
```
