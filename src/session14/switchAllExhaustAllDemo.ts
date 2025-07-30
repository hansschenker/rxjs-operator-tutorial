/**
```mermaid
flowchart LR
  A[clicks -> inner interval(3)] --> B1[switchAll()]
  A --> B2[exhaustAll()]
  B1 --> C1[switch to latest inner]
  B2 --> C2[ignore new inners while current active]
```
*/
import { fromEvent, interval, map, switchAll, exhaustAll, take } from 'rxjs';

export function mountSwitchAllExhaustAllDemo() {
  const btn = document.getElementById('switchExhaustBtn') as HTMLButtonElement | null;
  const log1 = document.getElementById('switchAllLog') as HTMLDivElement | null;
  const log2 = document.getElementById('exhaustAllLog') as HTMLDivElement | null;
  if (!btn || !log1 || !log2) return;

  const click$ = fromEvent(btn, 'click').pipe(
    map(() => interval(300).pipe(take(3)))
  );

  // switchAll: switch to the latest inner observable
  click$.pipe(switchAll()).subscribe(v => {
    log1.textContent += `switchAll: ${v}\n`;
  });

  // exhaustAll: ignore new inners while current is active
  click$.pipe(exhaustAll()).subscribe(v => {
    log2.textContent += `exhaustAll: ${v}\n`;
  });
}
