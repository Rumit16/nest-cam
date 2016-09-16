import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {NestCamHomePage} from './pages/nestcam-home/nestcam-home';
import {NestCamListPage} from './pages/nestcam-list/nestcam-list';
import {NestcamRegistrationPage} from './pages/nestcam-registration-page/nestcam-registration-page';
import {NestCamLoginPagePage} from './pages/nestcam-login-page/nestcam-login-page';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make NestCamLoginPagePage the root (or first) page
  rootPage: any = NestCamLoginPagePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: NestCamHomePage },
      { title: 'Cameras', component: NestCamListPage },
      { title: 'Registration', component: NestcamRegistrationPage}
      {title: 'Login', component: NestCamLoginPagePage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
