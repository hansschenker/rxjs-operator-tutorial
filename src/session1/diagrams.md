# Session 1 — Mermaid Diagrams

## fromEvent
```mermaid
flowchart LR
  A[DOM Button] -- "click" --> B[fromEvent('click')]
  B -- "e1, e2, e3, ..." --> C[Observable<MouseEvent>]
  C -- "next e" --> D[Subscriber]
```

## fromEventPattern
```mermaid
flowchart LR
  A[Custom Source] -- "add(handler) → token" --> B[fromEventPattern(add, remove)]
  B -- "payloads v1, v2, ..." --> C[Observable<T>]
  C -- "next v" --> D[Subscriber]
  D -- "unsubscribe" --> E["remove(handler, token)"]
```

## bindCallback
```mermaid
flowchart LR
  A[One-shot function] -- "calls cb(value)" --> B[bindCallback(fn)]
  B -- "value" --> C[Observable<T>]
  C -- "next value, complete" --> D[Subscriber]
```
