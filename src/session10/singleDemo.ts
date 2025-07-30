/**
```mermaid
flowchart LR
  A[from([1,2,3])] --> B[single(x==2)] --> C[emit 2]
  A2[from([1,2,2,3])] --> B2[single(x==2)] --> D[error (multiple matches)]
```
*/
import { from, single, catchError, of } from 'rxjs';

export function mountSingleDemo() {
  const okBtn = document.getElementById('singleOk') as HTMLButtonElement | null;
  const errBtn = document.getElementById('singleErr') as HTMLButtonElement | null;
  const log = document.getElementById('singleLog') as HTMLDivElement | null;
  if (!okBtn || !errBtn || !log) return;

  okBtn.addEventListener('click', () => {
    log.textContent = '';
    from([1,2,3]).pipe(
      single(x => x === 2)
    ).subscribe({
      next: v => log.textContent += `single match: ${v}\n`,
      complete: () => log.textContent += 'complete\n'
    });
  });

  errBtn.addEventListener('click', () => {
    log.textContent = '';
    from([1,2,2,3]).pipe(
      single(x => x === 2),
      catchError(err => of(`single error: ${err}`))
    ).subscribe(v => {
      log.textContent += v + '\n';
    });
  });
}
