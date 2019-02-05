var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AlertController, NavController, ModalController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AuthenticationService } from '../../providers/user-data';
import { AppSettings } from "../../app/app.config";
import { TranslateService } from "@ngx-translate/core";
import { PartnerService } from '../../providers/partner-service';
import * as moment from 'moment';
var AccountPage = /** @class */ (function () {
    function AccountPage(alertCtrl, nav, AuthenticationService, partnerService, modalCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.AuthenticationService = AuthenticationService;
        this.partnerService = partnerService;
        this.modalCtrl = modalCtrl;
        this.userSegment = 'AccountInfo';
        this.startDate = undefined;
        this.endDate = undefined;
        this.startTime = undefined;
        this.endTime = undefined;
        this.generalReport = {};
        this.AuthenticationService.userLoggedIn().then(function (response) {
            _this.user = response;
        });
    }
    AccountPage.prototype.getPastLogins = function () {
        var _this = this;
        var start = 1;
        var limit = 50;
        this.AuthenticationService.getUserLogins(start, limit).then(function (response) {
            _this.logins = response;
        });
    };
    AccountPage.prototype.openLoginDetailModal = function (model) {
        var modal = this.modalCtrl.create(ModalContentPage, { selected: model });
        modal.present();
    };
    AccountPage.prototype.getTransactions = function () {
        var _this = this;
        var start = 1;
        var limit = 50;
        this.AuthenticationService.getUserTransactions(start, limit).then(function (response) {
            _this.transactions = response;
        });
    };
    AccountPage.prototype.goTransactionDetail = function (item) {
        this.nav.push(TransactionDetail, { obj: item });
    };
    AccountPage.prototype.changePassword = function () {
        var modal = this.modalCtrl.create(ChangePasswordPage);
        modal.present();
    };
    AccountPage.prototype.getGeneralReport = function () {
        var _this = this;
        var startDate = this.startDate;
        var endDate = this.endDate;
        var filter = {
            startDate: startDate ? moment(startDate).format('MM-DD-YYYY HH:mm:ss') : undefined,
            endDate: endDate ? moment(endDate).format('MM-DD-YYYY HH:mm:ss') : undefined
        };
        this.partnerService.getPartnerGeneralReport(filter).then(function (response) {
            _this.generalReport = response;
        });
    };
    AccountPage = __decorate([
        Component({
            selector: 'page-account',
            templateUrl: 'account.html',
            providers: [AuthenticationService, PartnerService]
        }),
        __metadata("design:paramtypes", [AlertController,
            NavController,
            AuthenticationService,
            PartnerService,
            ModalController])
    ], AccountPage);
    return AccountPage;
}());
export { AccountPage };
var TransactionDetail = /** @class */ (function () {
    function TransactionDetail(params, nav) {
        this.params = params;
        this.nav = nav;
        this.item = this.params.get('obj');
    }
    TransactionDetail = __decorate([
        Component({
            selector: 'transaction-detail',
            templateUrl: 'transaction_detail.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            NavController])
    ], TransactionDetail);
    return TransactionDetail;
}());
export { TransactionDetail };
var ModalContentPage = /** @class */ (function () {
    function ModalContentPage(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.item = params.get('selected');
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Component({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{item.Id}}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">{{'app.btn.cancel' | translate}}</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n      <ion-item>\n        {{'page.account.loginhistory.browser'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.Browser}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.device'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.Device}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.os'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.Os}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.ip'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.Ip}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.date'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.LoginDate}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.partnerId'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.PartnerId}}</ion-note>\n      </ion-item>      \n  </ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController])
    ], ModalContentPage);
    return ModalContentPage;
}());
export { ModalContentPage };
/* Change Password */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(params, viewCtrl, authService, toastCtrl, alertCtrl, translateService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
    }
    ChangePasswordPage.prototype.changePassword = function (newpass) {
        var _this = this;
        this.authService.changePassword(newpass).then(function (response) {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                var msg_1;
                _this.translateService.get(response.Message).subscribe(function (value) { msg_1 = value; });
                var error = _this.toastCtrl.create({ message: msg_1, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            var alert = _this.alertCtrl.create({
                message: response.Data,
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ChangePasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChangePasswordPage = __decorate([
        Component({
            templateUrl: 'change_password.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController,
            AuthenticationService,
            ToastController,
            AlertController,
            TranslateService])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());
export { ChangePasswordPage };
//# sourceMappingURL=account.js.map