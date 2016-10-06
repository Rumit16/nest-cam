import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EmailService {

  constructor(private _http: Http, private response: Response) { }

  public sendEmail(
    to: string,
    from: string,
    subject: string,
    messageBody: string,
    attachment?: any
  ) {
    // use MailGun library to send an email from here
  }

}

