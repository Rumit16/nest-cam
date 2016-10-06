import { Injectable } from '@angular/core';
import { EmailService } from '../../providers/email-service/email-service';
import { UserService } from '../../providers/user-service/user-service';
import { ConfigService } from '../../providers/config-service/config-service';
import { DeviceModel } from '../../models/device.ts';

@Injectable()
export class NotificationService {

  constructor(private _email: EmailService, private _user: UserService, private _config: ConfigService) {}

  public sendMotionNotification (device: DeviceModel) {

    // use combination of user info, device info, and config value to construct
    // all the necessary parameters to execute EmailService.sendEmail method.

  }

}

