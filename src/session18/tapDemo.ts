/**
```mermaid
flowchart LR
  A[input events] --> T[tap(side-effect)]
  T --> M[map(toUpperCase)]
  M --> S[Subscriber]
  note right of T: tap does not alter values
```
*/
import { fromEvent, tap, map } from 'rxjs';

export function mountTapDemo() {
  const input = document.getElementById('tapInput') as HTMLInputElement | null;
  const log = document.getElementById('tapLog') as HTMLDivElement | null;
  if (!input || !log) return;

  let sideEffects = 0;

  fromEvent<InputEvent>(input, 'input').pipe(
    tap(e => {
      sideEffects++;
      const val = (e.target as HTMLInputElement).value;
      log.textContent = `tap side-effect count=${sideEffects}; latest raw="${val}"\n` + log.textContent;
    }),
    map(e => (e.target as HTMLInputElement).value.toUpperCase())
  ).subscribe(v => {
    log.textContent = `map output (unchanged by tap): "${v}"\n` + log.textContent;
  });
}
