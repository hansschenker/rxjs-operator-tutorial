/**
```mermaid
flowchart LR
  A[source$ (clicks)] --> B[startWith("Hello")]
  B --> C[emit Hello first, then source values]
```
*/
import { fromEvent, startWith, map } from 'rxjs';

export function mountStartWithDemo() {
  const btn = document.getElementById('startWithBtn') as HTMLButtonElement | null;
  const log = document.getElementById('startWithLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    map((_, i) => `click`),
    startWith('Hello (startWith)')
  ).subscribe(v => {
    log.textContent += `startWith: ${v}\n`;
  });
}
