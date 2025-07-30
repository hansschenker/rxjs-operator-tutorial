/**
```mermaid
flowchart LR
  S[interval(300ms).take(5)] --> PR[publishReplay(2)]
  PR --> C[connect()]
  PR --> A[Sub A]
  PR --> B[Sub B (gets last 2 replayed)]
```
*/
import { interval, take, map, publishReplay } from 'rxjs';

export function mountPublishReplayDemo() {
  const connectBtn = document.getElementById('prConnect') as HTMLButtonElement | null;
  const subABtn = document.getElementById('prSubA') as HTMLButtonElement | null;
  const subBBtn = document.getElementById('prSubB') as HTMLButtonElement | null;
  const resetBtn = document.getElementById('prReset') as HTMLButtonElement | null;
  const logA = document.getElementById('prLogA') as HTMLDivElement | null;
  const logB = document.getElementById('prLogB') as HTMLDivElement | null;
  if (!connectBtn || !subABtn || !subBBtn || !resetBtn || !logA || !logB) return;

  let connection: any;
  let subA: any, subB: any;

  const source$ = interval(300).pipe(
    take(5),
    map(i => `tick ${i}`)
  );

  let shared$: any = source$.pipe(publishReplay(2));

  connectBtn.addEventListener('click', () => {
    if (!connection) {
      connection = shared$.connect();
      logA!.textContent += 'connected\n';
      logB!.textContent += 'connected\n';
    }
  });

  subABtn.addEventListener('click', () => {
    if (!subA) {
      subA = shared$.subscribe((v: string) => (logA!.textContent += `A: ${v}\n`), undefined, () => (logA!.textContent += 'A complete\n'));
    }
  });

  subBBtn.addEventListener('click', () => {
    if (!subB) {
      subB = shared$.subscribe((v: string) => (logB!.textContent += `B: ${v}\n`), undefined, () => (logB!.textContent += 'B complete\n'));
    }
  });

  resetBtn.addEventListener('click', () => {
    subA?.unsubscribe(); subA = null;
    subB?.unsubscribe(); subB = null;
    connection?.unsubscribe(); connection = null;
    logA!.textContent = '';
    logB!.textContent = '';
    shared$ = source$.pipe(publishReplay(2));
  });
}
