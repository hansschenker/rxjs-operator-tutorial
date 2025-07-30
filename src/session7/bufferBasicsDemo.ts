/**
```mermaid
flowchart LR
  A[click events] --> B[bufferTime(2s)]
  B -- "every 2s" --> C["emit array of events"]
```
*/
import { fromEvent, buffer, bufferCount, bufferTime, interval } from 'rxjs';

export function mountBufferBasicsDemo() {
  const btn = document.getElementById('bufferBtn') as HTMLButtonElement | null;
  const log = document.getElementById('bufferLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  // Clicks as source
  const clicks$ = fromEvent(btn, 'click');

  // bufferTime: every 2 seconds
  clicks$.pipe(bufferTime(2000)).subscribe(arr => {
    log.textContent += `bufferTime: [${arr.length} clicks]\n`;
  });

  // bufferCount: every 3 clicks
  clicks$.pipe(bufferCount(3)).subscribe(arr => {
    log.textContent += `bufferCount(3): ${arr.length} clicks\n`;
  });

  // buffer with interval(3s) as closing signal
  const closing$ = interval(3000);
  clicks$.pipe(buffer(closing$)).subscribe(arr => {
    log.textContent += `buffer(signal): ${arr.length} clicks\n`;
  });
}
