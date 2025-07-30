import { bindCallback } from 'rxjs';
import { map } from 'rxjs/operators';

const log = (msg: string) => (document.getElementById('log')!.textContent += msg + '\n');

export function runBindCallbackDemo() {
  function loadPreference(cb: (value: string) => void) {
    setTimeout(() => cb(localStorage.getItem('theme') ?? 'light'), 100);
  }

  const loadPreference$ = bindCallback(loadPreference);

  const btn = document.getElementById('loadPref') as HTMLButtonElement;
  btn.addEventListener('click', () => {
    loadPreference$()
      .pipe(map(pref => `Preference: ${pref}`))
      .subscribe(msg => log(msg));
  });
}
