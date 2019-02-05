import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AppSettings } from "../app/app.config";

//rxjs promises cause angular http return observable natively.
import 'rxjs/add/operator/toPromise';
import { User } from "../models/user";
import { RequestService } from "./request";

@Injectable()
export class AuthenticationService {
  _favorites: string[] = [];
  user: User;
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    public events: Events,
    public storage: Storage,
    private requestService: RequestService
  ) { }

  async login(username: string, password: string, lang: string): Promise<any> {
    let data = await this.requestService.get('/Home/Login?username=' + username + '&password=' + password + '&lang=' + lang);
    this.storage.set('user', data.Data);
    return data;
  };

  async getbalance(): Promise<any> {
    let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getbalance');
    return data;
  };

  async userLoggedIn(): Promise<any> {
    let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getsession');
    if (data.Status != AppSettings.REST_STATUS_OK) {
      this.storage.remove('user');
      return data;
    }
    this.storage.set('user', data.Data);
    return data.Data;
  };

  async getUserLogins(start: number, limit: number): Promise<any> {
    let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'loginhistory?start=' + start + '&limit=' + limit);
    if (data.Status != AppSettings.REST_STATUS_OK)
      return false;
    return data.Data;
  };

  async getUserTransactions(start: number, limit: number): Promise<any> {
    let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'transactionhistory?start=' + start + '&limit=' + limit);
    if (data.Status != AppSettings.REST_STATUS_OK)
      return false;
    return data.Data;
  };

  async changePassword(password: string): Promise<any> {
    let data = await this.requestService.post(AppSettings.API_ENDPOINT + 'changemypassword?password=' + password);
    return data;
  };

  async changePartnerPassword(partnerId: number, password: string): Promise<any> {
    let data = await this.requestService.post(AppSettings.API_ENDPOINT + 'changemypassword?partnerId=' + partnerId + '&password=' + password);
    return data;
  };

  async changePlayerPassword(playerId: number, password: string): Promise<any> {
    let data = await this.requestService.post(AppSettings.API_ENDPOINT + 'changeplayerpassword?playerId=' + playerId + '&password=' + password);
    return data;
  };

  async logout(): Promise<any> {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('user');
    this.events.publish('user:logout');
    return await this.requestService.post(AppSettings.API_ENDPOINT + 'logout');
  };

  async getLanguage(): Promise<string> {
    return await this.storage.get('lang').then((lang) => {
      if (lang) { return lang; } else {
        let userLang = navigator.language.split('-')[0];
        userLang = /(de|en|tr)/gi.test(userLang) ? userLang : 'tr';
        return userLang;
      }
    });
  };


  getUserCanCountryView(): Promise<boolean> {
    return this.storage.get('user').then((value) => {
      if(value)
      return value.CanViewCountry;
    });
  };

  getUserTicketCancelPermission(): Promise<boolean> {
    return this.storage.get('user').then((value) => {
      if(value)
      return value.CanCancelTicket;
    });
  };

  getCanCreatePartner(): Promise<boolean> {
    return this.storage.get('user').then((value) => {
      if(value)
      return value.CanCreatePartner;
    });
  };


}
