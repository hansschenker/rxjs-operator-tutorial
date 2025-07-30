/**
```mermaid
flowchart LR
  A[Rapid clicks] --> B1[throttle(_ => timer(1000))]
  A --> B2[throttleTime(1000, sched, {leading:true, trailing:true})]
  B1 --> C1[emit first, ignore for 1s]
  B2 --> C2[emit first and last in each 1s window]
```
*/
import { fromEvent, throttle, throttleTime, map, timer } from 'rxjs';

export function mountThrottlePairDemo() {
  const area = document.getElementById('throttleArea') as HTMLDivElement | null;
  const log1 = document.getElementById('throttleLog') as HTMLDivElement | null;
  const log2 = document.getElementById('throttleTimeLog') as HTMLDivElement | null;
  if (!area || !log1 || !log2) return;

  const clicks$ = fromEvent<MouseEvent>(area, 'click').pipe(
    map(e => ({ x: e.offsetX, y: e.offsetY, t: Date.now() }))
  );

  // throttle with duration selector (leading by default)
  clicks$.pipe(
    throttle(() => timer(1000))
  ).subscribe(v => {
    log1.textContent += `throttle(1s): (${v.x},${v.y}) @ ${v.t}\n`;
  });

  // throttleTime with trailing = true (emit first and last in window)
  clicks$.pipe(
    throttleTime(1000, undefined, { leading: true, trailing: true })
  ).subscribe(v => {
    log2.textContent += `throttleTime(1s, trailing): (${v.x},${v.y}) @ ${v.t}\n`;
  });
}
