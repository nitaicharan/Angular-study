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
    const theme = this.choiceTheme();

    const head = this.document.getElementsByTagName('head')[0];
    const styleLink = this.document.createElement('link');
    styleLink.setAttribute('id', 'hostname');
    styleLink.setAttribute('rel', 'stylesheet');
    styleLink.setAttribute('href', theme.stylesFile);
    head.appendChild(styleLink);


    const faviconLink = this.document.getElementById('favicon') as HTMLLinkElement;
    faviconLink.setAttribute('href', theme.faviconPath);

    const themeLink = this.document.getElementById('logo') as HTMLLinkElement;
    themeLink.setAttribute('src', theme.logoPath);
  }

  private choiceTheme(): { stylesFile: string, faviconPath: string, logoPath: string } {
    const hostname: string = this.windowService.getHostname();
    if (hostname.match('localhost')) {
      return {
        stylesFile: 'localhost-styles.css',
        faviconPath: 'assets/img/localhost/favicon.ico',
        logoPath: 'assets/img/localhost/logo.jpg'
      };
    } else if (hostname.match('127.0.0.1')) {
      return {
        stylesFile: 'loopback-styles.css',
        faviconPath: 'assets/img/loopback/favicon.ico',
        logoPath: 'assets/img/loopback/logo.jpg'
      };
    } else {
      return {
        stylesFile: 'styles.css',
        faviconPath: 'assets/img/default/favicon.ico',
        logoPath: 'assets/img/default/logo.jpg'
      };
    }
  }
}
