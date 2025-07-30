# RxJS Operator Handbook

A concise companion to the interactive demos in this repository.

## How to Use This Handbook
- Start with the **Session Index** in the README.
- Skim the **A–Z Operators** section for quick links.
- Use **Pitfalls & Best Practices** for production guidance.

## Contents
- Sessions 1–24 overview
- Operator A–Z quick refs
- Pitfalls & Best Practices (highlights)

## Highlights
- **Mapping**: `map`, `mergeMap`, `switchMap`, `concatMap`, `exhaustMap` — choose based on cancellation/ordering/concurrency.
- **Joining**: `combineLatest` (live), `forkJoin` (on complete), `withLatestFrom` (on source).
- **Filtering**: `filter`, `takeUntil`, `distinctUntilChanged`, `debounceTime`, `throttleTime`, `auditTime`.
- **Multicasting**: Prefer `share` / `shareReplay` for UI caching.
- **Errors**: `catchError`, `retry`, `retryWhen` with backoff.
- **Timing**: `delay`, `timestamp`, `timeoutWith` (fallback).

For full details and diagrams, open the session files and `diagrams.md` in each session folder.
