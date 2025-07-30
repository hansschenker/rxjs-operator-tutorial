import { fromEvent, map, delayWhen, timer } from 'rxjs';

/**
```mermaid
flowchart LR
  A[button clicks] --> DW[delayWhen(_ => timer(1000 + rand))]
  DW --> SUB[Subscriber]
```
*/
export function mountDelayWhenDemo() {
  const btn = document.getElementById('delayWhenBtn') as HTMLButtonElement | null;
  const log = document.getElementById('delayWhenLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    map(() => 'click!'),
    delayWhen(() => timer(500 + Math.random() * 1500))
  ).subscribe(v => log.textContent += `delayedWhen: ${v}\n`);
}
