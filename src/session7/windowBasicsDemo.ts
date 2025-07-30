/**
Window basics: window, windowCount, windowTime
*/
import { interval, fromEvent, window, windowCount, windowTime, mergeAll, take } from 'rxjs';

export function mountWindowBasicsDemo() {
  const log = document.getElementById('windowLog') as HTMLDivElement | null;
  if (!log) return;

  const source$ = interval(500).pipe(take(10));

  // windowTime: group every 2s
  source$.pipe(windowTime(2000), mergeAll()).subscribe(val => {
    log.textContent += `windowTime value: ${val}\n`;
  });

  // windowCount: groups of 3 values
  source$.pipe(windowCount(3), mergeAll()).subscribe(val => {
    log.textContent += `windowCount value: ${val}\n`;
  });
}
