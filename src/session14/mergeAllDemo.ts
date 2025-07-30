/**
```mermaid
flowchart LR
  A[spawns] --> B[map -> inner interval(250ms).take(3)]
  B --> C[mergeAll]
  C --> D["interleave values from all inners concurrently"]
```
*/
import { fromEvent, map, interval, take, mergeAll } from 'rxjs';

export function mountMergeAllDemo() {
  const btn = document.getElementById('mergeAllSpawn') as HTMLButtonElement | null;
  const log = document.getElementById('mergeAllLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  let id = 0;
  const spawn$ = fromEvent(btn, 'click').pipe(
    map(() => {
      const innerId = ++id;
      return interval(250).pipe(
        take(3),
        map(i => `#${innerId}:${i}`)
      );
    })
  );

  spawn$.pipe(
    mergeAll()
  ).subscribe(v => {
    log.textContent += `mergeAll: ${v}\n`;
  });
}
