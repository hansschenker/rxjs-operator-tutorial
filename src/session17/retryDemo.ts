/**
```mermaid
flowchart LR
  C[click] --> D[defer(() => maybeFail())]
  D --> R[retry(2)]
  R --> SUB[Subscriber (success or final error after retries)]
```
*/
import { defer, of, throwError, retry, tap } from 'rxjs';

function unstableRequest() {
  // 50% chance to fail
  const ok = Math.random() >= 0.5;
  return ok ? of('OK') : throwError(() => new Error('random failure'));
}

export function mountRetryDemo() {
  const btn = document.getElementById('retryRun') as HTMLButtonElement | null;
  const log = document.getElementById('retryLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    let attempt = 0;
    defer(() => {
      attempt++;
      log.textContent += `attempt ${attempt}\n`;
      return unstableRequest();
    }).pipe(
      retry(2), // total up to 3 attempts
      tap({
        error: (err) => (log.textContent += `final error: ${err}\n`)
      })
    ).subscribe({
      next: v => (log.textContent += `success: ${v}\n`),
      error: err => (log.textContent += `error after retries: ${err}\n`),
      complete: () => (log.textContent += 'complete\n')
    });
  });
}
