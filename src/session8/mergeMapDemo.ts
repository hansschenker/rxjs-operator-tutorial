/**
```mermaid
flowchart LR
  A[clicks] --> B[mergeMap]
  B --> C[multiple inner Observables active]
```
*/
import { fromEvent, interval, mergeMap, take } from 'rxjs';

export function mountMergeMapDemo() {
  const btn = document.getElementById('mergeMapBtn') as HTMLButtonElement | null;
  const log = document.getElementById('mergeMapLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    mergeMap((_, i) => interval(300).pipe(take(3)))
  ).subscribe(v => {
    log.textContent += `mergeMap inner: ${v}\n`;
  });
}
