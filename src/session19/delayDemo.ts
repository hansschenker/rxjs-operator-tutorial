import { fromEvent, map, delay } from 'rxjs';

/**
```mermaid
flowchart LR
  A[button clicks] --> D[delay(1000ms)]
  D --> SUB[Subscriber]
```
*/
export function mountDelayDemo() {
  const btn = document.getElementById('delayBtn') as HTMLButtonElement | null;
  const log = document.getElementById('delayLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    map(() => 'click!'),
    delay(1000)
  ).subscribe(v => log.textContent += `delayed: ${v}\n`);
}
