/**
```mermaid
flowchart LR
  A[input values] --> B[map(x => transform)]
  B --> C[transformed values]
  A --> D[mapTo(constant)] --> E[constant values]
```
*/
import { fromEvent, map } from 'rxjs';

export function mountMapDemo() {
  const input = document.getElementById('mapInput') as HTMLInputElement | null;
  const log = document.getElementById('mapLog') as HTMLDivElement | null;
  if (!input || !log) return;

  fromEvent<InputEvent>(input, 'input').pipe(
    map(e => (e.target as HTMLInputElement).value.toUpperCase())
  ).subscribe(val => {
    log.textContent = `map: ${val}`;
  });

  fromEvent<InputEvent>(input, 'input').pipe(
    map(() => 'constant')
  ).subscribe(val => {
    log.textContent += `\nmapTo: ${val}`;
  });
}
