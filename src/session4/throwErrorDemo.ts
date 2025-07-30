/**
```mermaid
flowchart LR
  A[throwError(error)] -- "subscribe" --> B["error notification"]
  B --> C[Subscriber]
```
*/
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export function mountThrowErrorDemo() {
  const runBtn = document.getElementById('throwRun') as HTMLButtonElement | null;
  const log = document.getElementById('throwLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    throwError(() => new Error('This is a thrown error')).pipe(
      catchError(err => of(`Caught: ${err.message}`))
    ).subscribe({
      next: v => log.textContent += v + '\n',
      error: e => log.textContent += `Uncaught: ${e}\n`,
      complete: () => log.textContent += 'Completed\n'
    });
  });
}
