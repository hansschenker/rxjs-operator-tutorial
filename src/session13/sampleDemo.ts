/**
```mermaid
flowchart LR
  A[interval(200ms)] --> B1[sample(notifier click)]
  A --> B2[sampleTime(1s)]
```
*/
import { interval, sample, sampleTime } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

export function mountSampleDemo() {
  const btn = document.getElementById('sampleBtn') as HTMLButtonElement | null;
  const log = document.getElementById('sampleLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  const notifier$ = fromEvent(btn, 'click');

  const source$ = interval(200).pipe(map(i => i + 1));

  source$.pipe(sample(notifier$)).subscribe(v => log.textContent += `sample(notifier click): ${v}\n`);
  source$.pipe(sampleTime(1000)).subscribe(v => log.textContent += `sampleTime(1s): ${v}\n`);
}
