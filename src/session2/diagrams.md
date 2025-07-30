# Session 2 — Mermaid Diagrams

## interval
```mermaid
flowchart LR
  A[Scheduler] -- "0,1,2..." every period --> B[interval(period)]
  B -- "ticks" --> C[Observable<number>]
  C -- "next n" --> D[Subscriber]
```

## timer
```mermaid
flowchart LR
  A[Scheduler] -- "due time (ms)" --> B[timer(due, period?)]
  B -- "first tick (and subsequent ticks if period)" --> C[Observable<number>]
  C -- "next n" --> D[Subscriber]
```

## generate
```mermaid
flowchart LR
  A[start] -- "condition, iterate" --> B[generate()]
  B -- "emits sequence" --> C[Observable<T>]
  C -- "next v" --> D[Subscriber]
```

## range
```mermaid
flowchart LR
  A[start] -- "start..start+count-1" --> B[range(start, count)]
  B -- "values" --> C[Observable<number>]
  C -- "next n" --> D[Subscriber]
```
