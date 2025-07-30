/**
```mermaid
flowchart LR
  A[source$ clicks] --> B[withLatestFrom(other$ interval)]
  B --> C[emit [click, latest interval value]]
```
*/
import { fromEvent, interval, withLatestFrom, map } from 'rxjs';

export function mountWithLatestFromDemo() {
  const btn = document.getElementById('wlfBtn') as HTMLButtonElement | null;
  const log = document.getElementById('wlfLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  const other$ = interval(1000);

  fromEvent(btn, 'click').pipe(
    withLatestFrom(other$),
    map(([_, latest]) => `click with latest interval: ${latest}`)
  ).subscribe(v => {
    log.textContent += `${v}\n`;
  });
}
