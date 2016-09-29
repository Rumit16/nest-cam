import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { DeviceModel } from '../../models/device.ts';
import { NestApplicationInterface } from '../../nest/NestApplicationInterface';
import { Http} from '@angular/http';

@Injectable()
export class DeviceService {

  private _devices$: BehaviorSubject<Array<DeviceModel>>;

  // Service consumers can subscribe to this observable to get latest device data.
  public devices$: Observable<Array<DeviceModel>>;

  // Local device cache.
  public _deviceStore: {
    devices: Array<DeviceModel>
  };

  constructor(private _nestAPI: NestApplicationInterface, private _http: Http) {

    this._deviceStore = { devices: new Array<DeviceModel>() };

    this._devices$ = new BehaviorSubject(new Array<DeviceModel>());

    this.devices$ = this._devices$.asObservable();

    this._initiateNestAPI();

  }

  // Initiates retrieval of NEST devices.
  private _initiateNestAPI() {

    this._nestAPI.setToken();

    this._nestAPI.streamServiceChanges();

    this._nestAPI.addHydratedListener();

    this._nestAPI.hydratedDevices$.subscribe(
      deviceCache => {

        if (deviceCache.devices) {
          this._loadAllDevices(deviceCache);
        }

      });

  }

  // Load all hydrated devices.
  private _loadAllDevices(hydratedDevices: any) {

    this._deviceStore.devices = this._mapDevices(hydratedDevices);
    this._devices$.next(this._deviceStore.devices);

  }

  // Maps raw JSON data to an array of DeviceModels.
  private _mapDevices(hydratedDevices: any): Array<DeviceModel> {

    var newDevices = new Array<DeviceModel>();

    if (hydratedDevices.devices.cameras) {

      for (let index in hydratedDevices.devices.cameras) {

        var nestCamera = hydratedDevices.devices.cameras[index];

        var model = new DeviceModel();

        model.id = nestCamera.device_id;
        model.name = nestCamera.name;
        model.snapshotURL = nestCamera.snapshot_url;
        model.appURL = nestCamera.app_url;
        model.webURL = nestCamera.web_url;
        model.isOnline = nestCamera.is_online;
        model.isStreaming = nestCamera.is_streaming;
        model.isAudioEnabled = nestCamera.is_audio_input_enabled;
        model.lastIsOnlineActivity = new Date(nestCamera.last_is_online_change);

        if (nestCamera.is_public_share_enabled && nestCamera.public_share_url) { 

          model.liveFeedURL = this._parseLiveFeedURL(nestCamera.public_share_url);
          model.embededIframe = this._generateEmbededIframe(model.webURL); 

        }

        newDevices.push(model);

      }

    }

    return newDevices;

  }

  // Transforms live feed URL into a usable format.
  private _parseLiveFeedURL(url: string): string {

    var parsedUrl: string = url;

    parsedUrl = parsedUrl + '?autoplay=1';

    return parsedUrl;

  }

  private _generateEmbededIframe(url: string) {

    return '<iframe type="text/html" frameborder="0" width="1280" height="720" src="{{liveFeedURL}}}" allowfullscreen></iframe>'.replace('{{liveFeedURL}}}', url);

  }

}

