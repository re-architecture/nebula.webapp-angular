import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { ObservableMedia } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-auth-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onSidenavToggle = new EventEmitter();

  //constructor(private media: ObservableMedia) {  }

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

  }

  isSmallScreen(): boolean {
    //return this.media.isActive('xs');
    return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
  }
  
  sidenavToggle() {

    this.onSidenavToggle.emit();
  }
  
}
