import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/nebula-core';

@Component({
  selector: 'demo-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  themeSubscription: Subscription;
  currentTheme: string;

  constructor(private themeService: ThemeService,) { }

  ngOnInit() {
    this.currentTheme = this.themeService.getCurrentTheme();

    this.themeSubscription = this.themeService.theme$.subscribe(
      theme => {
        this.currentTheme = theme;
      });
  }

  setTheme(theme): void {
    this.themeService.setTheme(theme);
  }

  ngOnDestroy() {
    
    this.themeSubscription.unsubscribe();

  }

}
