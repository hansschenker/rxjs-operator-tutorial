/**
```mermaid
flowchart LR
  A[Input keystrokes] --> B1[debounce(v => timer(dynamic))]
  A --> B2[debounceTime(400ms)]
  B1 --> C1[emit after dynamic quiet period]
  B2 --> C2[emit after 400ms quiet]
```
*/
import { fromEvent, debounce, debounceTime, map, timer } from 'rxjs';

export function mountDebouncePairDemo() {
  const input = document.getElementById('debounceInput') as HTMLInputElement | null;
  const log1 = document.getElementById('debounceLog') as HTMLDivElement | null;
  const log2 = document.getElementById('debounceTimeLog') as HTMLDivElement | null;
  if (!input || !log1 || !log2) return;

  const keystrokes$ = fromEvent<InputEvent>(input, 'input').pipe(
    map(e => (e.target as HTMLInputElement).value)
  );

  // debounce with dynamic duration: longer strings wait a bit longer
  keystrokes$.pipe(
    debounce(text => timer(200 + Math.min(text.length, 10) * 50))
  ).subscribe(v => {
    log1.textContent += `debounce(dynamic): "${v}"\n`;
  });

  // debounceTime with fixed delay
  keystrokes$.pipe(
    debounceTime(400)
  ).subscribe(v => {
    log2.textContent += `debounceTime(400ms): "${v}"\n`;
  });
}
