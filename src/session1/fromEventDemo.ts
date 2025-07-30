/**
```mermaid
flowchart LR
  A[DOM Button] -- "click" --> B[fromEvent('click')]
  B -- "e1, e2, e3, ..." --> C[Observable<MouseEvent>]
  C -- "next e" --> D[Subscriber]
```
*/
import { fromEvent } from 'rxjs';
import { map, throttleTime, takeUntil } from 'rxjs/operators';

export function mountFromEventDemo() {
  const btn = document.getElementById('fromEventBtn') as HTMLButtonElement | null;
  const log = document.getElementById('fromEventLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  const stop$ = fromEvent(window, 'beforeunload');

  const clicks$ = fromEvent<MouseEvent>(btn, 'click').pipe(
    throttleTime(500),
    map(e => ({ x: e.clientX, y: e.clientY })),
    takeUntil(stop$)
  );

  const sub = clicks$.subscribe(({ x, y }) => {
    log.textContent += `fromEvent: click at (${x}, ${y})\n`;
  });

  // optional: expose teardown for debugging
  (window as any).__fromEventSub = sub;
}
