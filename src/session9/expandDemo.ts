/**
```mermaid
flowchart LR
  A[start 4] --> B[expand(n -> n-1 with delay)]
  B -- "4,3,2,1,0" --> C[Subscriber]
```
*/
import { of, expand, delay, takeWhile } from 'rxjs';

export function mountExpandDemo() {
  const runBtn = document.getElementById('expandRun') as HTMLButtonElement | null;
  const log = document.getElementById('expandLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    log.textContent = '';
    of(4).pipe(
      expand(n => of(n - 1).pipe(delay(300))),
      takeWhile(n => n >= 0, true) // include 0
    ).subscribe(n => {
      log.textContent += `expand: ${n}\n`;
    });
  });
}
