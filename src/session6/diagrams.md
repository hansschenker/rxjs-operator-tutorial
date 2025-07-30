# Session 6 — Mermaid Diagrams

## forkJoin
```mermaid
flowchart LR
  A1[Observable 1] --> B[forkJoin]
  A2[Observable 2] --> B
  B -- "last values when all complete" --> C[Subscriber]
```

## zip
```mermaid
flowchart LR
  A1[Observable 1] --> B[zip]
  A2[Observable 2] --> B
  B -- "[v1, v2] by index" --> C[Subscriber]
```

## race
```mermaid
flowchart LR
  A1[Observable 1] --> B[race]
  A2[Observable 2] --> B
  B -- "first source wins" --> C[Subscriber]
```

## partition
```mermaid
flowchart LR
  A[source$] --> B[partition(predicate)]
  B -- "true" --> C[Observable<T>]
  B -- "false" --> D[Observable<T>]
```
