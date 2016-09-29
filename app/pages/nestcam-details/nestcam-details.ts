import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { DeviceModel } from '../../models/device.ts';


@Component({
  templateUrl: 'build/pages/nestcam-details/nestcam-details.html'
})
export class NestCamDetailsPage {

  private _selectedDevice: DeviceModel;

  constructor(private _navCtrl: NavController, private _navParams: NavParams) {

    // If we navigated to this page, we will have an item available as a nav param.
    this._selectedDevice = _navParams.get('device');

  }

  ionViewDidEnter() {

      var width: number = document.getElementById('live-stream-container').offsetWidth - 32;

      document.getElementById('live-stream').setAttribute('width', width.toString());

      var height: number = Math.round((width / 16) * 9);

      document.getElementById('live-stream').setAttribute('height', height.toString());

  }
}
