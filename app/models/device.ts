
// Model class for holding user information.
export class DeviceModel  {

    public id: string;
    public name: string;
    public snapshotURL: string;
    public appURL: string;
    public webURL: string;
    public liveFeedURL: string;
    public isOnline: boolean;
    public isStreaming: boolean;
    public isAudioEnabled: boolean;
    public lastIsOnlineActivity: Date;
    public embededIframe: string;

}

