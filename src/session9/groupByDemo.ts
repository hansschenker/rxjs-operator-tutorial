/**
```mermaid
flowchart LR
  A[items stream] --> B[groupBy(item.category)]
  B -- "GroupedObservables" --> C[mergeMap(group -> group.toArray())]
  C --> D[Subscriber]
```
*/
import { from, groupBy, mergeMap, toArray } from 'rxjs';

type Item = { id: number; category: 'A' | 'B'; value: number };

export function mountGroupByDemo() {
  const runBtn = document.getElementById('groupByRun') as HTMLButtonElement | null;
  const log = document.getElementById('groupByLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    log.textContent = '';
    const items: Item[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i + 1,
      category: (i % 2 === 0 ? 'A' : 'B'),
      value: Math.floor(Math.random() * 100)
    }));

    from(items).pipe(
      groupBy(item => item.category),
      mergeMap(group$ => group$.pipe(toArray(), mergeMap(arr => from([{ key: group$.key, items: arr }]))))
    ).subscribe(({ key, items }) => {
      log.textContent += `group ${key}: ${items.map(i => i.value).join(', ')}\n`;
    });
  });
}
