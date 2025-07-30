/**
```mermaid
flowchart LR
  A[button clicks] --> B[auditTime(1000ms)]
  B -- "ignore, then emit last after period" --> C[Subscriber]
```
*/
import { fromEvent, auditTime } from 'rxjs';

export function mountAuditDemo() {
  const btn = document.getElementById('auditBtn') as HTMLButtonElement | null;
  const log = document.getElementById('auditLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  fromEvent(btn, 'click').pipe(
    auditTime(1000)
  ).subscribe(() => {
    log.textContent += 'audit: last click\n';
  });
}
