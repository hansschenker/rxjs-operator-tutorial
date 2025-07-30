# Session 16 — Mermaid Diagrams (Multicasting Operators)

## multicast
```mermaid
flowchart LR
  S[interval(500ms).take(5)] --> M[multicast(new Subject())]
  M --> C[connect()]
  M --> A[Sub A]
  M --> B[Sub B]
```
## publish
```mermaid
flowchart LR
  S[interval(400ms).take(4)] --> P[publish()]
  P --> C[connect()]
  P --> A[Sub A]
  P --> B[Sub B]
```
## publishBehavior
```mermaid
flowchart LR
  S[interval(500ms).take(4)] --> PB[publishBehavior('INIT')]
  PB --> C[connect()]
  PB --> A[Sub A (gets INIT)]
  PB --> B[Sub B (gets latest)]
```
## publishLast
```mermaid
flowchart LR
  S[range(1..5)] --> PL[publishLast()]
  PL --> C[connect()]
  PL --> A[Sub A]
  PL --> B[Sub B]
  C --> A & B["emit last on complete"]
```
## publishReplay
```mermaid
flowchart LR
  S[interval(300ms).take(5)] --> PR[publishReplay(2)]
  PR --> C[connect()]
  PR --> A[Sub A]
  PR --> B[Sub B (replay 2)]
```
## share
```mermaid
flowchart LR
  S[interval(500ms).take(6)] --> SH[share()]
  SH --> A[Sub A]
  SH --> B[Sub B]
  note right of SH: auto refCount\nstart on first sub\nstop on last unsub
```
