/**
```mermaid
flowchart LR
  A[interval(300ms) take(5)] --> B[ignoreElements()]
  B --> C[only complete event]
```
*/
import { interval, take, ignoreElements } from 'rxjs';

export function mountIgnoreElementsDemo() {
  const btn = document.getElementById('ignoreElementsRun') as HTMLButtonElement | null;
  const log = document.getElementById('ignoreElementsLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    interval(300).pipe(
      take(5),
      ignoreElements()
    ).subscribe({
      next: () => log.textContent += 'next\n',
      complete: () => log.textContent += 'completed\n',
      error: (err) => log.textContent += `error: ${err}\n`
    });
  });
}
