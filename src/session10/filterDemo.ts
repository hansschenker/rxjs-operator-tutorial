/**
```mermaid
flowchart LR
  A[range(1..10)] --> B[filter(n % 2 === 0)]
  B --> C[Subscriber (even numbers)]
```
*/
import { range, filter } from 'rxjs';

export function mountFilterDemo() {
  const btn = document.getElementById('filterRun') as HTMLButtonElement | null;
  const log = document.getElementById('filterLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    range(1, 10).pipe(
      filter(n => n % 2 === 0)
    ).subscribe(n => {
      log.textContent += `filter even: ${n}\n`;
    });
  });
}
