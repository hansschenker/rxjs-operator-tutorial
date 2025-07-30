/**
```mermaid
flowchart LR
  A[Clicks] --> B[scan(acc+1)]
  A --> C[mergeScan(acc -> delayed(acc+1))]
  B --> D[Subscriber (sync accumulate)]
  C --> D[Subscriber (async accumulate)]
```
*/
import { fromEvent, scan, mergeScan, of, delay } from 'rxjs';

export function mountScanMergeScanDemo() {
  const incBtn = document.getElementById('scanInc') as HTMLButtonElement | null;
  const log = document.getElementById('scanLog') as HTMLDivElement | null;
  const logAsync = document.getElementById('mergeScanLog') as HTMLDivElement | null;
  if (!incBtn || !log || !logAsync) return;

  // scan: synchronous accumulation
  fromEvent(incBtn, 'click').pipe(
    scan((count) => count + 1, 0)
  ).subscribe(v => {
    log.textContent = `scan count: ${v}`;
  });

  // mergeScan: async accumulation (simulate delay)
  fromEvent(incBtn, 'click').pipe(
    mergeScan((count) => of(count + 1).pipe(delay(250)), 0)
  ).subscribe(v => {
    logAsync.textContent = `mergeScan count: ${v}`;
  });
}
