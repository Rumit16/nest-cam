import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {DeviceModel} from '../../models/device.ts';

/*
  Generated class for the DeviceService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DeviceService {

  private fakeDevices = Array<DeviceModel>();

  constructor(private http: Http) {

    var camera1 = new DeviceModel();
    camera1.id = "001";
    camera1.name = "OutdoorCamera";
    camera1.motionAlerts = 1;
    camera1.previewImgUrl = "img/outdoor-cam.jpg";

    var camera2 = new DeviceModel();
    camera2.id = "002";
    camera2.name = "LivingroomCamera";
    camera2.motionAlerts = 2;
    camera2.previewImgUrl = "img/livingroom-cam.jpg";

    var camera3 = new DeviceModel();
    camera3.id = "003";
    camera3.name = "BedroomCamera";
    camera3.motionAlerts = 3;
    camera3.previewImgUrl = "img/bedroom-cam.jpg";

    this.fakeDevices.push(camera1);
    this.fakeDevices.push(camera2);
    this.fakeDevices.push(camera3);

  }

  // Retrieve all devices.
  getAllDevices() { return this.fakeDevices; }

}

