/**
```mermaid
flowchart LR
  S[interval(500ms).take(4)] --> PB[publishBehavior('INIT')]
  PB --> C[connect()]
  PB --> A[Sub A (gets INIT immediately)]
  PB --> B[Sub B (gets latest-so-far)]
```
*/
import { interval, take, map, publishBehavior } from 'rxjs';

export function mountPublishBehaviorDemo() {
  const connectBtn = document.getElementById('pbConnect') as HTMLButtonElement | null;
  const subABtn = document.getElementById('pbSubA') as HTMLButtonElement | null;
  const subBBtn = document.getElementById('pbSubB') as HTMLButtonElement | null;
  const resetBtn = document.getElementById('pbReset') as HTMLButtonElement | null;
  const logA = document.getElementById('pbLogA') as HTMLDivElement | null;
  const logB = document.getElementById('pbLogB') as HTMLDivElement | null;
  if (!connectBtn || !subABtn || !subBBtn || !resetBtn || !logA || !logB) return;

  let connection: any;
  let subA: any, subB: any;

  const source$ = interval(500).pipe(
    take(4),
    map(i => `tick ${i}`)
  );

  let shared$: any = source$.pipe(publishBehavior('INIT'));

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
    shared$ = source$.pipe(publishBehavior('INIT'));
  });
}
