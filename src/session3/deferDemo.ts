/**
```mermaid
flowchart LR
  A[defer(factory)] -- "subscribe" --> B[factory() returns Observable]
  B --> C[Observable<T>]
  C --> D[Subscriber]
```
*/
import { defer, of } from 'rxjs';

let counter = 0;

export function mountDeferDemo() {
  const runBtn = document.getElementById('deferRun') as HTMLButtonElement | null;
  const log = document.getElementById('deferLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  const src$ = defer(() => {
    counter++;
    return of(`defer: subscription #${counter}`);
  });

  runBtn.addEventListener('click', () => {
    src$.subscribe(v => log.textContent += v + '\n');
  });
}
