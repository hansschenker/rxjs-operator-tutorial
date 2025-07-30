/**
```mermaid
flowchart LR
  A[button clicks] --> B[throttleTime(1000ms)]
  B -- "emit first, ignore during period" --> C[Subscriber]
```
*/
import { fromEvent, throttleTime } from 'rxjs';

export function mountThrottleDemo() {
  const btn = document.getElementById('throttleBtn') as HTMLButtonElement | null;
  const log = document.getElementById('throttleLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    throttleTime(1000)
  ).subscribe(() => {
    log.textContent += 'throttle: click\n';
  });
}
