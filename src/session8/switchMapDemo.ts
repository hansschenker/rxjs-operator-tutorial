/**
```mermaid
flowchart LR
  A[clicks] --> B[switchMap]
  B -- "cancel previous" --> C[inner Observable]
```
*/
import { fromEvent, interval, switchMap, take } from 'rxjs';

export function mountSwitchMapDemo() {
  const btn = document.getElementById('switchMapBtn') as HTMLButtonElement | null;
  const log = document.getElementById('switchMapLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    switchMap((_, i) => interval(300).pipe(take(3)))
  ).subscribe(v => {
    log.textContent += `switchMap inner: ${v}\n`;
  });
}
