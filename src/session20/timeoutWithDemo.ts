import { fromEvent, timeoutWith, of } from 'rxjs';

/**
```mermaid
flowchart LR
  A[clicks] --> TW[timeoutWith(2000, of('fallback'))]
  TW --> SUB[Subscriber fallback]
```
*/
export function mountTimeoutWithDemo() {
  const btn = document.getElementById('timeoutWithBtn') as HTMLButtonElement | null;
  const log = document.getElementById('timeoutWithLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    timeoutWith(2000, of('fallback'))
  ).subscribe(v => {
    log.textContent += `value: ${v}\n`;
  });
}
