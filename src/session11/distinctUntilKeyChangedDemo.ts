/**
```mermaid
flowchart LR
  A[from(objects)] --> B[distinctUntilKeyChanged('id')]
  B --> C[Subscriber (emit when id changes)]
```
*/
import { from, distinctUntilKeyChanged } from 'rxjs';

export function mountDistinctUntilKeyChangedDemo() {
  const btn = document.getElementById('dukRun') as HTMLButtonElement | null;
  const log = document.getElementById('dukLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    from([
      { id: 1, name: 'A' },
      { id: 1, name: 'A2' },
      { id: 2, name: 'B' },
      { id: 2, name: 'B2' },
      { id: 3, name: 'C' }
    ]).pipe(
      distinctUntilKeyChanged('id')
    ).subscribe(v => {
      log.textContent += `id=${v.id}, name=${v.name}\n`;
    });
  });
}
