import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import {UserService} from '../../providers/user-service/user-service';
import {UserModel} from '../../models/user.ts';
import {NestCamHomePage} from '../../pages/nestcam-home/nestcam-home';
import {FormBuilder, Validators} from '@angular/common';


@Component({
  templateUrl: 'build/pages/nestcam-login-page/nestcam-login-page.html',
  providers: [UserService]
})

export class NestCamLoginPagePage {

  loginForm: any;
  user: UserModel;
  errorMessage: string;

  constructor(public nav: NavController, public userService: UserService, public loadingCtrl: LoadingController, private fb: FormBuilder) {

  }

  ionViewLoaded() {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  // Sign in current user with email and password.
  Login(isValid: boolean) {

    if (isValid) {

      // Instantiate spinner. 
      let loading = this.loadingCtrl.create({
        content: 'Signing In...'
      });

      loading.present();

      this.userService.Login("", "")
        .subscribe
        (
          user => this.NavigateToHomePage(user),
          error => this.errorMessage = <any>error
        );

    }

  }

  NavigateToHomePage(user: UserModel),  {
      setTimeout(() => {
        loading.dismiss();
        // Navigate to Home Page after loggin in.
        this.nav.setRoot(NestCamHomePage);
      }, 3000);
  }

}
