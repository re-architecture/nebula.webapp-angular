import { Component, OnInit } from '@angular/core';
import { LoginModalComponent } from 'src/app/shared';
import { Principal, LoginService } from 'src/app/nebula-core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'demo-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private loginService: LoginService,
    private principal: Principal) { }

  ngOnInit() {

  }

  openLoginModal() {

    const dialogRef = this.dialog.open(LoginModalComponent);

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  logout() {

    this.loginService.logout();

  }

  isAuthenticated() {
    return this.principal.isAuthenticated();
  }

}
