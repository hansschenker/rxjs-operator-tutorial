# Session 12 — Mermaid Diagrams

## debounce & debounceTime
```mermaid
flowchart LR
  A[Input keystrokes] --> B1[debounce(v => timer(dynamic))]
  A --> B2[debounceTime(400ms)]
  B1 --> C1[emit after dynamic quiet period]
  B2 --> C2[emit after 400ms quiet]
```

## throttle & throttleTime
```mermaid
flowchart LR
  A[Rapid clicks] --> B1[throttle(_ => timer(1000))]
  A --> B2[throttleTime(1000, sched, {leading:true, trailing:true})]
  B1 --> C1[emit first, ignore for 1s]
  B2 --> C2[emit first and last in each 1s window]
```

## audit & auditTime
```mermaid
flowchart LR
  A[Rapid clicks] --> B1[audit(_ => timer(800ms))]
  A --> B2[auditTime(800ms)]
  B1 --> C1[emit last after each 800ms window]
  B2 --> C2[same with fixed time]
```
