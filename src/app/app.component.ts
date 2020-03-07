import { Component, OnInit, Inject } from '@angular/core';
import { WindowService } from './window.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Home';

  constructor(
    private windowService: WindowService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    const head = this.document.getElementsByTagName('head')[0];
    const themeLink = this.document.getElementById('hostname-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${this.choiceTheme()}`;
    } else {
      const style = this.document.createElement('link');
      style.id = 'hostname-theme';
      style.rel = 'stylesheet';
      style.href = `${this.choiceTheme()}`;
      head.appendChild(style);
    }
  }

  private choiceTheme(): string {
    let theme: string;
    const hostname: string = this.windowService.getHostname();
    if (hostname.match('localhost')) {
      theme = 'localhost-styles.css';
    } else if (hostname.match('127.0.0.1')) {
      theme = 'loopback-styles.css';
    }
    return theme;
  }
}
