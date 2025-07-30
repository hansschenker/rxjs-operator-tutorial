/**
```mermaid
flowchart LR
  A[source$] --> B[partition(predicate)]
  B -- "true" --> C[Observable<T>]
  B -- "false" --> D[Observable<T>]
```
*/
import { partition, from } from 'rxjs';

export function mountPartitionDemo() {
  const runBtn = document.getElementById('partitionRun') as HTMLButtonElement | null;
  const logTrue = document.getElementById('partitionTrueLog') as HTMLDivElement | null;
  const logFalse = document.getElementById('partitionFalseLog') as HTMLDivElement | null;
  if (!runBtn || !logTrue || !logFalse) return;

  runBtn.addEventListener('click', () => {
    logTrue.textContent = '';
    logFalse.textContent = '';
    const [evens$, odds$] = partition(from([1,2,3,4,5,6]), n => n % 2 === 0);
    evens$.subscribe(v => logTrue.textContent += `even: ${v}\n`);
    odds$.subscribe(v => logFalse.textContent += `odd: ${v}\n`);
  });
}
