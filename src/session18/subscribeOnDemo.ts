/**
```mermaid
flowchart LR
  A[click handler] --> S1[subscribe()]
  S1 --> SO[subscribeOn(asyncScheduler)]
  SO --> D[defer logs 'subscribing' asynchronously]
  D --> SUB[Subscriber]
```
*/
import { defer, of, tap, subscribeOn, asyncScheduler } from 'rxjs';

export function mountSubscribeOnDemo() {
  const syncBtn = document.getElementById('subOnSync') as HTMLButtonElement | null;
  const asyncBtn = document.getElementById('subOnAsync') as HTMLButtonElement | null;
  const log = document.getElementById('subscribeOnLog') as HTMLDivElement | null;
  if (!syncBtn || !asyncBtn || !log) return;

  const makeSource = (label: string) => defer(() => {
    log.textContent += `${label}: subscribing\n`;
    return of('value');
  }).pipe(
    tap(() => log.textContent += `${label}: producing value\n`)
  );

  syncBtn.addEventListener('click', () => {
    log.textContent = '';
    log.textContent += 'SYNC: before subscribe\n';
    makeSource('SYNC').subscribe(v => {
      log.textContent += `SYNC: next=${v}\n`;
    });
    log.textContent += 'SYNC: after subscribe\n';
  });

  asyncBtn.addEventListener('click', () => {
    log.textContent = '';
    log.textContent += 'ASYNC: before subscribe\n';
    makeSource('ASYNC').pipe(
      subscribeOn(asyncScheduler)
    ).subscribe(v => {
      log.textContent += `ASYNC: next=${v}\n`;
    });
    log.textContent += 'ASYNC: after subscribe (note subscribing happens later)\n';
  });
}
