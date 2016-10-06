import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class UtilityService {

  private _spinner: Loading;

  constructor(private _loadingCtrl: LoadingController) { }

  // Common method for displaying 'loading' spinners.
  public startSpinner(message: string) {

    this._spinner = this._loadingCtrl.create({
      content: message
    });

    this._spinner.present();

  }

  // Dismisses 'loading' spinner.
  public stopSpinner() {

    this._spinner.dismiss();

  }

}

