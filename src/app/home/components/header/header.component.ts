import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from 'src/app/shared';
import { ThemeService, LoginService, Principal } from 'src/app/nebula-core';
//import { ThemeService, LoginService } from 'src/app/core';
//import { Principal } from 'src/app/core/services/auth/principal.service';


@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() onSidenavToggle = new EventEmitter();

  themeSubscription: Subscription;
  currentTheme: string;

  constructor(private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private loginService: LoginService,
    private principal: Principal
  ) {

  }

  ngOnInit() {

    this.currentTheme = this.themeService.getCurrentTheme();

    this.themeSubscription = this.themeService.theme$.subscribe(
      theme => {
        this.currentTheme = theme;
      });

  }

  isSmallScreen(): boolean {
    //breakpointObserver.isMatched('(max-width: 599px)');
    return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
  }

  sidenavToggle() {

    this.onSidenavToggle.emit();
  }

  setTheme(theme): void {
    this.themeService.setTheme(theme);
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

 
  logout() {

    this.loginService.logout();

  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
}

}
