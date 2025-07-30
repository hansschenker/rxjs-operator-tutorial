/**
```mermaid
flowchart LR
  A1[Observable 1] --> B[race]
  A2[Observable 2] --> B
  B -- "first source wins" --> C[Subscriber]
```
*/
import { race, interval, map, take } from 'rxjs';

export function mountRaceDemo() {
  const runBtn = document.getElementById('raceRun') as HTMLButtonElement | null;
  const log = document.getElementById('raceLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    log.textContent = '';
    const slow$ = interval(400).pipe(map(i => `slow ${i}`), take(3));
    const fast$ = interval(200).pipe(map(i => `fast ${i}`), take(3));

    race(slow$, fast$).subscribe(v => {
      log.textContent += `race: ${v}\n`;
    });
  });
}
