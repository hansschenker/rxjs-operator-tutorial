import { fromEvent, timeout, map } from 'rxjs';

/**
```mermaid
flowchart LR
  A[clicks] --> TO[timeout(2000)]
  TO --> SUB[error if >2s gap]
```
*/
export function mountTimeoutDemo() {
  const btn = document.getElementById('timeoutBtn') as HTMLButtonElement | null;
  const log = document.getElementById('timeoutLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    map(() => 'click'),
    timeout(2000)
  ).subscribe({
    next: v => log.textContent += `next: ${v}\n`,
    error: err => log.textContent += `error: ${err}\n`,
    complete: () => log.textContent += 'complete\n'
  });
}
