import {Component} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {NestCamHomePage} from '../../pages/nestcam-home/nestcam-home';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../providers/user-service/user-service';
import {ConfigService} from '../../providers/config-service/config-service';

@Component({
  templateUrl: 'build/pages/nestcam-registration/nestcam-registration.html',
  providers: [UserService, ConfigService]
})
export class NestCamRegistrationPage {

  registerForm: any;
  
  constructor(public nav: NavController, public userService: UserService, public loadingCtrl: LoadingController, private fb: FormBuilder) {}

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
        content: 'Registering User...'
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
