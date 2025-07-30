/**
```mermaid
flowchart LR
  A[Subject<number>] --> C[count() / count(pred)]
  C --> S[emit count on complete]
```
*/
import { Subject, count } from 'rxjs';

export function mountCountDemo() {
  const addBtn = document.getElementById('countAdd') as HTMLButtonElement | null;
  const completeBtn = document.getElementById('countComplete') as HTMLButtonElement | null;
  const input = document.getElementById('countInput') as HTMLInputElement | null;
  const logAll = document.getElementById('countAllLog') as HTMLDivElement | null;
  const logEven = document.getElementById('countEvenLog') as HTMLDivElement | null;
  if (!addBtn || !completeBtn || !input || !logAll || !logEven) return;

  const src$ = new Subject<number>();

  src$.pipe(count()).subscribe(v => (logAll.textContent += `count(): ${v}\n`));
  src$.pipe(count(n => n % 2 === 0)).subscribe(v => (logEven.textContent += `count even: ${v}\n`));

  addBtn.addEventListener('click', () => {
    const n = Number(input.value);
    src$.next(n);
  });
  completeBtn.addEventListener('click', () => src$.complete());
}
