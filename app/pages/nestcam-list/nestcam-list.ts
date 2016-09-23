import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NestCamDetailsPage} from '../nestcam-details/nestcam-details';
import {DeviceService} from '../../providers/device-service/device-service';
import {DeviceModel} from '../../models/device.ts';


@Component({
  templateUrl: 'build/pages/nestcam-list/nestcam-list.html',
  providers: [DeviceService]
})
export class NestCamListPage {
  devices: Array<DeviceModel>;

  constructor(public navCtrl: NavController, public deviceService: DeviceService) {

    this.devices = deviceService.getAllDevices();

  }

  deviceTapped(event, device) {
    this.navCtrl.push(NestCamDetailsPage, {
      device: device
    });
  }
}
