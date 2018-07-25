//from jhipster
import { Injectable } from '@angular/core';

import { Principal } from './principal.service';
import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class LoginService {
  constructor(private principal: Principal, private authServerProvider: AuthServerProvider) {}

  login(credentials, callback?) {
    const cb = callback || function() {};

    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe(
        data => {
          //console.log(data);
           this.principal.identity(true).then(account => {
            console.log(account);
            resolve(data);
          }); 
          return cb();
        },
        err => {
          this.logout();
          reject(err);
          return cb(err);
        }
      );
    });
  }

  loginWithToken(jwt, rememberMe) {
    return this.authServerProvider.loginWithToken(jwt, rememberMe);
  }

  logout() {
    this.authServerProvider.logout().subscribe();
    this.principal.authenticate(null);
  }
}
