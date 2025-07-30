import { from, dematerialize, Notification } from 'rxjs';

/**
```mermaid
flowchart LR
  A[Notification[]] --> DM[dematerialize()]
  DM --> SUB[real events]
```
*/
export function mountDematerializeDemo() {
  const btn = document.getElementById('dematerializeBtn') as HTMLButtonElement | null;
  const log = document.getElementById('dematerializeLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  btn.addEventListener('click', () => {
    log.textContent = '';
    const notifications: Notification<string>[] = [
      { kind: 'N', value: 'A' },
      { kind: 'N', value: 'B' },
      { kind: 'C' }
    ] as any;
    from(notifications).pipe(
      dematerialize()
    ).subscribe({
      next: v => log.textContent += `next: ${v}\n`,
      complete: () => log.textContent += 'complete\n'
    });
  });
}
