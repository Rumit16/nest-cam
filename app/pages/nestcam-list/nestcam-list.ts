import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NestCamDetailsPage } from '../nestcam-details/nestcam-details';
import { DeviceService } from '../../providers/device-service/device-service';
import { DeviceModel } from '../../models/device.ts';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: 'build/pages/nestcam-list/nestcam-list.html'
})
export class NestCamListPage {

  private _devices$: Observable<Array<DeviceModel>>;

  constructor(private _navCtrl: NavController, private _deviceService: DeviceService) { }

  ionViewLoaded() {

    // Subscribe to devices$ Observable.
    this._devices$ = this._deviceService.devices$;

  }

  deviceTapped(event: any, device: DeviceModel) {

    this._navCtrl.push(NestCamDetailsPage, {
      device: device
    });

  }

}
