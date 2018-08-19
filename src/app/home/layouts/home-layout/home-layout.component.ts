import { Component, OnInit, ViewChild } from '@angular/core';
//import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { MatSidenav, MatSidenavContent } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

/* var fireRefreshEventOnWindow = function () {
  var evt = document.createEvent("HTMLEvents");
  evt.initEvent('resize', true, false);
  window.dispatchEvent(evt);
};
 */
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  //'open' 'dock' for desktop
  sidenavType: string = 'open';
  sidenavIsExpanded: boolean = true;

  @ViewChild(MatSidenav)
  private matSidenav: MatSidenav;

  @ViewChild(MatSidenavContent)
  private matSidenavContent: MatSidenavContent;

  //constructor(private media: ObservableMedia) { }

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

    /*  this.media.asObservable()
      .subscribe((change: MediaChange) => {
        if (change.mqAlias == 'xs') {
          this.layoutMobile();
        }
        else {
          this.layoutDesktop();
        }
      });  */


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

  layoutSmallScreen(): void {

    this.matSidenav.mode = "over";
    this.matSidenav.opened = false;

  }

  layoutDesktop(): void {

    this.matSidenav.mode = "side";
    this.matSidenav.opened = true;

    if (this.sidenavType == "dock") {
      this.sidenavIsExpanded = false;
    } else {
      this.sidenavIsExpanded = true;
    }

  }

  onSidenavToggle(): void {

    if (this.isSmallScreen()) {

      this.sidenavIsExpanded = true;
      this.matSidenav.opened = !this.matSidenav.opened;

    } else {

      if (this.sidenavType == "open") {
        this.sidenavType = "dock";
        this.sidenavIsExpanded = false;
        //this.matSidenavContent._margins.left = 80;
        this.matSidenavContent._container._contentMargins.left = 80;

      }
      else {
        this.sidenavType = "open";
        this.sidenavIsExpanded = true;
        
        //this.matSidenavContent._margins.left = 260;
        this.matSidenavContent._container._contentMargins.left = 260;


      }

      // 仅应用在 mtk 模块中的图形显示，当切换左侧sidenav时图形无法自适应窗口大小
      // 仅 https://github.com/swimlane/ngx-charts 图形组件有这个问题。
      // 而 https://github.com/valor-software/ng2-charts 没有这个问题
      //initialize window resizer event on sidebar toggle click event
      //setTimeout(() => { fireRefreshEventOnWindow() }, 300);

    }

  }

  isSmallScreen(): boolean {
    //return this.media.isActive('xs');
    return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
  }

  sidenavMouseEnter(): void {

    if (!this.isSmallScreen() && this.sidenavType == "dock") {
      this.sidenavIsExpanded = true;
    }

  }

  sidenavMouseLeave(): void {

    if (!this.isSmallScreen() && this.sidenavType == "dock") {
      this.sidenavIsExpanded = false;
    }
  }

}

