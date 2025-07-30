/**
```mermaid
flowchart LR
  A[spawns] --> B[map -> inner interval(300ms).take(4)]
  B --> C[exhaustAll]
  C --> D["ignore new inners while one is active"]
```
*/
import { fromEvent, map, interval, take, exhaustAll } from 'rxjs';

export function mountExhaustAllDemo() {
  const btn = document.getElementById('exhaustAllSpawn') as HTMLButtonElement | null;
  const log = document.getElementById('exhaustAllLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  let id = 0;
  const spawn$ = fromEvent(btn, 'click').pipe(
    map(() => {
      const innerId = ++id;
      return interval(300).pipe(
        take(4),
        map(i => `#${innerId}:${i}`)
      );
    })
  );

  spawn$.pipe(
    exhaustAll()
  ).subscribe(v => {
    log.textContent += `exhaustAll: ${v}\n`;
  });
}
