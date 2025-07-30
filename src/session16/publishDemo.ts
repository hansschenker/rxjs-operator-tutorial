/**
```mermaid
flowchart LR
  S[interval(400ms).take(4)] --> P[publish()]
  P --> C[connect()]
  P --> A[Sub A]
  P --> B[Sub B]
```
*/
import { interval, take, map, publish } from 'rxjs';

export function mountPublishDemo() {
  const connectBtn = document.getElementById('pubConnect') as HTMLButtonElement | null;
  const subABtn = document.getElementById('pubSubA') as HTMLButtonElement | null;
  const subBBtn = document.getElementById('pubSubB') as HTMLButtonElement | null;
  const resetBtn = document.getElementById('pubReset') as HTMLButtonElement | null;
  const logA = document.getElementById('pubLogA') as HTMLDivElement | null;
  const logB = document.getElementById('pubLogB') as HTMLDivElement | null;
  if (!connectBtn || !subABtn || !subBBtn || !resetBtn || !logA || !logB) return;

  let connection: any;
  let subA: any, subB: any;

  const source$ = interval(400).pipe(
    take(4),
    map(i => `tick ${i}`)
  );

  let shared$: any = source$.pipe(publish());

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
    shared$ = source$.pipe(publish());
  });
}
