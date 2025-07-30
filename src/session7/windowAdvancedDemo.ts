/**
Window advanced: windowToggle, windowWhen
*/
import { interval, fromEvent, windowToggle, windowWhen, mergeAll, take } from 'rxjs';

export function mountWindowAdvancedDemo() {
  const log = document.getElementById('windowAdvLog') as HTMLDivElement | null;
  if (!log) return;

  const source$ = interval(500).pipe(take(10));
  const openings$ = interval(2000);

  // windowToggle: open windows every 2s, close after 1s
  source$.pipe(windowToggle(openings$, () => interval(1000)), mergeAll()).subscribe(val => {
    log.textContent += `windowToggle value: ${val}\n`;
  });

  // windowWhen: open immediately, close after 2s repeatedly
  source$.pipe(windowWhen(() => interval(2000)), mergeAll()).subscribe(val => {
    log.textContent += `windowWhen value: ${val}\n`;
  });
}
