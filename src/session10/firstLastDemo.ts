/**
```mermaid
flowchart LR
  A[range(1..10)] --> B1[first(n > 5)]
  A --> B2[last(n % 3 === 0)]
  B1 --> C1[emit 6 then complete]
  B2 --> C2[emit 9 on completion]
```
*/
import { range, first, last } from 'rxjs';

export function mountFirstLastDemo() {
  const btn = document.getElementById('firstLastRun') as HTMLButtonElement | null;
  const log1 = document.getElementById('firstLog') as HTMLDivElement | null;
  const log2 = document.getElementById('lastLog') as HTMLDivElement | null;
  if (!btn || !log1 || !log2) return;

  btn.addEventListener('click', () => {
    log1.textContent = '';
    log2.textContent = '';

    range(1, 10).pipe(
      first(n => n > 5)
    ).subscribe(v => {
      log1.textContent += `first >5: ${v}\n`;
    });

    range(1, 10).pipe(
      last(n => n % 3 === 0)
    ).subscribe(v => {
      log2.textContent += `last %3==0: ${v}\n`;
    });
  });
}
