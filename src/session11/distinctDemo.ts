/**
```mermaid
flowchart LR
  A[from([1,2,2,3,1,4])] --> B[distinct()]
  B --> C[Subscriber (1,2,3,4)]
```
*/
import { from, distinct } from 'rxjs';

export function mountDistinctDemo() {
  const btn = document.getElementById('distinctRun') as HTMLButtonElement | null;
  const log = document.getElementById('distinctLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    from([1,2,2,3,1,4]).pipe(
      distinct()
    ).subscribe(v => {
      log.textContent += `distinct: ${v}\n`;
    });
  });
}
