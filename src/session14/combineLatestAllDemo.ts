/**
```mermaid
flowchart LR
  A[spawns (clicks)] --> B[map -> inner interval(300ms).take(3)]
  B --> C[combineLatestAll]
  C --> D["emit array of latest values of all active inners"]
```
*/
import { fromEvent, map, interval, take, combineLatestAll } from 'rxjs';

export function mountCombineLatestAllDemo() {
  const btn = document.getElementById('claSpawn') as HTMLButtonElement | null;
  const log = document.getElementById('claLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  let id = 0;
  const spawn$ = fromEvent(btn, 'click').pipe(
    map(() => {
      const innerId = ++id;
      // Inner: 3 values over 0.3s intervals
      return interval(300).pipe(
        take(3),
        map(i => `#${innerId}:${i}`)
      );
    })
  );

  spawn$.pipe(
    combineLatestAll()
  ).subscribe(arr => {
    log.textContent += `combineLatestAll: [${arr.join(', ')}]\n`;
  });
}
