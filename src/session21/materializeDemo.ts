import { fromEvent, map, materialize } from 'rxjs';

/**
```mermaid
flowchart LR
  A[click events] --> M[materialize()]
  M --> SUB[Notification objects]
```
*/
export function mountMaterializeDemo() {
  const btn = document.getElementById('materializeBtn') as HTMLButtonElement | null;
  const log = document.getElementById('materializeLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    map(() => 'click'),
    materialize()
  ).subscribe(n => log.textContent += `${JSON.stringify(n)}\n`);
}
