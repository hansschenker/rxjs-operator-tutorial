/**
```mermaid
flowchart LR
  A[interval(300ms) take(5)] --> B[elementAt(2)] --> C[emit 2]
  A --> B2[elementAt(10, 'N/A')] --> C2[emit default on completion]
```
*/
import { interval, take, elementAt } from 'rxjs';

export function mountElementAtDemo() {
  const btn1 = document.getElementById('elementAtRun') as HTMLButtonElement | null;
  const btn2 = document.getElementById('elementAtDefault') as HTMLButtonElement | null;
  const log = document.getElementById('elementAtLog') as HTMLDivElement | null;
  if (!btn1 || !btn2 || !log) return;

  btn1.addEventListener('click', () => {
    log.textContent = '';
    interval(300).pipe(
      take(5),
      elementAt(2) // 0-based -> third emission
    ).subscribe(v => {
      log.textContent += `elementAt(2): ${v}\n`;
    });
  });

  btn2.addEventListener('click', () => {
    log.textContent = '';
    interval(300).pipe(
      take(5),
      elementAt(10, 'N/A' as any)
    ).subscribe(v => {
      log.textContent += `elementAt(10, 'N/A'): ${v}\n`;
    });
  });
}
