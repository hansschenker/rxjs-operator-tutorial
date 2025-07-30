/**
```mermaid
flowchart LR
  A[Subject<number>] --> MAX[max()]
  A --> MIN[min()]
  MAX --> S1[emit max on complete]
  MIN --> S2[emit min on complete]
```
*/
import { Subject, max, min } from 'rxjs';

export function mountMaxMinDemo() {
  const addBtn = document.getElementById('mmAdd') as HTMLButton | null;
  const completeBtn = document.getElementById('mmComplete') as HTMLButton | null;
  const input = document.getElementById('mmInput') as HTMLInputElement | null;
  const logMax = document.getElementById('maxLog') as HTMLDivElement | null;
  const logMin = document.getElementById('minLog') as HTMLDivElement | null;
  if (!addBtn || !completeBtn || !input || !logMax || !logMin) return;

  const src$ = new Subject<number>();

  src$.pipe(max()).subscribe(v => (logMax.textContent += `max: ${v}\n`));
  src$.pipe(min()).subscribe(v => (logMin.textContent += `min: ${v}\n`));

  addBtn.addEventListener('click', () => {
    const n = Number(input.value);
    src$.next(n);
  });
  completeBtn.addEventListener('click', () => src$.complete());
}
