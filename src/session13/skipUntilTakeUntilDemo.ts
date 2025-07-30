/**
```mermaid
flowchart LR
  A[interval(500ms)] --> B1[skipUntil(start$)]
  A --> B2[skipWhile(n<5)]
  A --> B3[takeUntil(stop$)]
  A --> B4[takeWhile(n<5)]
```
*/
import { interval, skipUntil, skipWhile, takeUntil, takeWhile } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

export function mountSkipUntilTakeUntilDemo() {
  const startBtn = document.getElementById('startNotifier') as HTMLButtonElement | null;
  const stopBtn = document.getElementById('stopNotifier') as HTMLButtonElement | null;
  const log = document.getElementById('skipUntilTakeUntilLog') as HTMLDivElement | null;
  if (!startBtn || !stopBtn || !log) return;

  const start$ = fromEvent(startBtn, 'click').pipe(tap(() => log.textContent += '--- start notifier fired ---\n'));
  const stop$ = fromEvent(stopBtn, 'click').pipe(tap(() => log.textContent += '--- stop notifier fired ---\n'));

  const source$ = interval(500).pipe(map(i => i + 1));

  // skipUntil & skipWhile
  source$.pipe(skipUntil(start$)).subscribe(v => log.textContent += `skipUntil start: ${v}\n`);
  source$.pipe(skipWhile(n => n < 5)).subscribe(v => log.textContent += `skipWhile <5: ${v}\n`);

  // takeUntil & takeWhile
  source$.pipe(takeUntil(stop$)).subscribe(v => log.textContent += `takeUntil stop: ${v}\n`);
  source$.pipe(takeWhile(n => n < 5)).subscribe(v => log.textContent += `takeWhile <5: ${v}\n`);
}
