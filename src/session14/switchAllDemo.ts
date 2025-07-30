/**
```mermaid
flowchart LR
  A[spawns] --> B[map -> inner interval(300ms).take(5)]
  B --> C[switchAll]
  C --> D["switch to latest inner; cancel previous"]
```
*/
import { fromEvent, map, interval, take, switchAll } from 'rxjs';

export function mountSwitchAllDemo() {
  const btn = document.getElementById('switchAllSpawn') as HTMLButtonElement | null;
  const log = document.getElementById('switchAllLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  let id = 0;
  const spawn$ = fromEvent(btn, 'click').pipe(
    map(() => {
      const innerId = ++id;
      return interval(300).pipe(
        take(5),
        map(i => `#${innerId}:${i}`)
      );
    })
  );

  spawn$.pipe(
    switchAll()
  ).subscribe(v => {
    log.textContent += `switchAll: ${v}\n`;
  });
}
