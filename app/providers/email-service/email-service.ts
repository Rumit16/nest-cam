import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod } from '@angular/http';
import { ConfigService } from '../../providers/config-service/config-service';


declare var setMailgun: any;

@Injectable()
export class EmailService {

  constructor(private _http: Http, private _config: ConfigService) { }

  public sendEmail(
    to: string,
    from: string,
    subject: string,
    messageBody: string,
    attachment?: any
  ) {
    // use MailGun library to send an email from here

    var requestHeaders = new Headers();
    var mailgunApiKey = window.btoa("api:" + this._config.mailGunAPIKey);
    requestHeaders.append("Authorization", "Basic " + mailgunApiKey);
    requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    //sending email via http request call
    this._http.request(new Request({
      method: RequestMethod.Post,
      url: this._config.mailGunURL + this._config.mailGunDomain + "/messages",
      body: "from=" + from + "&to=" + to + "&subject=" + subject + "&text=" + messageBody,
      headers: requestHeaders
    }))
      .subscribe(success => {
        console.log("SUCCESS -> " + JSON.stringify(success));
      }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
      });

  }

}

