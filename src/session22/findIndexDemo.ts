import { from, findIndex } from 'rxjs';

/**
```mermaid
flowchart LR
  A[array] --> FI[findIndex(x > 3)]
  FI --> SUB[index or -1]
```
*/
export function mountFindIndexDemo() {
  const btn = document.getElementById('findIndexBtn') as HTMLButtonElement | null;
  const log = document.getElementById('findIndexLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    from([1, 2, 5, 3]).pipe(
      findIndex(x => x > 3)
    ).subscribe(v => log.textContent += `findIndex > 3: ${v}\n`);
  });
}
