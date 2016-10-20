import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { UtilityService } from '../../providers/utility-service/utility-service';
import { UserModel } from '../../models/user';
import { NestCamListPage } from '../../pages/nestcam-list/nestcam-list';
import { FormBuilder, Validators } from '@angular/common';


@Component({
  templateUrl: 'build/pages/nestcam-login/nestcam-login.html'
})

export class NestCamLoginPage {

  loginForm: any;
  user: UserModel;
  errorMessage: string;

  constructor(private _userService: UserService, private _util: UtilityService, private _fb: FormBuilder, private _nav: NavController) {

  }

  ionViewLoaded() {

    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  // Sign in app user with email and password.
  public Login(isValid: boolean, email: string, password: string) {

    if (isValid) {

      // Instantiate spinner. 
      this._util.StartSpinner('Signing In...');

      // Initiate Login.
      this._userService.Login(email, password)
        .subscribe(user => {

          // Navigate to Home Page after successful loggin in.
          this._nav.setRoot(NestCamListPage);

        }, error => {

          this._util.StopSpinner();

          this._util.ShowAlert('Login Error', 'Username or password is not correct.');

        });

    }

  }


}
