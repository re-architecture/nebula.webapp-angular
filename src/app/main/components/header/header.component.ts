import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService, Principal } from 'src/app/nebula-core';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private principal: Principal
  ) { }

  ngOnInit() {
  }

  logout() {

    this.loginService.logout();

  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
}
}
