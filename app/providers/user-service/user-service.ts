import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../../models/user.ts';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private fakeUser: UserModel;

  constructor(private http: Http) {

    this.fakeUser = new UserModel();
    this.fakeUser.id = 234234234;
    this.fakeUser.name = "Joe Yeremuk";
    this.fakeUser.email = "iyeremuk@gmail.com";

  }


  // Primary login function.
  Login(username: string, password: string): Promise<UserModel> {

    return new Promise((resolve, reject) => {
      resolve(this.fakeUser);
    });

  }

  // Retrieve currently-authenticated user.
  GetCurrentUser() { return this.fakeUser; }

}

