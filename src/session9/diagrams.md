# Session 9 — Mermaid Diagrams

## scan & mergeScan
```mermaid
flowchart LR
  A[Clicks] --> B[scan(acc+1)]
  A --> C[mergeScan(acc -> delayed(acc+1))]
  B --> D[Subscriber (sync accumulate)]
  C --> D[Subscriber (async accumulate)]
```

## pairwise & pluck
```mermaid
flowchart LR
  A[Slider input] --> B[pluck('target','value')]
  B --> C[pairwise() -> [prev, curr]]
  C --> D[Subscriber (delta)]
```

## groupBy
```mermaid
flowchart LR
  A[items stream] --> B[groupBy(item.category)]
  B -- "GroupedObservables" --> C[mergeMap(group -> group.toArray())]
  C --> D[Subscriber]
```

## expand
```mermaid
flowchart LR
  A[start 4] --> B[expand(n -> n-1 with delay)]
  B -- "4,3,2,1,0" --> C[Subscriber]
```
