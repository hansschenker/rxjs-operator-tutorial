# Session 19 — Timing Helpers

## delay
```mermaid
flowchart LR
  A[button clicks] --> D[delay(1000ms)]
  D --> SUB[Subscriber]
```
## delayWhen
```mermaid
flowchart LR
  A[button clicks] --> DW[delayWhen(_ => timer(1000 + rand))]
  DW --> SUB[Subscriber]
```
## timeInterval
```mermaid
flowchart LR
  A[click events] --> TI[timeInterval()]
  TI --> SUB[Subscriber {value, interval}]
```
## timestamp
```mermaid
flowchart LR
  A[click events] --> TS[timestamp()]
  TS --> SUB[Subscriber {value, timestamp}]
```
