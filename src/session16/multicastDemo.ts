/**
```mermaid
flowchart LR
  S[interval(500ms).take(5)] --> M[multicast(new Subject())]
  M --> C[connect()]
  M --> A[Sub A]
  M --> B[Sub B]
```
*/
import { interval, take, map, Subject, multicast } from 'rxjs';

export function mountMulticastDemo() {
  const connectBtn = document.getElementById('mcConnect') as HTMLButtonElement | null;
  const subABtn = document.getElementById('mcSubA') as HTMLButtonElement | null;
  const subBBtn = document.getElementById('mcSubB') as HTMLButtonElement | null;
  const resetBtn = document.getElementById('mcReset') as HTMLButtonElement | null;
  const logA = document.getElementById('mcLogA') as HTMLDivElement | null;
  const logB = document.getElementById('mcLogB') as HTMLDivElement | null;
  if (!connectBtn || !subABtn || !subBBtn || !resetBtn || !logA || !logB) return;

  let connection: any;
  let subA: any, subB: any;

  const source$ = interval(500).pipe(
    take(5),
    map(i => `tick ${i}`)
  );

  // multicast with a Subject
  // Note: returns a ConnectableObservable that needs connect()
  // Use 'any' to keep the demo simple without extra types
  let shared$: any = source$.pipe(multicast(() => new Subject<string>()));

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
    shared$ = source$.pipe(multicast(() => new Subject<string>()));
  });
}
