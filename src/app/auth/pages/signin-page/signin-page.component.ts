import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
//import { ObservableMedia } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
//import { AuthService } from '../../../core/auth/auth.service';

import { appConfig } from 'src/app/config/app.config';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-auth-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  returnUrl: string;

  form: FormGroup;
  loginName: string;
  password: string;

  appName : string;
  errorMessage : string;

  constructor(private fb: FormBuilder,
    //private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    //private authService: AuthService
    private loginService:LoginService,
    //private media: ObservableMedia,
    private breakpointObserver: BreakpointObserver,
    private testService : TestService
   
  ) {   //private heroService: HeroService

    
  }


  
  isScreenSmall(): boolean {
    //return this.media.isActive('xs');
    return this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait);
  }

  createForm() {
    this.form = this.fb.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {

    this.errorMessage = "";

    this.loginName = this.form.get('loginName').value;
    this.password = this.form.get('password').value;
    console.log(this.loginName + '====' + this.password);
/*
    this.authService.login(this.loginName, this.password)
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
            console.log("log sucess");
        },
        error => {
            //this.alertService.error(error);
            //this.loading = false;

            console.log("log error" + error);
        });

        */

    //this.http.post('/api/authenticate', JSON.stringify({ loginName: this.loginName, password: this.password }))


    this.loginService
    .login({
      username: this.loginName,
      password: this.password,
      //rememberMe: this.rememberMe
    })
    .then(() => {
      /*
      this.authenticationError = false;
      this.activeModal.dismiss('login success');
      if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
        this.router.navigate(['']);
      }

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
      }

      */

        console.log("OKOKOKOK");
        this.router.navigate(['/home']);
        //this.testService.getAccount().subscribe();

    })
    .catch(() => {
      console.log("Error");
      //this.authenticationError = true;
      this.errorMessage = "Incorrect UserID or password.";
    });

   

  }



  ngOnInit() {
    
    // reset login status
    //this.authService.logout();

    this.appName = appConfig.appName;
    this.createForm();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

   }


}

