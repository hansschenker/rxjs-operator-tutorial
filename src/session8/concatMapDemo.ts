/**
```mermaid
flowchart LR
  A[clicks] --> B[concatMap]
  B -- "queue inner Observables" --> C[one at a time]
```
*/
import { fromEvent, interval, concatMap, take } from 'rxjs';

export function mountConcatMapDemo() {
  const btn = document.getElementById('concatMapBtn') as HTMLButtonElement | null;
  const log = document.getElementById('concatMapLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    concatMap((_, i) => interval(300).pipe(take(3)))
  ).subscribe(v => {
    log.textContent += `concatMap inner: ${v}\n`;
  });
}
