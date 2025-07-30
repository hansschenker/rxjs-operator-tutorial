/**
```mermaid
flowchart LR
  A[clicks] --> B[exhaustMap]
  B -- "ignore while inner active" --> C[inner Observable]
```
*/
import { fromEvent, interval, exhaustMap, take } from 'rxjs';

export function mountExhaustMapDemo() {
  const btn = document.getElementById('exhaustMapBtn') as HTMLButtonElement | null;
  const log = document.getElementById('exhaustMapLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    exhaustMap((_, i) => interval(300).pipe(take(3)))
  ).subscribe(v => {
    log.textContent += `exhaustMap inner: ${v}\n`;
  });
}
