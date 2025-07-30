/**
```mermaid
flowchart LR
  A[Spawn clicks] --> MM[mergeMap(task$, concurrency=2)]
  MM --> S[run up to 2 tasks; queue the rest]
```
*/
import { fromEvent, interval, map, mergeMap, take } from 'rxjs';

export function mountMergeMapConcurrencyDemo() {
  const btn = document.getElementById('mmcSpawn') as HTMLButtonElement | null;
  const log = document.getElementById('mmcLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    mergeMap((_, idx) => {
      const id = idx + 1;
      return interval(250).pipe(
        take(4),
        map(i => `task#${id}:${i}`)
      );
    }, 2) // concurrency=2
  ).subscribe(v => {
    log.textContent += v + '\n';
  });
}
