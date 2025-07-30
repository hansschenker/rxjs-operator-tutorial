/**
```mermaid
flowchart LR
  A[clicks -> inner interval(3)] --> B1[mergeAll()]
  A --> B2[concatAll()]
  B1 --> C1[interleave values]
  B2 --> C2[queue inner observables sequentially]
```
*/
import { fromEvent, interval, map, mergeAll, concatAll, take } from 'rxjs';

export function mountMergeAllConcatAllDemo() {
  const btn = document.getElementById('mergeConcatBtn') as HTMLButtonElement | null;
  const log1 = document.getElementById('mergeAllLog') as HTMLDivElement | null;
  const log2 = document.getElementById('concatAllLog') as HTMLDivElement | null;
  if (!btn || !log1 || !log2) return;

  const click$ = fromEvent(btn, 'click').pipe(
    map(() => interval(300).pipe(take(3)))
  );

  // mergeAll: concurrent flattening
  click$.pipe(mergeAll()).subscribe(v => {
    log1.textContent += `mergeAll: ${v}\n`;
  });

  // concatAll: sequential flattening
  click$.pipe(concatAll()).subscribe(v => {
    log2.textContent += `concatAll: ${v}\n`;
  });
}
