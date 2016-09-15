import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FORM_DIRECTIVES, FormBuilder, Validators, AbstractControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';


/*
  Generated class for the NestcamLoginPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/nestcam-login-page/nestcam-login-page.html',
  directives: [FORM_DIRECTIVES]
})
export class NestcamLoginPagePage {
    public Loginform:any;
     
  constructor(private navCtrl: NavController,public _form: FormBuilder) {
 this.Loginform = this._form.group({  
            "email": ["", Validators.required],
            'password': ["", Validators.required]
        })
   } 	
}
      