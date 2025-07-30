/**
```mermaid
flowchart LR
  A[EMPTY] -- "subscribe" --> B["complete immediately"]
  B --> C[Subscriber]
```
*/
import { EMPTY } from 'rxjs';

export function mountEmptyDemo() {
  const runBtn = document.getElementById('emptyRun') as HTMLButtonElement | null;
  const log = document.getElementById('emptyLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    EMPTY.subscribe({
      next: () => log.textContent += 'next (never)\n',
      complete: () => log.textContent += 'EMPTY: complete immediately\n'
    });
  });
}
