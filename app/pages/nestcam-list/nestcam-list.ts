import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service/utility-service';
import { NestCamDetailsPage } from '../nestcam-details/nestcam-details';
import { DeviceService } from '../../providers/device-service/device-service';
import { DeviceModel } from '../../models/device';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: 'build/pages/nestcam-list/nestcam-list.html'
})
export class NestCamListPage {

  private _devices: Array<DeviceModel>;

  constructor(private _util: UtilityService, private _deviceService: DeviceService, private _nav: NavController) { }

  ionViewLoaded() {

    // Subscribe to devices$ Observable.
    this._deviceService.devices$.subscribe(devices => {

      this._devices = devices;

      this._util.StopSpinner();

    });

  }

  deviceTapped(event: any, device: DeviceModel) {

    this._nav.push(NestCamDetailsPage, {
      device: device
    });

  }

}
