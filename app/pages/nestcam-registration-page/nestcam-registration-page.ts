import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import {NestCamHomePage} from '../../pages/nestcam-home/nestcam-home';
import { FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../../providers/user-service/user-service';

/*
  Generated class for the NestcamRegistrationPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/nestcam-registration-page/nestcam-registration-page.html',
  providers: [UserService]
})
export class NestCamRegistrationPage {

  registerForm: any;
  
  constructor(public nav: NavController, public userService: UserService, public loadingCtrl: LoadingController, private fb: FormBuilder) {


  }

  ionViewLoaded() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  Register(isValid: boolean) {

    if (isValid) {

      // Instantiate spinner. 
      let loading = this.loadingCtrl.create({
        content: 'Registering In...'
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
