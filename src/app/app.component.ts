import { Component, OnDestroy, OnInit } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

import { Subscription } from 'rxjs';

import { Title } from '@angular/platform-browser';

import { ConfigService, ThemeService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OverlayContainer]
})
export class AppComponent implements OnInit,OnDestroy {

  themeSubscription: Subscription;

  constructor(
    private titleService: Title,
    private themeService: ThemeService,
    private overlay: OverlayContainer,
    private configService : ConfigService
  ) { }

  ngOnInit() {

    this.titleService.setTitle(this.configService.appConfig.appName);

    this.themeSubscription = this.themeService.theme$.subscribe(
      theme => {
        this.installTheme(theme);
      });

    const currentTheme = this.themeService.getCurrentTheme();

    if (currentTheme) {
      this.themeService.setTheme(currentTheme);
    }
    else {
      this.themeService.setTheme("default-theme");
    }

  }

  //ref: https://material.angular.io/guide/theming
  installTheme(theme: string) {
    
    document.body.className = "";
    this.overlay.getContainerElement().className = "";

    document.body.classList.add(theme, "mat-app-background", "mat-typography");
    this.overlay.getContainerElement().classList.add(theme);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.themeSubscription.unsubscribe();
  }

}
