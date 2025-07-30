/**
```mermaid
flowchart LR
  A[iif(predicate, if$, else$)] -- "subscribe" --> B["pick one branch"]
  B --> C[Observable<T>]
  C --> D[Subscriber]
```
*/
import { iif, of, EMPTY } from 'rxjs';

let toggle = false;

export function mountIifDemo() {
  const runBtn = document.getElementById('iifRun') as HTMLButtonElement | null;
  const log = document.getElementById('iifLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    toggle = !toggle;
    iif(() => toggle, of('iif: TRUE branch'), of('iif: FALSE branch')).subscribe(
      v => log.textContent += v + '\n',
      undefined,
      () => log.textContent += 'iif: complete\n'
    );

    // example with EMPTY as false branch
    iif(() => toggle, of('data'), EMPTY).subscribe({
      complete: () => log.textContent += `iif with EMPTY: ${toggle ? "data branch" : "no emissions"}\n`
    });
  });
}
