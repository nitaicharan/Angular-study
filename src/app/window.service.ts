import { Injectable, Inject } from '@angular/core';
import { WINDOW } from 'src/window';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  constructor(@Inject(WINDOW) private window: Window) {
  }

  getHostname(): string {
    return this.window.location.hostname;
  }
}
