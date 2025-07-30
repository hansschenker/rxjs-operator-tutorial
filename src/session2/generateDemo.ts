/**
```mermaid
flowchart LR
  A[start] -- "condition, iterate" --> B[generate()]
  B -- "emits sequence" --> C[Observable<T>]
  C -- "next v" --> D[Subscriber]
```
*/
import { generate } from 'rxjs';

export function mountGenerateDemo() {
  const btn = document.getElementById('generateStartBtn') as HTMLButtonElement | null;
  const log = document.getElementById('generateLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    generate({
      initialState: 0,
      condition: x => x < 5,
      iterate: x => x + 1,
      resultSelector: x => `generate value: ${x}`
    }).subscribe({
      next: v => (log.textContent += v + "\n"),
      complete: () => (log.textContent += "generate complete\n")
    });
  });
}
