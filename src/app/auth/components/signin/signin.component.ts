import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { TestService } from '../../services/test.service';
import { AuthService } from '../../services/auth.service';
import { ConfigService, LoginService, StateStorageService } from 'src/app/core';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  returnUrl: string;

  form: FormGroup;
  loginName: string;
  password: string;
  rememberMe: boolean;
  authenticationError: boolean;

  appName: string;

  constructor(private fb: FormBuilder,
    //private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    //private authService: AuthService
    private loginService: LoginService,
    //private media: ObservableMedia,
    private breakpointObserver: BreakpointObserver,
    private testService: TestService,
    private authService: AuthService,
    private configService: ConfigService,
    private stateStorageService: StateStorageService,


  ) {   //private heroService: HeroService


  }



  isScreenSmall(): boolean {
    //return this.media.isActive('xs');
    return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
  }

  createForm() {
    this.form = this.fb.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit() {

    // reset login status
    //this.authService.logout();
    this.createForm();

    this.appName = this.configService.appConfig.appName;

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

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

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.router.navigate(['/home'], navigationExtras);
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
        if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
          this.router.navigate(['']);
        }

        // this.eventManager.broadcast({
        //     name: 'authenticationSuccess',
        //     content: 'Sending Authentication Success'
        // });

        // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
        // // since login is succesful, go to stored previousState and clear previousState
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.stateStorageService.storeUrl(null);
          this.router.navigate([redirect]);
        }

        this.router.navigate(['/home']);

      })
      .catch(() => {
        this.authenticationError = true;
      });

  }

}

