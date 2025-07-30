/**
```mermaid
flowchart LR
  A[Subject<number>] --> E[every(n => n % 2 === 0)]
  E --> S[emit true if all even; false early otherwise]
```
*/
import { Subject, every } from 'rxjs';

export function mountEveryDemo() {
  const addBtn = document.getElementById('everyAdd') as HTMLButtonElement | null;
  const completeBtn = document.getElementById('everyComplete') as HTMLButtonElement | null;
  const input = document.getElementById('everyInput') as HTMLInputElement | null;
  const log = document.getElementById('everyLog') as HTMLDivElement | null;
  if (!addBtn || !completeBtn || !input || !log) return;

  const numbers$ = new Subject<number>();

  numbers$.pipe(
    every(n => n % 2 === 0)
  ).subscribe({
    next: v => log.textContent += `every result: ${v}\n`,
    complete: () => log.textContent += 'every complete\n'
  });

  addBtn.addEventListener('click', () => {
    const n = Number(input.value);
    log.textContent += `add: ${n}\n`;
    numbers$.next(n);
  });
  completeBtn.addEventListener('click', () => numbers$.complete());
}
