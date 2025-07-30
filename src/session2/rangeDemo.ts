/**
```mermaid
flowchart LR
  A[start] -- "start..start+count-1" --> B[range(start, count)]
  B -- "values" --> C[Observable<number>]
  C -- "next n" --> D[Subscriber]
```
*/
import { range } from 'rxjs';

export function mountRangeDemo() {
  const btn = document.getElementById('rangeStartBtn') as HTMLButtonElement | null;
  const log = document.getElementById('rangeLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    range(3, 5).subscribe({
      next: v => (log.textContent += `range emitted ${v}\n`),
      complete: () => (log.textContent += 'range complete\n')
    });
  });
}
