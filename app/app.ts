import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { NestCamListPage } from './pages/nestcam-list/nestcam-list';
import { NestCamRegistrationPage } from './pages/nestcam-registration/nestcam-registration';
import { NestCamLoginPage } from './pages/nestcam-login/nestcam-login';

// Singleton services.
import { EmailService } from './providers/email-service/email-service';
import { NotificationService } from './providers/notification-service/notification-service';
import { DeviceService } from './providers/device-service/device-service';
import { ConfigService } from './providers/config-service/config-service';
import { UtilityService } from './providers/utility-service/utility-service';
import { UserService } from './providers/user-service/user-service';
import { NestApplicationInterface } from './nest/NestApplicationInterface';
import { NestRepresentationManager } from './nest/representations/NestRepresentationManager';
import { NestNetworkManager } from './nest/network/NestNetworkManager';
import { NoTokenSetWhileMakingRequest } from './nest/network/NetworkManagerErrors';
import { TokenMustBeString } from './nest/network/NetworkManagerErrors';
import { NestNetworkManagerUtils } from './nest/network/NestNetworkManagerUtils';
import { EMITABLE_EVENTS } from './nest/network/NestNetworkManagerConstants';
import { NETWORK_STREAM_EVENTS } from './nest/network/NestNetworkManagerConstants';
import { NETWORK_ERROR_EVENTS } from './nest/network/NestNetworkManagerConstants';

@Component({
  templateUrl: 'build/app.html',
  providers: [
    EmailService,
    NotificationService,
    DeviceService,
    ConfigService,
    UtilityService,
    UserService,
    NestApplicationInterface,
    NestRepresentationManager,
    NestNetworkManager,
    NoTokenSetWhileMakingRequest,
    TokenMustBeString,
    NestNetworkManagerUtils,
    EMITABLE_EVENTS,
    NETWORK_STREAM_EVENTS,
    NETWORK_ERROR_EVENTS
  ]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make NestCamLoginPagePage the root (or first) page
  rootPage: any = NestCamLoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Cameras', component: NestCamListPage },
      { title: 'Registration', component: NestCamRegistrationPage},
      {title: 'Login', component: NestCamLoginPage}
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
