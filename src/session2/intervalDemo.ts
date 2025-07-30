/**
```mermaid
flowchart LR
  A[Scheduler] -- "0,1,2..." every period --> B[interval(period)]
  B -- "ticks" --> C[Observable<number>]
  C -- "next n" --> D[Subscriber]
```
*/
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

export function mountIntervalDemo() {
  const btn = document.getElementById('intervalStartBtn') as HTMLButtonElement | null;
  const log = document.getElementById('intervalLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    interval(1000).pipe(
      map(i => `interval tick #${i}`),
      take(5)
    ).subscribe({
      next: v => (log.textContent += v + "\n"),
      complete: () => (log.textContent += "interval complete\n")
    });
  });
}
