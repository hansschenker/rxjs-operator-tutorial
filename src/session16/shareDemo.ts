/**
```mermaid
flowchart LR
  S[interval(500ms).take(6)] --> SH[share()]
  SH --> A[Sub A]
  SH --> B[Sub B]
  note right of SH: auto refCount
starts on first sub
stops on last unsub
```
*/
import { interval, take, map, share } from 'rxjs';

export function mountShareDemo() {
  const subABtn = document.getElementById('shareSubA') as HTMLButtonElement | null;
  const unsubABtn = document.getElementById('shareUnsubA') as HTMLButtonElement | null;
  const subBBtn = document.getElementById('shareSubB') as HTMLButtonElement | null;
  const unsubBBtn = document.getElementById('shareUnsubB') as HTMLButtonElement | null;
  const resetBtn = document.getElementById('shareReset') as HTMLButtonElement | null;
  const logA = document.getElementById('shareLogA') as HTMLDivElement | null;
  const logB = document.getElementById('shareLogB') as HTMLDivElement | null;
  if (!subABtn || !unsubABtn || !subBBtn || !unsubBBtn || !resetBtn || !logA || !logB) return;

  const makeSource = () => interval(500).pipe(take(6), map(i => `tick ${i}`));
  let shared$ = makeSource().pipe(share());

  let subA: any, subB: any;

  subABtn.addEventListener('click', () => {
    if (!subA) subA = shared$.subscribe(v => (logA!.textContent += `A: ${v}\n`), undefined, () => (logA!.textContent += 'A complete\n'));
  });
  unsubABtn.addEventListener('click', () => { subA?.unsubscribe(); subA = null; });

  subBBtn.addEventListener('click', () => {
    if (!subB) subB = shared$.subscribe(v => (logB!.textContent += `B: ${v}\n`), undefined, () => (logB!.textContent += 'B complete\n'));
  });
  unsubBBtn.addEventListener('click', () => { subB?.unsubscribe(); subB = null; });

  resetBtn.addEventListener('click', () => {
    subA?.unsubscribe(); subA = null;
    subB?.unsubscribe(); subB = null;
    logA!.textContent = '';
    logB!.textContent = '';
    shared$ = makeSource().pipe(share());
  });
}
