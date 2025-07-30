# Session 14 — Mermaid Diagrams (Flattening Higher-order Observables)

## combineLatestAll
```mermaid
flowchart LR
  A[spawns (clicks)] --> B[map -> inner interval(300ms).take(3)]
  B --> C[combineLatestAll]
  C --> D["emit array of latest values of all active inners"]
```

## concatAll
```mermaid
flowchart LR
  A[spawns] --> B[map -> inner interval(200ms).take(3)]
  B --> C[concatAll]
  C --> D["run inners sequentially"]
```

## exhaustAll
```mermaid
flowchart LR
  A[spawns] --> B[map -> inner interval(300ms).take(4)]
  B --> C[exhaustAll]
  C --> D["ignore new inners while one is active"]
```

## mergeAll
```mermaid
flowchart LR
  A[spawns] --> B[map -> inner interval(250ms).take(3)]
  B --> C[mergeAll]
  C --> D["interleave values from all inners concurrently"]
```

## switchAll
```mermaid
flowchart LR
  A[spawns] --> B[map -> inner interval(300ms).take(5)]
  B --> C[switchAll]
  C --> D["switch to latest inner; cancel previous"]
```
