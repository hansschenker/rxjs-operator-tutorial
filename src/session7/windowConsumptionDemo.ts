/**
```mermaid
flowchart LR
  S[interval(300ms)] --> W[windowTime(1s)]
  W -- "mergeMap(toArray())" --> A["arrays of values"]
  W -- "mergeAll()" --> V["values as they arrive"]
```
*/
import { interval, windowTime, mergeMap, toArray, mergeAll, map, take } from 'rxjs';

export function mountWindowConsumptionDemo() {
  const logA = document.getElementById('windowArraysLog') as HTMLDivElement | null;
  const logV = document.getElementById('windowValuesLog') as HTMLDivElement | null;
  if (!logA || !logV) return;

  const src$ = interval(300);

  // Flatten windows to arrays
  src$.pipe(
    windowTime(1000),
    take(3),
    mergeMap(w$ => w$.pipe(toArray()))
  ).subscribe(arr => {
    logA.textContent += `arrays: ${JSON.stringify(arr)}\n`;
  });

  // Or stream values directly via mergeAll (with labeling)
  src$.pipe(
    windowTime(1000),
    take(2),
    map((w$, i) => w$.pipe(map(v => `w${i}:${v}`))),
    mergeAll()
  ).subscribe(v => {
    logV.textContent += `value: ${v}\n`;
  });
}
