/**
```mermaid
flowchart LR
  A[range(1..10)] --> B1[skip(3)]
  A --> B2[take(5)]
  A --> B3[skipLast(2)]
  A --> B4[takeLast(3)]
  B1 --> C1[emit 4..10]
  B2 --> C2[emit 1..5]
  B3 --> C3[emit 1..8]
  B4 --> C4[emit 8..10]
```
*/
import { range, skip, take, skipLast, takeLast } from 'rxjs';

export function mountSkipTakeDemo() {
  const btn = document.getElementById('skipTakeRun') as HTMLButtonElement | null;
  const log = document.getElementById('skipTakeLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';

    range(1, 10).pipe(skip(3)).subscribe(v => log.textContent += `skip(3): ${v}\n`);
    range(1, 10).pipe(take(5)).subscribe(v => log.textContent += `take(5): ${v}\n`);
    range(1, 10).pipe(skipLast(2)).subscribe(v => log.textContent += `skipLast(2): ${v}\n`);
    range(1, 10).pipe(takeLast(3)).subscribe(v => log.textContent += `takeLast(3): ${v}\n`);
  });
}
