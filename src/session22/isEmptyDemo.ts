/**
```mermaid
flowchart LR
  A[Subject] --> IE[isEmpty()]
  IE --> S[emit true if source completes without any next]
```
*/
import { Subject, isEmpty } from 'rxjs';

export function mountIsEmptyDemo() {
  const emitBtn = document.getElementById('ieEmit') as HTMLButtonElement | null;
  const completeBtn = document.getElementById('ieComplete') as HTMLButtonElement | null;
  const input = document.getElementById('ieInput') as HTMLInputElement | null;
  const log = document.getElementById('isEmptyLog') as HTMLDivElement | null;
  if (!emitBtn || !completeBtn || !input || !log) return;

  const src$ = new Subject<string>();

  src$.pipe(
    isEmpty()
  ).subscribe({
    next: v => log.textContent += `isEmpty: ${v}\n`,
    complete: () => log.textContent += 'complete\n'
  });

  emitBtn.addEventListener('click', () => {
    src$.next(input.value || '(value)');
  });
  completeBtn.addEventListener('click', () => src$.complete());
}
