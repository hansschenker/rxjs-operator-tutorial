/**
```mermaid
flowchart LR
  A1[Click Btn 1] --> B[merge]
  A2[Click Btn 2] --> B
  B -- "interleaved values" --> C[Subscriber]
```
*/
import { merge, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

export function mountMergeDemo() {
  const btn1 = document.getElementById('mergeBtn1') as HTMLButtonElement | null;
  const btn2 = document.getElementById('mergeBtn2') as HTMLButtonElement | null;
  const log = document.getElementById('mergeLog') as HTMLDivElement | null;
  if (!btn1 || !btn2 || !log) return;

  const clicks1$ = fromEvent(btn1, 'click').pipe(map(() => 'Btn1 clicked'));
  const clicks2$ = fromEvent(btn2, 'click').pipe(map(() => 'Btn2 clicked'));

  merge(clicks1$, clicks2$).subscribe(msg => {
    log.textContent += msg + '\n';
  });
}
