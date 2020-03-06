import { Component, OnInit, HostBinding } from '@angular/core';
import { WindowService } from './window.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'conta-digital-frontend';

  @HostBinding('class') componentCssClass;

  constructor(
    private windowService: WindowService,
    public overlayContainer: OverlayContainer,
  ) { }


  ngOnInit(): void {
    let hostname: string = this.windowService.getHostname();
    if (hostname.match('localhost')) {
      this.overlayContainer.getContainerElement().classList.add('localhost');
      this.componentCssClass = 'localhost';
    } else if (hostname.match('192.168.10.38')) {
      this.overlayContainer.getContainerElement().classList.add('github');
      this.componentCssClass = 'github';
    }
  }
}
