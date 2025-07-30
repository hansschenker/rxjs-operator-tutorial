# Session 13 — Mermaid Diagrams

## skip & take basics
```mermaid
flowchart LR
  A[range(1..10)] --> B1[skip(3)]
  A --> B2[take(5)]
  A --> B3[skipLast(2)]
  A --> B4[takeLast(3)]
  B1 --> C1[emit 4..10]
  B2 --> C2[emit 1..5]
  B3 --> C3[emit 1..8]
  B4 --> C4[emit 8..10]
```

## skipUntil / skipWhile & takeUntil / takeWhile
```mermaid
flowchart LR
  A[interval(500ms)] --> B1[skipUntil(start$)]
  A --> B2[skipWhile(n<5)]
  A --> B3[takeUntil(stop$)]
  A --> B4[takeWhile(n<5)]
```

## ignoreElements
```mermaid
flowchart LR
  A[interval(300ms) take(5)] --> B[ignoreElements()]
  B --> C[only complete event]
```

## sample & sampleTime
```mermaid
flowchart LR
  A[interval(200ms)] --> B1[sample(notifier click)]
  A --> B2[sampleTime(1s)]
```
