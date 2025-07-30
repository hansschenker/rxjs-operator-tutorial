/**
```mermaid
flowchart LR
  A[from([1,1,2,2,3,1])] --> B[distinctUntilChanged()]
  B --> C[Subscriber (1,2,3,1)]
```
*/
import { from, distinctUntilChanged } from 'rxjs';

export function mountDistinctUntilChangedDemo() {
  const btn = document.getElementById('ducRun') as HTMLButtonElement | null;
  const log = document.getElementById('ducLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    from([1,1,2,2,3,1]).pipe(
      distinctUntilChanged()
    ).subscribe(v => {
      log.textContent += `distinctUntilChanged: ${v}\n`;
    });
  });
}
