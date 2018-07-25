import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  sidenavOpened: boolean;
  sidenavMode: string;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.layoutSmallScreen();
      } else {
        this.layoutDesktop();
      }

    });
  }

  isSmallScreen(): boolean {
    //return this.media.isActive('xs');
    return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
  }

  layoutSmallScreen(): void {

    this.sidenavOpened = false;
    this.sidenavMode = "over";

  }

  layoutDesktop(): void {

    this.sidenavOpened = false;
    this.sidenavMode = "side";

  }

  onSidenavToggle(): void {

    if (this.isSmallScreen()) {

      if (this.sidenavOpened) {

        this.sidenavOpened = false;

      } else {
        this.sidenavOpened = true;
      }

    }
  }

}
