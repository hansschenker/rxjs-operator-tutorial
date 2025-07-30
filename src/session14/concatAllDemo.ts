/**
```mermaid
flowchart LR
  A[spawns] --> B[map -> inner interval(200ms).take(3)]
  B --> C[concatAll]
  C --> D["run inners sequentially"]
```
*/
import { fromEvent, map, interval, take, concatAll } from 'rxjs';

export function mountConcatAllDemo() {
  const btn = document.getElementById('concatAllSpawn') as HTMLButtonElement | null;
  const log = document.getElementById('concatAllLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  let id = 0;
  const spawn$ = fromEvent(btn, 'click').pipe(
    map(() => {
      const innerId = ++id;
      return interval(200).pipe(
        take(3),
        map(i => `#${innerId}:${i}`)
      );
    })
  );

  spawn$.pipe(
    concatAll()
  ).subscribe(v => {
    log.textContent += `concatAll: ${v}\n`;
  });
}
