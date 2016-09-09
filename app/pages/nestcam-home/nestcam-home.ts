import {Component} from '@angular/core';
import {UserService} from '../../providers/user-service/user-service';
import {UserModel} from '../../models/user.ts';


@Component({
  templateUrl: 'build/pages/nestcam-home/nestcam-home.html',
  providers: [UserService]
})
export class NestCamHomePage {

  public user: UserModel;

  constructor(public userService: UserService) {

    this.setCurrentUser();

  }

  setCurrentUser() {

    this.user = this.userService.GetCurrentUser();

  }

}
