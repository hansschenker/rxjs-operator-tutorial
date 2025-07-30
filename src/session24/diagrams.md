# Session 24 — Mermaid Diagrams (Higher-Order Mapping — Advanced)

## switchScan
```mermaid
flowchart LR
  A[Start Job clicks] --> SS[switchScan((state,_) => inner job$)]
  SS --> S[emit {job, step} progress; previous job cancelled]
```

## mergeMap (concurrency)
```mermaid
flowchart LR
  A[Spawn clicks] --> MM[mergeMap(task$, concurrency=2)]
  MM --> S[run up to 2 tasks; queue the rest]
```
