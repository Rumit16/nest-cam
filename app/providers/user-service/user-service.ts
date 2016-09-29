import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/user.ts';
import { ConfigService } from '../../providers/config-service/config-service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private _user: UserModel;
  private _loginURL: string = 'https://jsonplaceholder.typicode.com/users/1';

  constructor(private _http: Http, private _config: ConfigService) { 

  }

  // Primary Login function.
  Login(username: string, password: string): Observable<UserModel> {

    return this._http.get(this._loginURL)
                    .map(this.ParseUserFromJSON)
                    .catch(this.HandleError);

  }

  // Retrieve currently-authenticated user.
  GetCurrentUser() { return this._user; }

  // Convert JSON to Typed UserModel.
  private ParseUserFromJSON(res: Response) {

    let data = res.json();
    // New instance of UserModel.
    this._user = new UserModel();

    // Set Properties.
    this._user.id = data.id;
    this._user.name = data.name;
    this._user.email = data.email;

    // Return UserModel object.
    return this._user;
  }

  // Propogate error message to calling page.
  private HandleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? '${error.status} - ${error.statusText}' : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}

