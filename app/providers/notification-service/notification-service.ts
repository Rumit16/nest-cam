import { Injectable } from '@angular/core';
import { EmailService } from '../../providers/email-service/email-service';
import { UserService } from '../../providers/user-service/user-service';
import { ConfigService } from '../../providers/config-service/config-service';
import { DeviceModel } from '../../models/device.ts';

@Injectable()
export class NotificationService {

    private userName: string;
    private userEmail: string;
    private cameraName: string;
    private startTime: Date;
    private nestEmailFromAddress: string;
    private nestEmailSubject: string;
    private nestEmailMessageBody: string;


    constructor(private _email: EmailService, private _user: UserService, private _config: ConfigService) { }

    public sendMotionNotification(device: DeviceModel) {

        // use combination of user info, device info, and config value to construct
        this.userName = this._user.GetCurrentUser().name;
        this.userEmail = this._user.GetCurrentUser().email;
        this.cameraName = device.name;
        this.startTime = device.lastIsOnlineActivity;
        this.nestEmailFromAddress = this._config.nestEmailFromAddress;
        this.nestEmailSubject = this.setNestEmailSubject(this.cameraName);
        this.nestEmailMessageBody = this.setNestEmailMessageBody(this.cameraName, this.startTime);

        // all the necessary parameters to execute EmailService.sendEmail method.
        this._email.sendEmail(this.userEmail, this.nestEmailFromAddress, this.nestEmailSubject, this.nestEmailMessageBody);

    }

    setNestEmailSubject(cameraName: string) {
        return cameraName + ' detected motion.';
    }
    setNestEmailMessageBody(cameraName: string, startTime: Date) {
        return 'Motion was detected by ' + cameraName + ' camera at ' + startTime + '. Please check live video feed for potential intruders.'
    }
}

