/**
```mermaid
flowchart LR
  A1[Observable 1] --> B[concat]
  A2[Observable 2] --> B
  B -- "values in sequence" --> C[Subscriber]
```
*/
import { concat, of, delay } from 'rxjs';

export function mountConcatDemo() {
  const runBtn = document.getElementById('concatRun') as HTMLButtonElement | null;
  const log = document.getElementById('concatLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    log.textContent = '';
    const obs1$ = of('A1', 'A2').pipe(delay(500));
    const obs2$ = of('B1', 'B2').pipe(delay(500));

    concat(obs1$, obs2$).subscribe(v => {
      log.textContent += v + '\n';
    });
  });
}
