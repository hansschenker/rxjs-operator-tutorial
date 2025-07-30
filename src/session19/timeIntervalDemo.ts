import { fromEvent, timeInterval } from 'rxjs';

/**
```mermaid
flowchart LR
  A[click events] --> TI[timeInterval()]
  TI --> SUB[Subscriber {value, interval}]
```
*/
export function mountTimeIntervalDemo() {
  const btn = document.getElementById('timeIntervalBtn') as HTMLButtonElement | null;
  const log = document.getElementById('timeIntervalLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    timeInterval()
  ).subscribe(({ value, interval }) => {
    log.textContent += `click after ${interval}ms\n`;
  });
}
