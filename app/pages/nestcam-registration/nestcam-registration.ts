import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service/utility-service';
import { NestCamListPage } from '../../pages/nestcam-list/nestcam-list';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../providers/user-service/user-service';
import { ConfigService } from '../../providers/config-service/config-service';

@Component({
  templateUrl: 'build/pages/nestcam-registration/nestcam-registration.html',
  providers: [UserService, ConfigService]
})
export class NestCamRegistrationPage {

  registerForm: any;

  constructor(private _userService: UserService, private _util: UtilityService, private fb: FormBuilder, private _nav: NavController) { }

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
      this._util.startSpinner('Registering User...');

      setTimeout(() => {

        this._util.stopSpinner();

        // Navigate to Home Page after loggin in.
        this._nav.setRoot(NestCamListPage);

      }, 3000);

    }
  }

}
