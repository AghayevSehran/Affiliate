var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ModalController, AlertController, ToastController, NavController, Events, LoadingController } from "ionic-angular";
import { AppSettings } from "../../app/app.config";
import { TransactionDetail, ChangePasswordPage } from "../account/account";
import { TicketsDetailPage } from "../tickets/tickets";
import { AuthenticationService } from "../../providers/user-data";
import { TranslateService } from "@ngx-translate/core";
import { LoginPage } from "../login/login";
import * as moment from 'moment';
import { PartnerService } from "../../providers/partner-service";
;
var PlayersPage = /** @class */ (function () {
    function PlayersPage(partnerService, nav, modalCtrl, events, toastCtrl, translateService) {
        var _this = this;
        this.partnerService = partnerService;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.NewPlayerForm = NewPlayerForm;
        this.infiteMore = true;
        this.searchParams = {
            page: 1,
            start: 0,
            limit: 50,
            active: true,
            direct: false
        };
        partnerService.getPlayers(this.searchParams).then(function (response) {
            _this.players = response;
        });
        events.subscribe('player:reload', function () {
            _this.reloadPage();
            //events.unsubscribe('player:reload');
        });
    }
    PlayersPage.prototype.reloadPage = function () {
        var _this = this;
        delete this.searchParams.component;
        delete this.searchParams.opts;
        this.searchParams.page = 1;
        this.searchParams.start = 0;
        this.partnerService.getPlayers(this.searchParams).then(function (response) {
            _this.players = response;
        });
    };
    PlayersPage.prototype.openPayOut = function (player) {
        var modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payout', playerId: player.Id });
        modal.present();
    };
    PlayersPage.prototype.productPermits = function (player) {
        var modal = this.modalCtrl.create(PlayerProductPermits, { playerId: player.Id });
        modal.present();
    };
    PlayersPage.prototype.openPayIn = function (player) {
        var modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payin', playerId: player.Id });
        modal.present();
    };
    PlayersPage.prototype.goUserDetail = function (id) {
        this.nav.push(PlayerDetailPage, { id: id });
    };
    PlayersPage.prototype.changePassword = function () {
        var modal = this.modalCtrl.create(ChangePasswordPage);
        modal.present();
    };
    PlayersPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(PlayersFilterPage, this.searchParams);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.searchParams = data;
                _this.reloadPage();
            }
        });
    };
    PlayersPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.searchParams.page += 1;
            _this.searchParams.start = ((_this.searchParams.page - 1) * _this.searchParams.limit);
            _this.partnerService.getPlayers(_this.searchParams).then(function (response) {
                if (response.Status === AppSettings.REST_STATUS_ERROR) {
                    var msg_1;
                    _this.translateService.get(response.Message).subscribe(function (value) {
                        msg_1 = value;
                    });
                    var error = _this.toastCtrl.create({
                        message: msg_1,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    if (response.Status === AppSettings.REST_STATUS_UNAUTH) {
                        _this.nav.setRoot(LoginPage);
                    }
                    return false;
                }
                if (!response.length) {
                    _this.infiteMore = false;
                    return false;
                }
                response.forEach(function (element) {
                    _this.players.push(element);
                });
                resolve();
            });
        });
    };
    PlayersPage = __decorate([
        Component({
            selector: 'page-players',
            templateUrl: 'players.html'
        }),
        __metadata("design:paramtypes", [PartnerService,
            NavController,
            ModalController,
            Events,
            ToastController,
            TranslateService])
    ], PlayersPage);
    return PlayersPage;
}());
export { PlayersPage };
/* Product Permitions */
var PlayerProductPermits = /** @class */ (function () {
    function PlayerProductPermits(params, viewCtrl, toastCtrl, partnerService) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.partnerService = partnerService;
        this.productPermits = {
            CanPlayBet: true,
            CanPlayCasino: true,
            CanPlayLiveCasino: true,
            CanPlayTombala: true,
            UseCashout: true
        };
        this.partnerId = params.get('playerId');
        this.partnerService.getPlayerProductPermitions(this.partnerId).then(function (response) {
            _this.productPermits = response;
        });
    }
    PlayerProductPermits.prototype.savePermition = function () {
        var _this = this;
        this.partnerService.setPlayerProductPermitions(this.partnerId, this.productPermits.CanPlayTombala, this.productPermits.CanPlayCasino, this.productPermits.CanPlayLiveCasino, this.productPermits.CanPlayBet, this.productPermits.UseCashout).then(function (response) {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                var error = _this.toastCtrl.create({ message: response.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
        });
    };
    PlayerProductPermits.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlayerProductPermits = __decorate([
        Component({
            templateUrl: 'player_product_permits.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController,
            ToastController,
            PartnerService])
    ], PlayerProductPermits);
    return PlayerProductPermits;
}());
export { PlayerProductPermits };
/* Filter Settings */
var PlayersFilterPage = /** @class */ (function () {
    function PlayersFilterPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.searchParams = [];
        var filter = {
            active: (this.navParams.get('active') ? this.navParams.get('active') : false),
            direct: (this.navParams.get('direct') ? this.navParams.get('direct') : false),
            start: (this.navParams.get('start') ? this.navParams.get('start') : 0),
            limit: (this.navParams.get('limit') ? this.navParams.get('limit') : 50),
        };
        this.searchParams = filter;
    }
    PlayersFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.searchParams);
    };
    PlayersFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    PlayersFilterPage = __decorate([
        Component({
            selector: 'page-player-filter',
            templateUrl: 'players_filter.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController])
    ], PlayersFilterPage);
    return PlayersFilterPage;
}());
export { PlayersFilterPage };
var PlayerDetailPage = /** @class */ (function () {
    function PlayerDetailPage(alertCtrl, nav, navParams, events, partnerService, modalCtrl, toastCtrl, translateService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.events = events;
        this.partnerService = partnerService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.userSegment = 'AccountInfo';
        this.cashParams = {
            startDate: null,
            endDate: null,
            playerId: null
        };
        this.searchParams = {
            playerId: null,
            page: 1,
            start: 0,
            limit: 50
        };
        var firstDay = moment().isoWeekday(2).format('YYYY-MM-DD');
        var today = moment().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (moment().isoWeekday() === 1) {
            firstDay = moment().isoWeekday(-5).format('YYYY-MM-DD');
            today = moment().add(1, 'days').format('YYYY-MM-DD');
        }
        this.playerId = this.navParams.get('id');
        this.cashParams.startDate = firstDay;
        this.cashParams.endDate = today;
        this.cashParams.playerId = this.playerId;
        this.reloadPage();
        events.subscribe('player:reload', function () {
            _this.reloadPage();
        });
    }
    PlayerDetailPage.prototype.reloadPage = function () {
        var _this = this;
        this.partnerService.getPartnerPlayer(this.playerId).then(function (response) {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                var msg_2;
                _this.translateService.get(response.Message).subscribe(function (value) {
                    msg_2 = value;
                });
                var error = _this.toastCtrl.create({ message: msg_2, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.player = response;
        });
    };
    PlayerDetailPage.prototype.getPastLogins = function () {
        var _this = this;
        var start = 1;
        var limit = 50;
        this.partnerService.getPlayerLogins(this.playerId, start, limit).then(function (response) {
            _this.logins = response;
        });
    };
    PlayerDetailPage.prototype.getCashTransactions = function () {
        var _this = this;
        this.partnerService.getPlayerCashTransactions(this.cashParams).then(function (response) {
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                var msg_3;
                _this.translateService.get(response.Message).subscribe(function (value) {
                    msg_3 = value;
                });
                var error = _this.toastCtrl.create({ message: msg_3, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.cashtransactions = response.Data;
        });
    };
    PlayerDetailPage.prototype.openLoginDetailModal = function (model) {
        var modal = this.modalCtrl.create(LoginHistoryModal, { selected: model });
        modal.present();
    };
    PlayerDetailPage.prototype.getTransactions = function () {
        var _this = this;
        var start = 1;
        var limit = 50;
        this.partnerService.getPlayerTransactions(this.playerId, start, limit).then(function (response) {
            _this.transactions = response;
        });
    };
    PlayerDetailPage.prototype.getPlayerTickets = function () {
        var _this = this;
        this.searchParams.playerId = this.playerId;
        this.partnerService.getPlayerTickets(this.searchParams).then(function (response) {
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                var msg_4;
                _this.translateService.get(response.Message).subscribe(function (value) {
                    msg_4 = value;
                });
                var error = _this.toastCtrl.create({ message: msg_4, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.tickets = response.Data;
        });
    };
    PlayerDetailPage.prototype.goTransactionDetail = function (item) {
        this.nav.push(TransactionDetail, { obj: item });
    };
    PlayerDetailPage.prototype.changePassword = function (player) {
        var modal = this.modalCtrl.create(ChangePlayerPasswordPage, { playerId: player.Id });
        modal.present();
    };
    PlayerDetailPage.prototype.openPayOut = function (player) {
        var modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payout', playerId: player.Id });
        modal.present();
    };
    PlayerDetailPage.prototype.openPayIn = function (player) {
        var modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payin', playerId: player.Id });
        modal.present();
    };
    PlayerDetailPage.prototype.goTicketDetail = function (pid, id) {
        this.nav.push(TicketsDetailPage, { playerid: pid, id: id });
    };
    PlayerDetailPage.prototype.editPlayer = function (player) {
        this.nav.push(EditPlayerForm, { id: player.Id });
    };
    PlayerDetailPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.searchParams.page += 1;
            _this.searchParams.start = _this.searchParams.page - 1;
            _this.partnerService.getPlayerTickets(_this.searchParams).then(function (response) {
                if (response.Status === AppSettings.REST_STATUS_ERROR) {
                    var msg_5;
                    _this.translateService.get(response.Message).subscribe(function (value) {
                        msg_5 = value;
                    });
                    var error = _this.toastCtrl.create({
                        message: msg_5,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    if (response.Status === AppSettings.REST_STATUS_UNAUTH) {
                        _this.nav.setRoot(LoginPage);
                    }
                    return false;
                }
                response.Data.forEach(function (element) {
                    _this.tickets.push(element);
                });
                resolve();
            });
        });
    };
    PlayerDetailPage = __decorate([
        Component({
            selector: 'page-player-detail',
            templateUrl: 'player-detail.html',
            providers: [PartnerService]
        }),
        __metadata("design:paramtypes", [AlertController,
            NavController,
            NavParams,
            Events,
            PartnerService,
            ModalController,
            ToastController,
            TranslateService])
    ], PlayerDetailPage);
    return PlayerDetailPage;
}());
export { PlayerDetailPage };
var PayinPayoutModal = /** @class */ (function () {
    function PayinPayoutModal(params, viewCtrl, navCtrl, partnerService, alertCtrl, toastCtrl, events, translateService, authService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.partnerService = partnerService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.translateService = translateService;
        this.authService = authService;
        this.playerId = this.params.get('playerId');
        this.type = this.params.get('type');
    }
    PayinPayoutModal.prototype.sendAmount = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (this.type === 'payin') {
                this.partnerService.playerPayIn({ playerId: this.playerId, amount: this.amount }).then(function (response) {
                    _this.createResponse(response);
                });
            }
            else if (this.type === 'payout') {
                this.partnerService.playerPayOut({ playerId: this.playerId, amount: this.amount }).then(function (response) {
                    _this.createResponse(response);
                });
            }
            else {
                return false;
            }
        }
    };
    PayinPayoutModal.prototype.createResponse = function (response) {
        var _this = this;
        if (response.Status == AppSettings.REST_STATUS_ERROR) {
            var error = this.toastCtrl.create({
                message: response.Message,
                cssClass: 'danger',
                duration: 3000,
                position: 'top'
            });
            error.present();
            return false;
        }
        var successMessage;
        this.translateService.get('app.general.message.success').subscribe(function (v) {
            successMessage = v;
        });
        var alert = this.alertCtrl.create({
            message: successMessage,
            buttons: [{
                    text: 'OK', handler: function () {
                        _this.dismiss();
                        _this.events.publish('player:reload');
                    }
                }]
        });
        alert.present();
    };
    PayinPayoutModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        ViewChild(PlayersPage),
        __metadata("design:type", Object)
    ], PayinPayoutModal.prototype, "playersPage", void 0);
    PayinPayoutModal = __decorate([
        Component({
            selector: 'payinout-modal',
            templateUrl: 'player-payinout.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController,
            NavController,
            PartnerService,
            AlertController,
            ToastController,
            Events,
            TranslateService,
            AuthenticationService])
    ], PayinPayoutModal);
    return PayinPayoutModal;
}());
export { PayinPayoutModal };
/* Login Histroy Detail */
var LoginHistoryModal = /** @class */ (function () {
    function LoginHistoryModal(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.item = params.get('selected');
    }
    LoginHistoryModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginHistoryModal = __decorate([
        Component({
            template: "\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>\n                    {{item.Id}}\n                </ion-title>\n                <ion-buttons start>\n                    <button ion-button (click)=\"dismiss()\">\n                        <span ion-text color=\"primary\" showWhen=\"ios\">{{'app.btn.cancel' | translate}}</span>\n                        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <ion-list>\n                <ion-item>\n                    {{'page.account.loginhistory.browser' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.BrowserFamily}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.device' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.DeviceFamily}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.os' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.OsFamily}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.ip' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.PlayerIpAddress}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.date' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.SessionStart}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.active' | translate}}\n                    <ion-note item-end class=\"color-dark\">\n                        <ion-icon name=\"checkmark-circle\" *ngIf=\"item.IsActive\" color=\"primary\"></ion-icon>\n                        <ion-icon name=\"close-circle\" *ngIf=\"!item.IsActive\" color=\"danger\"></ion-icon>\n                    </ion-note>\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    "
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController])
    ], LoginHistoryModal);
    return LoginHistoryModal;
}());
export { LoginHistoryModal };
/* Create New Player */
var NewPlayerForm = /** @class */ (function () {
    function NewPlayerForm(partnerService, nav, navParams, loadingCtrl, toastCtrl, translateService) {
        this.partnerService = partnerService;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.player = {
            type: 'NEW',
            name: '',
            surname: '',
            username: ''
        };
        this.submitted = false;
    }
    NewPlayerForm.prototype.savePlayer = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.partnerService.savePlayer(this.player).then(function (result) {
                loading_1.dismiss();
                if (result.Status == AppSettings.REST_STATUS_ERROR) {
                    var error = _this.toastCtrl.create({
                        message: result.Message,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    return false;
                }
                var successMessage;
                _this.translateService.get('app.general.message.success').subscribe(function (v) {
                    successMessage = v;
                });
                var succes = _this.toastCtrl.create({ message: successMessage, duration: 3000 });
                succes.present();
                _this.nav.setRoot(PlayersPage);
            });
        }
    };
    NewPlayerForm.prototype.generateUsername = function (length) {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.player.username = 'P_' + text;
        this.player.name = 'N_' + text;
        this.player.surname = 'S_' + text;
    };
    NewPlayerForm = __decorate([
        Component({
            templateUrl: 'add.html'
        }),
        __metadata("design:paramtypes", [PartnerService,
            NavController,
            NavParams,
            LoadingController,
            ToastController,
            TranslateService])
    ], NewPlayerForm);
    return NewPlayerForm;
}());
export { NewPlayerForm };
/* Edit Player */
var EditPlayerForm = /** @class */ (function () {
    function EditPlayerForm(partnerService, nav, navParams, loadingCtrl, toastCtrl, translateService) {
        this.partnerService = partnerService;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.player = {
            name: null,
            surname: null,
            active: true,
            type: 'EDIT'
        };
        this.submitted = false;
        this.playerId = navParams.get('id');
        this.getUser();
    }
    EditPlayerForm.prototype.getUser = function () {
        var _this = this;
        this.partnerService.getPartnerPlayer(this.playerId).then(function (response) {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                var msg_6;
                _this.translateService.get(response.Message).subscribe(function (value) {
                    msg_6 = value;
                });
                var error = _this.toastCtrl.create({ message: msg_6, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.player.name = response.Name;
            _this.player.surname = response.Surname;
            _this.player.active = response.IsActive;
        });
    };
    EditPlayerForm.prototype.savePlayer = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_2 = this.loadingCtrl.create();
            loading_2.present();
            this.partnerService.saveEditPlayer(this.player).then(function (result) {
                loading_2.dismiss();
                if (result.Status == AppSettings.REST_STATUS_ERROR) {
                    var error = _this.toastCtrl.create({
                        message: result.Message,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    return false;
                }
                var successMessage;
                _this.translateService.get('app.general.message.success').subscribe(function (v) {
                    successMessage = v;
                });
                var succes = _this.toastCtrl.create({ message: successMessage, duration: 3000 });
                succes.present();
                _this.nav.push(PlayerDetailPage, { id: _this.playerId });
            });
        }
    };
    EditPlayerForm = __decorate([
        Component({
            templateUrl: 'edit.html'
        }),
        __metadata("design:paramtypes", [PartnerService,
            NavController,
            NavParams,
            LoadingController,
            ToastController,
            TranslateService])
    ], EditPlayerForm);
    return EditPlayerForm;
}());
export { EditPlayerForm };
/* Change Password */
var ChangePlayerPasswordPage = /** @class */ (function () {
    function ChangePlayerPasswordPage(params, viewCtrl, authService, toastCtrl, alertCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.playerId = this.params.get('playerId');
        console.log(this.playerId);
    }
    ChangePlayerPasswordPage.prototype.changePassword = function (newpass) {
        var _this = this;
        this.authService.changePlayerPassword(this.playerId, newpass).then(function (response) {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                var error = _this.toastCtrl.create({
                    message: response.Message,
                    cssClass: 'danger',
                    duration: 3000,
                    position: 'top'
                });
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
    ChangePlayerPasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChangePlayerPasswordPage = __decorate([
        Component({
            templateUrl: 'change_password.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController,
            AuthenticationService,
            ToastController,
            AlertController])
    ], ChangePlayerPasswordPage);
    return ChangePlayerPasswordPage;
}());
export { ChangePlayerPasswordPage };
//# sourceMappingURL=players.js.map