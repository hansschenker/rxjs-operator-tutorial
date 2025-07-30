/**
```mermaid
flowchart LR
  A[ajax(url)] -- "HTTP GET" --> B[Observable<AjaxResponse>]
  B -- "next response" --> C[Subscriber]
  B -- "error" --> D[Subscriber]
```
*/
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export function mountAjaxDemo() {
  const runBtn = document.getElementById('ajaxRun') as HTMLButtonElement | null;
  const log = document.getElementById('ajaxLog') as HTMLDivElement | null;
  if (!runBtn || !log) return;

  runBtn.addEventListener('click', () => {
    ajax('https://jsonplaceholder.typicode.com/todos/1').pipe(
      map(res => res.response),
      catchError(err => of({ error: true, message: err.message }))
    ).subscribe(data => {
      log.textContent += JSON.stringify(data) + '\n';
    });
  });
}
