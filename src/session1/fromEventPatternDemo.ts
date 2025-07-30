/**
```mermaid
flowchart LR
  A[Custom Source] -- "add(handler) → token" --> B[fromEventPattern(add, remove)]
  B -- "payloads v1, v2, ..." --> C[Observable<T>]
  C -- "next v" --> D[Subscriber]
  D -- "unsubscribe" --> E["remove(handler, token)"]
```
*/
import { fromEventPattern } from 'rxjs';

type Pos = { x: number; y: number };

export function mountFromEventPatternDemo() {
  const area = document.getElementById('fePatternArea') as HTMLDivElement | null;
  const log = document.getElementById('fePatternLog') as HTMLDivElement | null;
  if (!area || !log) return;

  function add(handler: (v: Pos) => void) {
    const listener = (e: MouseEvent) => handler({ x: e.offsetX, y: e.offsetY });
    area.addEventListener('mousemove', listener);
    return listener; // token returned to remove
  }
  function remove(_handler: (v: Pos) => void, token: (e: MouseEvent) => void) {
    area.removeEventListener('mousemove', token);
  }

  const pos$ = fromEventPattern<Pos>(add, remove);
  const sub = pos$.subscribe(({ x, y }) => {
    log.textContent += `fromEventPattern: (${x}, ${y})\n`;
  });

  (window as any).__fromEventPatternSub = sub;
}
