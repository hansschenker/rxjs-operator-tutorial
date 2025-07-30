/**
```mermaid
flowchart LR
  A1[Observable 1] --> B[zip]
  A2[Observable 2] --> B
  B -- "[v1, v2] by index" --> C[Subscriber]
```
*/
import { zip, interval, take } from 'rxjs';

export function mountZipDemo() {
  const runBtn = document.getElementById('zipRun') as HTMLButtonElement | null;
  const log = document.getElementById('zipLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    log.textContent = '';
    const a$ = interval(500).pipe(take(3)); // 0,1,2
    const b$ = interval(300).pipe(take(3)); // 0,1,2

    zip(a$, b$).subscribe(pair => {
      log.textContent += `zip: ${JSON.stringify(pair)}\n`;
    });
  });
}
