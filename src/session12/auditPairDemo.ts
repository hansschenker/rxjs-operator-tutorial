/**
```mermaid
flowchart LR
  A[Rapid clicks] --> B1[audit(_ => timer(800ms))]
  A --> B2[auditTime(800ms)]
  B1 --> C1[emit last after each 800ms window]
  B2 --> C2[same with fixed time]
```
*/
import { fromEvent, audit, auditTime, map, timer } from 'rxjs';

export function mountAuditPairDemo() {
  const area = document.getElementById('auditArea') as HTMLDivElement | null;
  const log1 = document.getElementById('auditLog') as HTMLDivElement | null;
  const log2 = document.getElementById('auditTimeLog') as HTMLDivElement | null;
  if (!area || !log1 || !log2) return;

  const clicks$ = fromEvent<MouseEvent>(area, 'click').pipe(
    map(e => ({ x: e.offsetX, y: e.offsetY, t: Date.now() }))
  );

  // audit with duration selector
  clicks$.pipe(
    audit(() => timer(800))
  ).subscribe(v => {
    log1.textContent += `audit(800ms): (${v.x},${v.y}) @ ${v.t}\n`;
  });

  // auditTime with fixed duration
  clicks$.pipe(
    auditTime(800)
  ).subscribe(v => {
    log2.textContent += `auditTime(800ms): (${v.x},${v.y}) @ ${v.t}\n`;
  });
}
