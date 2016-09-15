import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import {UserService} from '../../providers/user-service/user-service';
import {NestCamHomePage} from '../../pages/nestcam-home/nestcam-home';
import {FormBuilder, Validators} from '@angular/common';


@Component({
  templateUrl: 'build/pages/nestcam-login-page/nestcam-login-page.html',
  providers: [UserService]
})

export class NestCamLoginPagePage {

  loginForm: any;

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

      setTimeout(() => {
        loading.dismiss();
        // Navigate to Home Page after loggin in.
        this.nav.setRoot(NestCamHomePage);
      }, 3000);

    }

  }

}
