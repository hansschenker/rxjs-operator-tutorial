# Session 10 — Mermaid Diagrams

## filter
```mermaid
flowchart LR
  A[range(1..10)] --> B[filter(n % 2 === 0)]
  B --> C[Subscriber (even numbers)]
```

## first & last
```mermaid
flowchart LR
  A[range(1..10)] --> B1[first(n > 5)]
  A --> B2[last(n % 3 === 0)]
  B1 --> C1[emit 6 then complete]
  B2 --> C2[emit 9 on completion]
```

## single
```mermaid
flowchart LR
  A[from([1,2,3])] --> B[single(x==2)] --> C[emit 2]
  A2[from([1,2,2,3])] --> B2[single(x==2)] --> D[error (multiple matches)]
```

## elementAt
```mermaid
flowchart LR
  A[interval(300ms) take(5)] --> B[elementAt(2)] --> C[emit 2]
  A --> B2[elementAt(10, 'N/A')] --> C2[emit default on completion]
```
