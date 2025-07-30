/**
Advanced buffer operators: bufferToggle, bufferWhen
*/
import { fromEvent, interval, bufferToggle, bufferWhen } from 'rxjs';

export function mountBufferAdvancedDemo() {
  const btn = document.getElementById('bufferAdvBtn') as HTMLButtonElement | null;
  const log = document.getElementById('bufferAdvLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  const clicks$ = fromEvent(btn, 'click');

  // bufferToggle: open on click, close after 2s
  clicks$.pipe(bufferToggle(clicks$, () => interval(2000))).subscribe(arr => {
    log.textContent += `bufferToggle: ${arr.length} clicks\n`;
  });

  // bufferWhen: open on first emission, close when factory completes
  clicks$.pipe(bufferWhen(() => interval(3000))).subscribe(arr => {
    log.textContent += `bufferWhen: ${arr.length} clicks\n`;
  });
}
