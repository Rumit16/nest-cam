import { Injectable } from '@angular/core';
import { ConfigModel } from '../../models/config.ts';

@Injectable()
export class ConfigService {

  private _config: ConfigModel = new ConfigModel();

  get nestBaseAuthenticationUrl(): string {
    return this._config.nestBaseAuthenticationUrl;
  }
  set nestBaseAuthenticationUrl(value: string) {
    this._config.nestBaseAuthenticationUrl = value;
  }

  get nestBaseAPIUrl(): string {
    return this._config.nestBaseAPIUrl;
  }
  set nestBaseAPIUrl(value: string) {
    this._config.nestBaseAPIUrl = value;
  }

  get nestAuthenticationPin(): string {
    return this._config.nestAuthenticationPin;
  }
  set nestAuthenticationPin(value: string) {
    this._config.nestAuthenticationPin = value;
  }

  get nestAuthenticationToken(): string {
    return this._config.nestAuthenticationToken;
  }
  set nestAuthenticationToken(value: string) {
    this._config.nestAuthenticationToken = value;
  }

  get nestProductID(): string {
    return this._config.nestProductID;
  }
  set nestProductID(value: string) {
    this._config.nestProductID = value;
  }

  get nestProductSecret(): string {
    return this._config.nestProductSecret;
  }
  set nestProductSecret(value: string) {
    this._config.nestProductSecret = value;
  }

}

