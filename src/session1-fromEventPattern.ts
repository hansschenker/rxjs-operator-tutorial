import { fromEventPattern, map } from 'rxjs';

const log = (msg: string) => (document.getElementById('log')!.textContent += msg + '\n');

export function runFromEventPatternDemo() {
  const area = document.getElementById('area') as HTMLDivElement;

  function add(handler: (pos: { x: number; y: number }) => void) {
    const listener = (e: MouseEvent) => handler({ x: e.offsetX, y: e.offsetY });
    area.addEventListener('mousemove', listener);
    return listener;
  }

  function remove(handler: any, token: (e: MouseEvent) => void) {
    area.removeEventListener('mousemove', token);
  }

  fromEventPattern<{ x: number; y: number }>(add, remove).pipe(
    map(({ x, y }) => `(${x}, ${y})`)
  ).subscribe(msg => log(msg));
}
