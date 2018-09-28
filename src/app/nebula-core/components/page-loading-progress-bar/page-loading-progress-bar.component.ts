import { Component, OnInit } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'nebula-page-loading-progress-bar',
  templateUrl: './page-loading-progress-bar.component.html',
  styleUrls: ['./page-loading-progress-bar.component.scss']
})
export class PageLoadingProgressBarComponent implements OnInit {

  loading = false;
  value : number = 10;
  constructor(private router: Router) { }


  ngOnInit() {
   
   

      this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          //setInterval(()=> this.xxx(), 1000);
          this.value = this.value + 30;
        
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          this.value = 100;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

}
