/**
```mermaid
flowchart LR
  A[Subject<string>] --> F[find(s => s.length >= 5)]
  A --> FI[findIndex(s => s === 'target')]
  F --> S1[emit first matching value or undefined on complete]
  FI --> S2[emit first matching index or -1 on complete]
```
*/
import { Subject, find, findIndex } from 'rxjs';

export function mountFindFindIndexDemo() {
  const addBtn = document.getElementById('ffiAdd') as HTMLButtonElement | null;
  const completeBtn = document.getElementById('ffiComplete') as HTMLButtonElement | null;
  const input = document.getElementById('ffiInput') as HTMLInputElement | null;
  const logFind = document.getElementById('findLog') as HTMLDivElement | null;
  const logFindIdx = document.getElementById('findIndexLog') as HTMLDivElement | null;
  if (!addBtn || !completeBtn || !input || !logFind || !logFindIdx) return;

  const words$ = new Subject<string>();

  words$.pipe(
    find(s => s.length >= 5)
  ).subscribe(v => {
    logFind.textContent += `find (len>=5): ${String(v)}\n`;
  });

  words$.pipe(
    findIndex(s => s === 'target')
  ).subscribe(v => {
    logFindIdx.textContent += `findIndex ('target'): ${v}\n`;
  });

  let idx = 0;
  addBtn.addEventListener('click', () => {
    const val = input.value.trim();
    words$.next(val);
    idx++;
  });
  completeBtn.addEventListener('click', () => {
    words$.complete();
  });
}
