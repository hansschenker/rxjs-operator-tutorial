import { fromEvent, take, map, toArray } from 'rxjs';

/**
```mermaid
flowchart LR
  A[3 clicks] --> TA[toArray()]
  TA --> SUB[array]
```
*/
export function mountToArrayDemo() {
  const btn = document.getElementById('toArrayBtn') as HTMLButtonElement | null;
  const log = document.getElementById('toArrayLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    map(() => Math.random().toFixed(2)),
    take(3),
    toArray()
  ).subscribe(arr => log.textContent += `array: ${arr.join(', ')}\n`);
}
