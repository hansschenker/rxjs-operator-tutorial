/**
```mermaid
flowchart LR
  A["values..."] -- "emit sequentially" --> B[of(v1, v2, v3)]
  B -- "v1,v2,v3" --> C[Observable<T>]
  C --> D[Subscriber]
```
*/
import { of } from 'rxjs';

export function mountOfDemo() {
  const runBtn = document.getElementById('ofRun') as HTMLButtonElement | null;
  const log = document.getElementById('ofLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    of(1,2,3).subscribe(v => log.textContent += `of: ${v}\n`);
    of(['a','b']).subscribe(v => log.textContent += `of(array literal): ${v}\n`);
  });
}
