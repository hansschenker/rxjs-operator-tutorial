# Session 11 — Mermaid Diagrams

## distinct
```mermaid
flowchart LR
  A[from([1,2,2,3,1,4])] --> B[distinct()]
  B --> C[Subscriber (1,2,3,4)]
```

## distinctUntilChanged
```mermaid
flowchart LR
  A[from([1,1,2,2,3,1])] --> B[distinctUntilChanged()]
  B --> C[Subscriber (1,2,3,1)]
```

## distinctUntilKeyChanged
```mermaid
flowchart LR
  A[from(objects)] --> B[distinctUntilKeyChanged('id')]
  B --> C[Subscriber (emit when id changes)]
```
