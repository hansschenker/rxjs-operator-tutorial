/**
```mermaid
flowchart LR
  A[Start Job clicks] --> SS[switchScan((state,_) => inner job$)]
  SS --> S[emit {job, step} progress; previous job cancelled]
```
*/
import { fromEvent, switchScan, interval, map, take } from 'rxjs';

export function mountSwitchScanDemo() {
  const btn = document.getElementById('switchScanStart') as HTMLButtonElement | null;
  const log = document.getElementById('switchScanLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  let jobId = 0;

  fromEvent(btn, 'click').pipe(
    switchScan((_state) => {
      jobId++;
      const id = jobId;
      return interval(300).pipe(
        take(5),
        map(i => ({ job: id, step: i + 1 }))
      );
    }, { job: 0, step: 0 } as any)
  ).subscribe(v => {
    log.textContent += `job #${v.job} step ${v.step}\n`;
  });
}
