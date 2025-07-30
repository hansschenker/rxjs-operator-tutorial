/**
```mermaid
flowchart LR
  A[input typing] --> B[debounceTime(500ms)]
  B -- "emit after pause" --> C[Subscriber]
```
*/
import { fromEvent, debounceTime, map } from 'rxjs';

export function mountDebounceDemo() {
  const input = document.getElementById('debounceInput') as HTMLInputElement | null;
  const log = document.getElementById('debounceLog') as HTMLDivElement | null;
  if (!input || !log) return;

  fromEvent<InputEvent>(input, 'input').pipe(
    map(e => (e.target as HTMLInputElement).value),
    debounceTime(500)
  ).subscribe(v => {
    log.textContent += `debounceTime: "${v}"\n`;
  });
}
