/**
```mermaid
flowchart LR
  A[One-shot function] -- "calls cb(value)" --> B[bindCallback(fn)]
  B -- "value" --> C[Observable<T>]
  C -- "next value, complete" --> D[Subscriber]
```
*/
import { bindCallback } from 'rxjs';
import { map } from 'rxjs/operators';

export function mountBindCallbackDemo() {
  const btn = document.getElementById('bindCallbackBtn') as HTMLButtonElement | null;
  const log = document.getElementById('bindCallbackLog') as HTMLDivElement | null;
  if (!btn || !log) return;

  // One-shot single-callback function: reads a preference
  function loadPreference(cb: (value: string) => void) {
    setTimeout(() => cb(localStorage.getItem('theme') ?? 'light'), 100);
  }
  const loadPreference$ = bindCallback(loadPreference);

  const handler = () => {
    loadPreference$().pipe(
      map(v => `bindCallback: Preference "${v}"`)
    ).subscribe(msg => {
      log.textContent += msg + "\n";
    });
  };

  btn.addEventListener('click', handler);
}
