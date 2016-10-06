import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { UtilityService } from '../../providers/utility-service/utility-service';
import { UserModel } from '../../models/user.ts';
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

  // Sign in current user with email and password.
  Login(isValid: boolean) {

    if (isValid) {

      // Instantiate spinner. 
      this._util.startSpinner('Signing In...');

      // this._userService.Login("", "")
        //.subscribe
        //(
         // user => this.NavigateToHomePage(user),
          //error => this.errorMessage = <any>error
        //);

        this.NavigateToHomePage(null);

    }

  }

  NavigateToHomePage(user: UserModel)  {

      setTimeout(() => {
        
        this._util.stopSpinner();

        // Navigate to Home Page after loggin in.
        this._nav.setRoot(NestCamListPage);

      }, 3000);
  }

}
