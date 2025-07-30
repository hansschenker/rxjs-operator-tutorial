/**
```mermaid
flowchart LR
  A1[Observable 1] --> B[forkJoin]
  A2[Observable 2] --> B
  B -- "last values when all complete" --> C[Subscriber]
```
*/
import { forkJoin, of, delay } from 'rxjs';

export function mountForkJoinDemo() {
  const runBtn = document.getElementById('forkJoinRun') as HTMLButtonElement | null;
  const log = document.getElementById('forkJoinLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    log.textContent = '';
    const a$ = of('A').pipe(delay(500));
    const b$ = of('B').pipe(delay(1000));

    forkJoin([a$, b$]).subscribe(values => {
      log.textContent = `forkJoin: ${JSON.stringify(values)}`;
    });
  });
}
