# Session 21 — Notifications & Aggregation

## materialize
```mermaid
flowchart LR
  A[click events] --> M[materialize()]
  M --> SUB[Notification objects]
```
## dematerialize
```mermaid
flowchart LR
  A[Notification[]] --> DM[dematerialize()]
  DM --> SUB[real events]
```
## toArray
```mermaid
flowchart LR
  A[3 clicks] --> TA[toArray()]
  TA --> SUB[array]
```
