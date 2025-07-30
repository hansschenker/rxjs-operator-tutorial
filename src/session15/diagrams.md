# Session 15 — Mermaid Diagrams (Combination Helpers)

## startWith
```mermaid
flowchart LR
  A[source$ (clicks)] --> B[startWith("Hello")]
  B --> C[emit Hello first, then source values]
```

## withLatestFrom
```mermaid
flowchart LR
  A[source$ clicks] --> B[withLatestFrom(other$ interval)]
  B --> C[emit [click, latest interval value]]
```
