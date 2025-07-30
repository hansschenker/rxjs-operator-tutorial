/**
```mermaid
flowchart LR
  A1[Input A] --> B[combineLatest]
  A2[Input B] --> B
  B -- "[a,b] when both have emitted" --> C[Subscriber]
```
*/
import { combineLatest, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export function mountCombineLatestDemo() {
  const a = document.getElementById('clInputA') as HTMLInputElement | null;
  const b = document.getElementById('clInputB') as HTMLInputElement | null;
  const log = document.getElementById('clLog') as HTMLDivElement | null;
  if (!a || !b || !log) return;

  const a$ = fromEvent<InputEvent>(a, 'input').pipe(
    map(e => (e.target as HTMLInputElement).value),
    startWith(a.value)
  );
  const b$ = fromEvent<InputEvent>(b, 'input').pipe(
    map(e => (e.target as HTMLInputElement).value),
    startWith(b.value)
  );

  combineLatest([a$, b$]).subscribe(([av, bv]) => {
    log.textContent = `combineLatest: [${av}, ${bv}]`;
  });
}
