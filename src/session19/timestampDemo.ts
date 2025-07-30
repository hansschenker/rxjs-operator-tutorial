import { fromEvent, timestamp } from 'rxjs';

/**
```mermaid
flowchart LR
  A[click events] --> TS[timestamp()]
  TS --> SUB[Subscriber {value, timestamp}]
```
*/
export function mountTimestampDemo() {
  const btn = document.getElementById('timestampBtn') as HTMLButtonElement | null;
  const log = document.getElementById('timestampLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    timestamp()
  ).subscribe(({ value, timestamp }) => {
    log.textContent += `click at ${new Date(timestamp).toLocaleTimeString()}\n`;
  });
}
