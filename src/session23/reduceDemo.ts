/**
```mermaid
flowchart LR
  A[range or inputs] --> R[reduce((acc,x)=>acc+x,0)]
  R --> S[emit sum on complete]
```
*/
import { Subject, reduce } from 'rxjs';

export function mountReduceDemo() {
  const addBtn = document.getElementById('reduceAdd') as HTMLButtonElement | null;
  const completeBtn = document.getElementById('reduceComplete') as HTMLButtonElement | null;
  const input = document.getElementById('reduceInput') as HTMLInputElement | null;
  const log = document.getElementById('reduceLog') as HTMLDivElement | null;
  if (!addBtn || !completeBtn || !input || !log) return;

  const src$ = new Subject<number>();

  src$.pipe(
    reduce((acc, n) => acc + n, 0)
  ).subscribe(v => (log.textContent += `sum: ${v}\n`));

  addBtn.addEventListener('click', () => {
    const n = Number(input.value);
    src$.next(n);
  });
  completeBtn.addEventListener('click', () => src$.complete());
}
