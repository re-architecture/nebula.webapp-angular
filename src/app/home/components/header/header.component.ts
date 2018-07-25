import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeService } from 'src/app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {

  @Output() onSidenavToggle = new EventEmitter();

  themeSubscription: Subscription;
  currentTheme : string;

  constructor(private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver) {

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

}
