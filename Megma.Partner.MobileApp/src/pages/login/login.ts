import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController, Events } from 'ionic-angular';
import { AuthenticationService } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { AppSettings } from "../../app/app.config";
import { AccountPage } from "../account/account";
import { TranslateService } from "@ngx-translate/core";

 
@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '', language: 'tr' };
  submitted = false;

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public AuthenticationService: AuthenticationService,
    public alertCtrl: AlertController,
    public translate: TranslateService,
    public storage: Storage
  ) {
    AuthenticationService.getLanguage().then(r=>{
      this.login.language = r;
    });

 
    
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.AuthenticationService.login(this.login.username, this.login.password, this.login.language)
        .then(resp => {
          if (resp.Status === AppSettings.REST_STATUS_ERROR) {
            let alert = this.alertCtrl.create({ title: resp.Message, buttons: [{ text: 'OK', handler: () => { } }] });
            alert.present();
            return false;
          }
          this.events.publish('user:login');
          this.events.publish('user:canpartneradd',resp.userCanCreatePartner);
          this.navCtrl.setRoot(AccountPage);
        })
    }
  }

  onChangeLanguage(lang: string) {
    this.storage.set('lang', lang);
    this.translate.use(lang);
  }
}
