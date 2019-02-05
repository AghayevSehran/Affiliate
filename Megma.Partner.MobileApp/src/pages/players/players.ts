import { Component, ViewChild } from '@angular/core';
import {
    NavParams,
    ViewController,
    ModalController,
    AlertController,
    ToastController,
    NavController,
    Events,
    LoadingController
} from "ionic-angular";
import { AppSettings } from "../../app/app.config";
import { NgForm } from "@angular/forms/forms";
import { User } from "../../models/user";
import { TransactionDetail, ChangePasswordPage } from "../account/account";
import { TicketsDetailPage } from "../tickets/tickets";
import { AuthenticationService } from "../../providers/user-data";
import { TranslateService } from "@ngx-translate/core";
import { LoginPage } from "../login/login";

import * as moment from 'moment';
import { PartnerService } from "../../providers/partner-service";

export interface Filter {
    id: number,
    username: string,
    name: string,
    surname: string,
    active: boolean,
    direct: boolean,
    start: number,
    limit: number
};


@Component({
    selector: 'page-players',
    templateUrl: 'players.html'
})
export class PlayersPage {
    players: any;
    searchParams: any;
    NewPlayerForm = NewPlayerForm;

    infiteMore = true;

    constructor(public partnerService: PartnerService,
        public nav: NavController,
        public modalCtrl: ModalController,
        public events: Events,
        public toastCtrl: ToastController,
        public translateService: TranslateService) {

        this.searchParams = {
            page: 1,
            start: 0,
            limit: 50,
            active: true,
            direct: true
        }

        partnerService.getPlayers(this.searchParams).then(response => {
            this.players = response;
        });

        events.subscribe('player:reload', () => {
            this.reloadPage();
            //events.unsubscribe('player:reload');
        });
    }

    isReadonly() {
        return true;
    }
    reloadPage() {
        delete this.searchParams.component;
        delete this.searchParams.opts;

        this.searchParams.page = 1;
        this.searchParams.start = 0;
        this.partnerService.getPlayers(this.searchParams).then(response => {
            this.players = response;
        });
    }

    openPayOut(player) {
        let modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payout', playerId: player.Id });
        modal.present();
    }

    productPermits(player) {
        let modal = this.modalCtrl.create(PlayerProductPermits, { playerId: player.Id });
        modal.present();
    }
    openPayIn(player) {
        let modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payin', playerId: player.Id });
        modal.present();
    }

    goUserDetail(id) {
        this.nav.push(PlayerDetailPage, { id: id });
    }


    changePassword() {
        let modal = this.modalCtrl.create(ChangePasswordPage);
        modal.present();
    }

    presentFilter() {
        let modal = this.modalCtrl.create(PlayersFilterPage, this.searchParams);
        modal.present();
        modal.onWillDismiss((data: Filter) => {
            if (data) {
                this.searchParams = data;
                this.reloadPage();
            }
        });
    }


    doInfinite(): Promise<any> {
        return new Promise((resolve) => {
            this.searchParams.page += 1;
            this.searchParams.start = ((this.searchParams.page - 1) * this.searchParams.limit);
            this.partnerService.getPlayers(this.searchParams).then(response => {

                if (response.Status === AppSettings.REST_STATUS_ERROR) {
                    let msg: string;
                    this.translateService.get(response.Message).subscribe(value => {
                        msg = value
                    });
                    let error = this.toastCtrl.create({
                        message: msg,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    if (response.Status === AppSettings.REST_STATUS_UNAUTH) {
                        this.nav.setRoot(LoginPage);
                    }
                    return false;
                }
                if(!response.length){
                    this.infiteMore = false;
                    return false;
                }
                response.forEach(element => {
                    this.players.push(element);
                });
                resolve();
            });
        });
    }


}
/* Product Permitions */
@Component({
    templateUrl: 'player_product_permits.html'
})
export class PlayerProductPermits {
    partnerId: number;
    productPermits = {
        CanPlayBet: true,
        CanPlayCasino: true,
        CanPlayLiveCasino: true,
        CanPlayTombala: true,
        UseCashout: true
    };
    constructor(
        public params: NavParams,
        public viewCtrl: ViewController,
        public toastCtrl: ToastController,
        public partnerService: PartnerService
    ) {
        this.partnerId = params.get('playerId');
        this.partnerService.getPlayerProductPermitions(this.partnerId).then(response => {
            this.productPermits = response;
        });
    }

    savePermition() {
        this.partnerService.setPlayerProductPermitions(this.partnerId, this.productPermits.CanPlayTombala, this.productPermits.CanPlayCasino, this.productPermits.CanPlayLiveCasino, this.productPermits.CanPlayBet, this.productPermits.UseCashout).then(response => {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                let error = this.toastCtrl.create({ message: response.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}

/* Filter Settings */
@Component({
    selector: 'page-player-filter',
    templateUrl: 'players_filter.html'
})
export class PlayersFilterPage {
    searchParams: any = [];

    constructor(public navParams: NavParams,
        public viewCtrl: ViewController) {
        let filter: any = {
            active: (this.navParams.get('active') ? this.navParams.get('active') : false),
            direct: (this.navParams.get('direct') ? this.navParams.get('direct') : false),
            start: (this.navParams.get('start') ? this.navParams.get('start') : 0),
            limit: (this.navParams.get('limit') ? this.navParams.get('limit') : 50),
        };
        this.searchParams = filter;
    }

    applyFilters() {
        this.dismiss(this.searchParams);
    }

    dismiss(data?: any) {
        this.viewCtrl.dismiss(data);
    }
}


@Component({
    selector: 'page-player-detail',
    templateUrl: 'player-detail.html',
    providers: [PartnerService]
})
export class PlayerDetailPage {
    userSegment: string = 'AccountInfo';
    playerId: any;
    player: User;
    logins: any;
    cashtransactions: any;
    transactions: any;
    tickets: any;

    cashParams: any = {
        startDate: null,
        endDate: null,
        playerId: null
    }

    searchParams: any = {
        playerId: null,
        page: 1,
        start: 0,
        limit: 50
    };


    constructor(public alertCtrl: AlertController,
        public nav: NavController,
        public navParams: NavParams,
        public events: Events,
        public partnerService: PartnerService,
        public modalCtrl: ModalController,
        public toastCtrl: ToastController,
        public translateService: TranslateService, ) {

        let firstDay = moment().isoWeekday(2).format('YYYY-MM-DD');
        let today = moment().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');

        if (moment().isoWeekday() === 1) {
            firstDay = moment().isoWeekday(-5).format('YYYY-MM-DD');
            today = moment().add(1, 'days').format('YYYY-MM-DD');
        }

        this.playerId = this.navParams.get('id');
        this.cashParams.startDate = firstDay;
        this.cashParams.endDate = today;

        this.cashParams.playerId = this.playerId;

        this.reloadPage();
        events.subscribe('player:reload', () => {
            this.reloadPage();
        });
    }

    reloadPage() {
        this.partnerService.getPartnerPlayer(this.playerId).then(response => {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(value => {
                    msg = value
                });
                let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            this.player = <User>response;
        });
    }

    getPastLogins() {
        let start: number = 1;
        let limit: number = 50;
        this.partnerService.getPlayerLogins(this.playerId, start, limit).then(response => {
            this.logins = response;
        });
    }

    getCashTransactions() {
        this.partnerService.getPlayerCashTransactions(this.cashParams).then(response => {
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(value => {
                    msg = value
                });
                let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            this.cashtransactions = response.Data;
        });

    }

    openLoginDetailModal(model) {
        let modal = this.modalCtrl.create(LoginHistoryModal, { selected: model });
        modal.present();
    }

    getTransactions() {
        let start: number = 1;
        let limit: number = 50;
        this.partnerService.getPlayerTransactions(this.playerId, start, limit).then(response => {
            this.transactions = response;
        });
    }

    getPlayerTickets() {
        this.searchParams.playerId = this.playerId;
        this.partnerService.getPlayerTickets(this.searchParams).then(response => {
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(value => {
                    msg = value
                });
                let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            this.tickets = response.Data;
        });
    }


    goTransactionDetail(item) {
        this.nav.push(TransactionDetail, { obj: item });
    }

    changePassword(player) {
        let modal = this.modalCtrl.create(ChangePlayerPasswordPage, { playerId: player.Id });
        modal.present();
    }


    openPayOut(player) {
        let modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payout', playerId: player.Id });
        modal.present();
    }

    openPayIn(player) {
        let modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payin', playerId: player.Id });
        modal.present();
    }


    goTicketDetail(pid, id) {
        this.nav.push(TicketsDetailPage, { playerid: pid, id: id });
    }

    editPlayer(player) {
        this.nav.push(EditPlayerForm, { id: player.Id });
    }


    doInfinite(): Promise<any> {
        return new Promise((resolve) => {
            this.searchParams.page += 1;
            this.searchParams.start = this.searchParams.page - 1;
            this.partnerService.getPlayerTickets(this.searchParams).then(response => {

                if (response.Status === AppSettings.REST_STATUS_ERROR) {
                    let msg: string;
                    this.translateService.get(response.Message).subscribe(value => {
                        msg = value
                    });
                    let error = this.toastCtrl.create({
                        message: msg,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    if (response.Status === AppSettings.REST_STATUS_UNAUTH) {
                        this.nav.setRoot(LoginPage);
                    }
                    return false;
                }
                response.Data.forEach(element => {
                    this.tickets.push(element);
                });
                resolve();
            });
        });
    }


}


@Component({
    selector: 'payinout-modal',
    templateUrl: 'player-payinout.html'
})
export class PayinPayoutModal {
    playerId;
    type;
    submitted: boolean;
    amount: number;

    @ViewChild(PlayersPage) playersPage;

    constructor(public params: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public partnerService: PartnerService,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        public events: Events,
        public translateService: TranslateService,
        public authService: AuthenticationService) {
        this.playerId = this.params.get('playerId');
        this.type = this.params.get('type');
    }

    sendAmount(form: NgForm) {
        this.submitted = true;
        if (form.valid) {

            if (this.type === 'payin') {
                this.partnerService.playerPayIn({ playerId: this.playerId, amount: this.amount }).then(response => {
                    this.createResponse(response);
                })
            } else if (this.type === 'payout') {
                this.partnerService.playerPayOut({ playerId: this.playerId, amount: this.amount }).then(response => {
                    this.createResponse(response);
                })
            } else {
                return false;
            }
        }
    }

    createResponse(response) {
        if (response.Status == AppSettings.REST_STATUS_ERROR) {
            let error = this.toastCtrl.create({
                message: response.Message,
                cssClass: 'danger',
                duration: 3000,
                position: 'top'
            });
            error.present();
            return false;
        }
        let successMessage: string;
        this.translateService.get('app.general.message.success').subscribe(v => {
            successMessage = v
        });
        let alert = this.alertCtrl.create({
            message: successMessage,
            buttons: [{
                text: 'OK', handler: () => {
                    this.dismiss();
                    this.events.publish('player:reload');
                }
            }]
        });
        alert.present();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}


/* Login Histroy Detail */

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
                    {{'page.account.loginhistory.browser' | translate}}
                    <ion-note item-end class="color-dark">{{item.BrowserFamily}}</ion-note>
                </ion-item>
                <ion-item>
                    {{'page.account.loginhistory.device' | translate}}
                    <ion-note item-end class="color-dark">{{item.DeviceFamily}}</ion-note>
                </ion-item>
                <ion-item>
                    {{'page.account.loginhistory.os' | translate}}
                    <ion-note item-end class="color-dark">{{item.OsFamily}}</ion-note>
                </ion-item>
                <ion-item>
                    {{'page.account.loginhistory.ip' | translate}}
                    <ion-note item-end class="color-dark">{{item.PlayerIpAddress}}</ion-note>
                </ion-item>
                <ion-item>
                    {{'page.account.loginhistory.date' | translate}}
                    <ion-note item-end class="color-dark">{{item.SessionStart}}</ion-note>
                </ion-item>
                <ion-item>
                    {{'page.account.loginhistory.active' | translate}}
                    <ion-note item-end class="color-dark">
                        <ion-icon name="checkmark-circle" *ngIf="item.IsActive" color="primary"></ion-icon>
                        <ion-icon name="close-circle" *ngIf="!item.IsActive" color="danger"></ion-icon>
                    </ion-note>
                </ion-item>
            </ion-list>
        </ion-content>
    `
})
export class LoginHistoryModal {
    item;

    constructor(public params: NavParams,
        public viewCtrl: ViewController) {
        this.item = params.get('selected');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}

/* Create New Player */
@Component({
    templateUrl: 'add.html'
})
export class NewPlayerForm {
    player = {
        type: 'NEW',
        name: '',
        surname: '',
        username: ''
    };
    submitted = false;

    constructor(public partnerService: PartnerService,
        public nav: NavController,
        public navParams: NavParams,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private translateService: TranslateService) {
    }

    savePlayer(form: NgForm) {
        this.submitted = true;
        if (form.valid) {

            let loading = this.loadingCtrl.create();
            loading.present();
            this.partnerService.savePlayer(this.player).then(result => {
                loading.dismiss();
                if (result.Status == AppSettings.REST_STATUS_ERROR) {
                    let error = this.toastCtrl.create({
                        message: result.Message,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    return false;
                }

                let successMessage: string;
                this.translateService.get('app.general.message.success').subscribe(v => {
                    successMessage = v
                });
                let succes = this.toastCtrl.create({ message: successMessage, duration: 3000 });
                succes.present();
                this.nav.setRoot(PlayersPage);
            });
        }
    }

    generateUsername(length) {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.player.username = 'P_' + text;
        this.player.name = 'N_' + text;
        this.player.surname = 'S_' + text;
    }
}


/* Edit Player */
@Component({
    templateUrl: 'edit.html'
})
export class EditPlayerForm {
    playerId: number;
    player = {
        name: null,
        surname: null,
        active: true,
        type: 'EDIT'
    };
    submitted = false;

    constructor(public partnerService: PartnerService,
        public nav: NavController,
        public navParams: NavParams,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        public translateService: TranslateService, ) {

        this.playerId = navParams.get('id');
        this.getUser();
    }

    getUser() {
        this.partnerService.getPartnerPlayer(this.playerId).then(response => {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(value => {
                    msg = value
                });
                let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            this.player.name = response.Name;
            this.player.surname = response.Surname;
            this.player.active = response.IsActive;
        });
    }

    savePlayer(form: NgForm) {
        this.submitted = true;
        if (form.valid) {

            let loading = this.loadingCtrl.create();
            loading.present();
            this.partnerService.saveEditPlayer(this.player).then(result => {
                loading.dismiss();
                if (result.Status == AppSettings.REST_STATUS_ERROR) {
                    let error = this.toastCtrl.create({
                        message: result.Message,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    return false;
                }

                let successMessage: string;
                this.translateService.get('app.general.message.success').subscribe(v => {
                    successMessage = v
                });

                let succes = this.toastCtrl.create({ message: successMessage, duration: 3000 });
                succes.present();
                this.nav.push(PlayerDetailPage, { id: this.playerId });
            });
        }
    }
}


/* Change Password */
@Component({
    templateUrl: 'change_password.html'
})
export class ChangePlayerPasswordPage {
    playerId: number;

    constructor(public params: NavParams,
        public viewCtrl: ViewController,
        public authService: AuthenticationService,
        public toastCtrl: ToastController,
        public alertCtrl: AlertController) {
        this.playerId = this.params.get('playerId');
        console.log(this.playerId);
    }

    changePassword(newpass: string) {
        this.authService.changePlayerPassword(this.playerId, newpass).then(response => {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                let error = this.toastCtrl.create({
                    message: response.Message,
                    cssClass: 'danger',
                    duration: 3000,
                    position: 'top'
                });
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
