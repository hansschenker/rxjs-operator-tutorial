/**
```mermaid
flowchart LR
  S[interval(300ms).take(6)] --> M[map(i => throw if i==3)]
  M --> CE[catchError(() => of('fallback'))]
  CE --> SUB[Subscriber (values + fallback + complete)]
```
*/
import { interval, take, map, catchError, of } from 'rxjs';

export function mountCatchErrorDemo() {
  const btn = document.getElementById('catchRun') as HTMLButtonElement | null;
  const log = document.getElementById('catchLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    interval(300).pipe(
      take(6),
      map(i => {
        if (i === 3) {
          throw new Error('boom at i=3');
        }
        return i;
      }),
      catchError(err => {
        log.textContent += `caught: ${err}\n`;
        return of('fallback');
      })
    ).subscribe({
      next: v => (log.textContent += `next: ${v}\n`),
      complete: () => (log.textContent += 'complete\n')
    });
  });
}
