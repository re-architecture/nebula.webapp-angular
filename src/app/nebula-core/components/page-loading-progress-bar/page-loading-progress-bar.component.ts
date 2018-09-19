import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'nebula-page-loading-progress-bar',
  templateUrl: './page-loading-progress-bar.component.html',
  styleUrls: ['./page-loading-progress-bar.component.scss']
})
export class PageLoadingProgressBarComponent implements OnInit {

  loading = false;
  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

}
