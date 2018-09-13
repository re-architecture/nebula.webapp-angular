import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService, StateStorageService, EventManagerService } from 'src/app/core';
import { Router } from '@angular/router';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-shared-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {


  form: FormGroup;

  loginName: string;
  password: string;
  rememberMe: boolean;

  authenticationError: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private stateStorageService: StateStorageService,
    private loginService: LoginService,
    private eventManager: EventManagerService) {

    //private heroService: HeroService


  }

  ngOnInit() {

    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      loginName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rememberMe: [false]
    });
  }

  login() {

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

          this.dialogRef.close();
        }

      })
      .catch(() => {
        this.authenticationError = true;
      });

  }

  cancel(): void {
    this.dialogRef.close();
  }


}
