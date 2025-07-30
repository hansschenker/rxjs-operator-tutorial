# Session 3 — Mermaid Diagrams

## from
```mermaid
flowchart LR
  A[Array | Promise | Iterable] -- "adapt" --> B[from(source)]
  B -- "values" --> C[Observable<T>]
  C --> D[Subscriber]
```

## of
```mermaid
flowchart LR
  A["values..."] -- "emit sequentially" --> B[of(v1, v2, v3)]
  B -- "v1,v2,v3" --> C[Observable<T>]
  C --> D[Subscriber]
```

## defer
```mermaid
flowchart LR
  A[defer(factory)] -- "subscribe" --> B[factory() returns Observable]
  B --> C[Observable<T>]
  C --> D[Subscriber]
```

## iif
```mermaid
flowchart LR
  A[iif(predicate, if$, else$)] -- "subscribe" --> B["pick one branch"]
  B --> C[Observable<T>]
  C --> D[Subscriber]
```
