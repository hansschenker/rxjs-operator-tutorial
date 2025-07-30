/**
```mermaid
flowchart LR
  A[Slider input] --> B[pluck('target','value')]
  B --> C[pairwise() -> [prev, curr]]
  C --> D[Subscriber (delta)]
```
*/
import { fromEvent, pluck, pairwise, map } from 'rxjs';

export function mountPairwisePluckDemo() {
  const slider = document.getElementById('pairSlider') as HTMLInputElement | null;
  const log = document.getElementById('pairwiseLog') as HTMLDivElement | null;
  const logPluck = document.getElementById('pluckLog') as HTMLDivElement | null;
  if (!slider || !log || !logPluck) return;

  // Using pluck (deprecated in favor of map, shown for reference)
  fromEvent(slider, 'input').pipe(
    pluck('target', 'value'),
    map(v => Number(v))
  ).subscribe(v => {
    logPluck.textContent = `pluck->value: ${v}`;
  });

  // Using pairwise to compare previous and current value
  fromEvent(slider, 'input').pipe(
    map((e: Event) => Number((e.target as HTMLInputElement).value)),
    pairwise()
  ).subscribe(([prev, curr]) => {
    const delta = curr - prev;
    log.textContent = `pairwise: ${prev} → ${curr} (Δ ${delta >= 0 ? '+' : ''}${delta})`;
  });
}
