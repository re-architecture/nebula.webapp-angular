import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { LoginService, StateStorageService, EventManagerService } from 'src/app/nebula-core';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from 'src/app/core';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  //returnUrl: string;

  form: FormGroup;
  loginName: string;
  password: string;
  rememberMe: boolean;
  authenticationError: boolean;

  appName: string;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    //private authService: AuthService
    private loginService: LoginService,
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private configService: ConfigService,
    private stateStorageService: StateStorageService,
    private eventManager : EventManagerService
  ) {

  }

  isScreenSmall(): boolean {
    return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
  }

  createForm() {
    this.form = this.fb.group({
      loginName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rememberMe: [false]
    });
  }

  ngOnInit() {

    // reset login status
    //this.authService.logout();
    this.createForm();

    this.appName = this.configService.appConfig.appName;

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  // for mtk
  login() {

    this.loginName = this.form.get('loginName').value;
    this.password = this.form.get('password').value;
    this.rememberMe = this.form.get('rememberMe').value;

    this.authService.login({
      username: this.loginName,
      password: this.password,
      rememberMe: this.rememberMe
    }).subscribe(() => {

      if (this.authService.isLoggedIn) {

        this.router.navigate(['/home']);
      }
    });

  }

  //正确代码
  login2() {

    this.loginName = this.form.get('loginName').value;
    this.password = this.form.get('password').value;
    this.rememberMe = this.form.get('rememberMe').value;

    this.loginService
      .login({
        username: this.loginName,
        password: this.password,
        rememberMe: this.rememberMe
      })
      .then(() => {

        this.authenticationError = false;
        //this.activeModal.dismiss('login success');
        //未理解
        //if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
        //  this.router.navigate(['']);
        //}

        this.eventManager.broadcast({
          name: 'authenticationSuccess',
          content: 'Sending Authentication Success'
        });

        // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
        // // since login is succesful, go to stored previousState and clear previousState
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.stateStorageService.storeUrl(null);
          this.router.navigate([redirect]);
        } else {
          this.router.navigate(['/home']);
        }

      })
      .catch(() => {
        this.authenticationError = true;
      });

  }

}

