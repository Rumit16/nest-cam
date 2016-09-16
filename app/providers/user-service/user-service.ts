import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../../models/user.ts';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private user: UserModel;
  private loginURL: string = 'https://jsonplaceholder.typicode.com/users/1';

  constructor(private http: Http) { }

  // Primary Login function.
  Login(username: string, password: string): Observable<UserModel> {

    return this.http.get(this.loginURL)
                    .map(this.ParseUserFromJSON)
                    .catch(this.HandleError);

  }

  // Retrieve currently-authenticated user.
  GetCurrentUser() { return this.user; }

  // Convert JSON to Typed UserModel.
  private ParseUserFromJSON(res: Response) {

    let data = res.json();
    // New instance of UserModel.
    this.user = new UserModel();

    // Set Properties.
    this.user.id = data.id;
    this.user.name = data.name;
    this.user.email = data.email;

    // Return UserModel object.
    return this.user;
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

