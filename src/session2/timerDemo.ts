/**
```mermaid
flowchart LR
  A[Scheduler] -- "due time (ms)" --> B[timer(due, period?)]
  B -- "first tick (and subsequent ticks if period)" --> C[Observable<number>]
  C -- "next n" --> D[Subscriber]
```
*/
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

export function mountTimerDemo() {
  const btn = document.getElementById('timerStartBtn') as HTMLButtonElement | null;
  const log = document.getElementById('timerLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    // one-shot timer after 2s
    timer(2000).subscribe({
      next: v => (log.textContent += `timer fired with value ${v}\n`),
      complete: () => (log.textContent += 'timer complete\n')
    });

    // repeating timer every second after initial delay
    timer(1000, 1000).pipe(take(3)).subscribe({
      next: v => (log.textContent += `timer repeat tick ${v}\n`),
      complete: () => (log.textContent += 'repeating timer complete\n')
    });
  });
}
