import { fromEvent, throttleTime, map, takeUntil } from 'rxjs';

const log = (msg: string) => (document.getElementById('log')!.textContent += msg + '\n');

export function runFromEventDemo() {
  const btn = document.getElementById('saveBtn') as HTMLButtonElement;
  const stop$ = fromEvent(window, 'beforeunload');

  fromEvent<MouseEvent>(btn, 'click').pipe(
    throttleTime(500),
    map(e => `Clicked at ${e.clientX}, ${e.clientY}`),
    takeUntil(stop$)
  ).subscribe(msg => log(msg));
}
