/**
```mermaid
flowchart LR
  A[Array | Promise | Iterable] -- "adapt" --> B[from(source)]
  B -- "values" --> C[Observable<T>]
  C --> D[Subscriber]
```
*/
import { from } from 'rxjs';

export function mountFromDemo() {
  const runBtn = document.getElementById('fromRun') as HTMLButtonElement | null;
  const log = document.getElementById('fromLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    log.textContent += 'from(): Array -> Observable\n';
    from([10, 20, 30]).subscribe(v => log.textContent += `from array: ${v}\n`);

    log.textContent += 'from(): Promise -> Observable\n';
    const promise = Promise.resolve('Hello from Promise');
    from(promise).subscribe(v => log.textContent += `from promise: ${v}\n`);
  });
}
