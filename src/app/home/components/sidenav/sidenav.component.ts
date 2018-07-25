import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({height: '0px', visibility: 'hidden'})),
      state('expanded', style({height: '*', visibility: 'visible'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
  providers:[MenuService]
})
export class SidenavComponent implements  OnInit, OnDestroy {
 
  @Input() sidenavIsExpanded: boolean;
  @Input() sidenavWidth : number;
   
  //@Input() params: Observable<Params>;
  expansions = {};
  
  private _onDestroy = new Subject<void>();

  constructor(public menuService: MenuService,
              private _router: Router) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /** Set the expansions based on the route url */
  setExpansions(params: Params) {
    const menus = this.menuService.getMenu(params.section);
    for (const menu of menus) {
      if (this.expansions[menu.id] === true) {
        continue;
      }

      let match = false;
      for (const item of menu.items) {
        if (this._router.url.indexOf(item.id) > -1) {
          match = true;
          break;
        }
      }
      this.expansions[menu.id] = match;
    }
  }

  /** Gets the expanded state */
  _getExpandedState(menu: string) {
    return this.getExpanded(menu) ? 'expanded' : 'collapsed';
  }

  /** Toggles the expanded state */
  toggleExpand(menu: string) {
    this.expansions[menu] = !this.expansions[menu];
  }

  /** Gets whether expanded or not */
  getExpanded(menu: string): boolean {
    return this.expansions[menu];
  }

}
