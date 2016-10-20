
// App configuration model.

export class ConfigModel {

    public loginURL: string = 'https://nestcamapi.azurewebsites.net/api/user/login';

    // Nest API properties.
    public nestBaseAuthenticationUrl: string = 'https://api.home.nest.com/oauth2';

    public nestBaseAPIUrl: string = 'https://developer-api.nest.com';

    public nestAuthenticationPin: string = 'NQQEHZ37';

    public nestAuthenticationToken: string = 'c.mzqJOprsnP7mmS6Cbl7GE9NtKEZsZH67OWetXsoKhtITqeXKMW698gdLeNZYc9HvRy3qYSnaJuEfkBFxbLx2SzKI1mlG05JI8I6lEjg6TEdqelqecmjxvrzwN0CZOHdR3LaiLXkQmRMcsJbc';

    public nestProductID: string = 'c653f69a-62be-47fa-8c9e-f99d6c133f85';

    public nestProductSecret: string = 's27T0NIBWCkM8wSm2Kf1qzTBk';

    // Notification email properties.
    public nestFromAddress: string = 'sample@email.address';

    public nestEmailSubject: string = '{{camera_name}} detected motion.';

    public nestEmailMessageBody: string = 'Motion was detected by {{camera_name}} camera at {{start_time}}. Please check live video feed for potential intruders.';

    // MailGun properties.
    public mailGunAPIKey: string = 'key-38c961c975d833b4844ee3f983d46db7';

    public mailGunDomain: string = 'sandboxcae2ff4026c04998820a9c4afe192644.mailgun.org';

    public mailGunURL: string = 'https://api.mailgun.net/v3/';

}
