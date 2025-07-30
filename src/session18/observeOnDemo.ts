/**
```mermaid
flowchart LR
  A[range(1..5)] --> B1[tap('pre')]
  B1 --> O[observeOn(asyncScheduler)]
  O --> B2[tap('post')]
  B2 --> S[Subscriber]
  note right of O: downstream notifications are async
```
*/
import { range, tap, observeOn, asyncScheduler } from 'rxjs';

export function mountObserveOnDemo() {
  const runBtn = document.getElementById('observeOnRun') as HTMLButtonElement | null;
  const log = document.getElementById('observeOnLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    log.textContent = '';
    log.textContent += 'clicked: subscribing...\n';

    range(1, 5).pipe(
      tap(n => log.textContent += `pre observeOn: ${n}\n`),
      observeOn(asyncScheduler),
      tap(n => log.textContent += `post observeOn (async): ${n}\n`)
    ).subscribe({
      next: n => log.textContent += `next: ${n}\n`,
      complete: () => log.textContent += 'complete\n'
    });

    log.textContent += 'clicked: after subscribe (see ordering)\n';
  });
}
