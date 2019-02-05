import { Component } from '@angular/core';
import { AlertController, NavController, ModalController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AuthenticationService } from '../../providers/user-data';
import { User } from '../../models/user';
import { AppSettings } from "../../app/app.config";
import { TranslateService } from "@ngx-translate/core";
import { PartnerService } from '../../providers/partner-service';
import * as moment from 'moment';

@Component({
    selector: 'page-account',
    templateUrl: 'account.html',
    providers: [AuthenticationService, PartnerService]
})
export class AccountPage {
    userSegment: string = 'AccountInfo';
    username: string;
    user: User;
    logins: any;
    transactions: any;
    startDate: any = undefined;
    endDate: any = undefined;
    startTime: any = undefined;
    endTime: any = undefined;
    generalReport: any = {};

    constructor(
        public alertCtrl: AlertController,
        public nav: NavController,
        public AuthenticationService: AuthenticationService,
        public partnerService: PartnerService,
        public modalCtrl: ModalController
    ) {

        this.AuthenticationService.userLoggedIn().then(response => {
            this.user = <User>response;
        });

    }

    getPastLogins() {
        let start: number = 1;
        let limit: number = 50;
        this.AuthenticationService.getUserLogins(start, limit).then(response => {
            this.logins = response;
        });
    }

    openLoginDetailModal(model) {
        let modal = this.modalCtrl.create(ModalContentPage, { selected: model });
        modal.present();
    }

    getTransactions() {
        let start: number = 1;
        let limit: number = 50;
        this.AuthenticationService.getUserTransactions(start, limit).then(response => {
            this.transactions = response;
        });
    }

    goTransactionDetail(item) {
        this.nav.push(TransactionDetail, { obj: item });
    }

    changePassword() {
        let modal = this.modalCtrl.create(ChangePasswordPage);
        modal.present();
    }

    getGeneralReport() {
        let startDate = this.startDate;
        let endDate = this.endDate;

        let filter: any = {
            startDate: startDate ? moment(startDate).format('MM-DD-YYYY HH:mm:ss') : undefined,
            endDate: endDate ? moment(endDate).format('MM-DD-YYYY HH:mm:ss') : undefined
        };

        this.partnerService.getPartnerGeneralReport(filter).then(response => {
            this.generalReport = response;
        });
    }

}


@Component({
    selector: 'transaction-detail',
    templateUrl: 'transaction_detail.html'
})
export class TransactionDetail {
    item: any;
    constructor(
        public params: NavParams,
        public nav: NavController
    ) {
        this.item = this.params.get('obj');
    }
}


@Component({
    template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      {{item.Id}}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">{{'app.btn.cancel' | translate}}</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        {{'page.account.loginhistory.browser'|translate}}
        <ion-note item-end class="color-dark">{{item.Browser}}</ion-note>
      </ion-item>
      <ion-item>
        {{'page.account.loginhistory.device'|translate}}
        <ion-note item-end class="color-dark">{{item.Device}}</ion-note>
      </ion-item>
      <ion-item>
        {{'page.account.loginhistory.os'|translate}}
        <ion-note item-end class="color-dark">{{item.Os}}</ion-note>
      </ion-item>
      <ion-item>
        {{'page.account.loginhistory.ip'|translate}}
        <ion-note item-end class="color-dark">{{item.Ip}}</ion-note>
      </ion-item>
      <ion-item>
        {{'page.account.loginhistory.date'|translate}}
        <ion-note item-end class="color-dark">{{item.LoginDate}}</ion-note>
      </ion-item>
      <ion-item>
        {{'page.account.loginhistory.partnerId'|translate}}
        <ion-note item-end class="color-dark">{{item.PartnerId}}</ion-note>
      </ion-item>      
  </ion-list>
</ion-content>
`
})
export class ModalContentPage {
    item;

    constructor(
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        this.item = params.get('selected');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}




/* Change Password */
@Component({
    templateUrl: 'change_password.html'
})
export class ChangePasswordPage {

    constructor(
        public params: NavParams,
        public viewCtrl: ViewController,
        public authService: AuthenticationService,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController,
        public translateService: TranslateService,
    ) { }

    changePassword(newpass: string) {
        this.authService.changePassword(newpass).then(response => {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(value => { msg = value });
                let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            let alert = this.alertCtrl.create({
                message: response.Data,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            this.viewCtrl.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}