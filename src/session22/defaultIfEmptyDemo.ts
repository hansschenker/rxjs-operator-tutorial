/**
```mermaid
flowchart LR
  A[Subject] --> B[defaultIfEmpty('DEFAULT')]
  B --> S[Subscriber]
  note right of B: if source emits nothing, emit DEFAULT on complete
```
*/
import { Subject, defaultIfEmpty } from 'rxjs';

export function mountDefaultIfEmptyDemo() {
  const emitBtn = document.getElementById('dieEmit') as HTMLButtonElement | null;
  const completeBtn = document.getElementById('dieComplete') as HTMLButtonElement | null;
  const input = document.getElementById('dieInput') as HTMLInputElement | null;
  const log = document.getElementById('dieLog') as HTMLDivElement | null;
  if (!emitBtn || !completeBtn || !input || !log) return;

  const src$ = new Subject<string>();

  src$.pipe(
    defaultIfEmpty('DEFAULT')
  ).subscribe({
    next: v => log.textContent += `next: ${v}\n`,
    complete: () => log.textContent += 'complete\n'
  });

  emitBtn.addEventListener('click', () => {
    src$.next(input.value || '(empty string)');
  });
  completeBtn.addEventListener('click', () => {
    src$.complete();
  });
}
