import { from, find } from 'rxjs';

/**
```mermaid
flowchart LR
  A[array] --> F[find(x > 3)]
  F --> SUB[first match or undefined]
```
*/
export function mountFindDemo() {
  const btn = document.getElementById('findBtn') as HTMLButtonElement | null;
  const log = document.getElementById('findLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    from([1, 2, 5, 3]).pipe(
      find(x => x > 3)
    ).subscribe(v => log.textContent += `find > 3: ${v}\n`);
  });
}
