/**
```mermaid
flowchart LR
  S[range(1..5)] --> PL[publishLast()]
  PL --> C[connect()]
  PL --> A[Sub A (gets 5 on complete)]
  PL --> B[Sub B (gets 5 on complete)]
```
*/
import { range, publishLast } from 'rxjs';

export function mountPublishLastDemo() {
  const connectBtn = document.getElementById('plConnect') as HTMLButtonElement | null;
  const subABtn = document.getElementById('plSubA') as HTMLButtonElement | null;
  const subBBtn = document.getElementById('plSubB') as HTMLButtonElement | null;
  const resetBtn = document.getElementById('plReset') as HTMLButtonElement | null;
  const logA = document.getElementById('plLogA') as HTMLDivElement | null;
  const logB = document.getElementById('plLogB') as HTMLDivElement | null;
  if (!connectBtn || !subABtn || !subBBtn || !resetBtn || !logA || !logB) return;

  let connection: any;
  let subA: any, subB: any;

  const source$ = range(1, 5); // emits 1..5 then complete

  let shared$: any = source$.pipe(publishLast());

  connectBtn.addEventListener('click', () => {
    if (!connection) {
      connection = shared$.connect();
      logA!.textContent += 'connected\n';
      logB!.textContent += 'connected\n';
    }
  });

  subABtn.addEventListener('click', () => {
    if (!subA) {
      subA = shared$.subscribe((v: number) => (logA!.textContent += `A: ${v}\n`), undefined, () => (logA!.textContent += 'A complete\n'));
    }
  });

  subBBtn.addEventListener('click', () => {
    if (!subB) {
      subB = shared$.subscribe((v: number) => (logB!.textContent += `B: ${v}\n`), undefined, () => (logB!.textContent += 'B complete\n'));
    }
  });

  resetBtn.addEventListener('click', () => {
    subA?.unsubscribe(); subA = null;
    subB?.unsubscribe(); subB = null;
    connection?.unsubscribe(); connection = null;
    logA!.textContent = '';
    logB!.textContent = '';
    shared$ = source$.pipe(publishLast());
  });
}
