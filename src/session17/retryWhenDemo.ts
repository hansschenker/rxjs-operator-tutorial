/**
```mermaid
flowchart LR
  C[click] --> D[defer(() => maybeFail())]
  D --> RW[retryWhen(errors$ -> errors$.pipe(scan + delayWhen))]
  RW --> SUB[Subscriber (success or gives up)]
```
*/
import { defer, of, throwError, retryWhen, scan, timer, mergeMap } from 'rxjs';

function sometimesFails() {
  // 60% chance to fail
  const ok = Math.random() >= 0.6;
  return ok ? of('OK') : throwError(() => new Error('failure'));
}

export function mountRetryWhenDemo() {
  const btn = document.getElementById('retryWhenRun') as HTMLButtonElement | null;
  const log = document.getElementById('retryWhenLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    let attempt = 0;

    defer(() => {
      attempt++;
      log.textContent += `attempt ${attempt}\n`;
      return sometimesFails();
    }).pipe(
      retryWhen(errors$ =>
        errors$.pipe(
          scan((count, err) => {
            if (count >= 3) {
              throw err; // give up after 3 retries
            }
            return count + 1;
          }, 0),
          mergeMap((count) => {
            const backoff = Math.pow(2, count) * 300; // 600, 1200, 2400...
            log.textContent += `backing off ${backoff}ms before retry ${count}\n`;
            return timer(backoff);
          })
        )
      )
    ).subscribe({
      next: v => (log.textContent += `success: ${v}\n`),
      error: err => (log.textContent += `final error: ${err}\n`),
      complete: () => (log.textContent += 'complete\n')
    });
  });
}
