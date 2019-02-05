var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, AlertController, Events } from 'ionic-angular';
import { AuthenticationService } from '../../providers/user-data';
import { AppSettings } from "../../app/app.config";
import { AccountPage } from "../account/account";
import { TranslateService } from "@ngx-translate/core";
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, events, AuthenticationService, alertCtrl, translate, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.AuthenticationService = AuthenticationService;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.storage = storage;
        this.login = { username: '', password: '', language: 'tr' };
        this.submitted = false;
        AuthenticationService.getLanguage().then(function (r) {
            _this.login.language = r;
        });
    }
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.AuthenticationService.login(this.login.username, this.login.password, this.login.language)
                .then(function (resp) {
                if (resp.Status === AppSettings.REST_STATUS_ERROR) {
                    var alert_1 = _this.alertCtrl.create({ title: resp.Message, buttons: [{ text: 'OK', handler: function () { } }] });
                    alert_1.present();
                    return false;
                }
                _this.events.publish('user:login');
                _this.events.publish('user:canpartneradd', resp.userCanCreatePartner);
                _this.navCtrl.setRoot(AccountPage);
            });
        }
    };
    LoginPage.prototype.onChangeLanguage = function (lang) {
        this.storage.set('lang', lang);
        this.translate.use(lang);
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-user',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController,
            Events,
            AuthenticationService,
            AlertController,
            TranslateService,
            Storage])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map