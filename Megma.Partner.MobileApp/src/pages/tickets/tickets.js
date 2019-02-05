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
import { TicketService } from "../../providers/tickets-service";
import { AppSettings } from "../../app/app.config";
import { ToastController, NavController, NavParams, ModalController, ViewController, AlertController } from "ionic-angular";
import * as moment from 'moment';
import { TranslateService } from "@ngx-translate/core";
import { LoginPage } from "../login/login";
import { AuthenticationService } from "../../providers/user-data";
import { Observable } from 'Rxjs/rx';
;
var TicketsPage = /** @class */ (function () {
    function TicketsPage(ticketService, nav, toastCtrl, modalCtrl, translateService) {
        var _this = this;
        this.ticketService = ticketService;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.searchParams = {
            startDate: null,
            endDate: null,
            page: 1,
            start: 0,
            limit: 50
        };
        // let today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        // let yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toJSON().slice(0, 10).replace(/-/g, '/');
        // this.searchParams.startDate = yesterday;
        // this.searchParams.endDate = today;
        this.searchParams.startDate = moment().add(-1, 'days').format('YYYY-MM-DD');
        this.searchParams.endDate = moment().add(1, 'days').format('YYYY-MM-DD');
        this.getTickets();
        this.observableVar = Observable.interval(30000).subscribe(function () {
            _this.getTickets();
        });
    }
    TicketsPage.prototype.ionViewDidLeave = function () {
        this.observableVar.unsubscribe();
    };
    TicketsPage.prototype.getTickets = function () {
        var _this = this;
        delete this.searchParams.component;
        delete this.searchParams.opts;
        this.ticketService.getAll(this.searchParams).then(function (response) {
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                var msg_1;
                _this.translateService.get(response.Message).subscribe(function (value) { msg_1 = value; });
                var error = _this.toastCtrl.create({ message: msg_1, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.tickets = response.Data;
        });
    };
    TicketsPage.prototype.doRefresh = function (refresher) {
        this.getTickets();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 1000);
    };
    TicketsPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.searchParams.page += 1;
            _this.searchParams.start = ((_this.searchParams.page - 1) * _this.searchParams.limit);
            _this.ticketService.getAll(_this.searchParams).then(function (response) {
                if (response.Status === AppSettings.REST_STATUS_ERROR) {
                    var msg_2;
                    _this.translateService.get(response.Message).subscribe(function (value) { msg_2 = value; });
                    var error = _this.toastCtrl.create({ message: msg_2, cssClass: 'danger', duration: 3000, position: 'top' });
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
    TicketsPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(TicketFilterPage, this.searchParams);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.searchParams.page = 1;
                _this.searchParams.start = 0;
                _this.searchParams.startDate = data.startDate;
                _this.searchParams.endDate = data.endDate;
                if (data.ticketId)
                    _this.searchParams.ticketId = data.ticketId;
                if (data.username)
                    _this.searchParams.username = data.username;
                if (data.minStake)
                    _this.searchParams.minStake = data.minStake;
                if (data.maxStake)
                    _this.searchParams.maxStake = data.maxStake;
                if (data.minPayout)
                    _this.searchParams.minPayout = data.minPayout;
                if (data.maxPayout)
                    _this.searchParams.maxPayout = data.maxPayout;
                if (data.live)
                    _this.searchParams.live = data.live;
                if (data.status)
                    _this.searchParams.status = data.status;
                if (data.direct)
                    _this.searchParams.direct = data.direct;
                _this.getTickets();
            }
        });
    };
    TicketsPage.prototype.goDetail = function (pid, id) {
        this.nav.push(TicketsDetailPage, { playerid: pid, id: id });
    };
    TicketsPage = __decorate([
        Component({
            selector: 'page-tickets',
            templateUrl: 'tickets.html'
        }),
        __metadata("design:paramtypes", [TicketService,
            NavController,
            ToastController,
            ModalController,
            TranslateService])
    ], TicketsPage);
    return TicketsPage;
}());
export { TicketsPage };
var TicketsDetailPage = /** @class */ (function () {
    function TicketsDetailPage(ticketService, authService, navParams, alertCtrl, toastCtrl, translateService) {
        var _this = this;
        this.ticketService = ticketService;
        this.authService = authService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.canCancelTicket = false;
        this.canViewCountry = false;
        this.playerId = this.navParams.get('playerid');
        this.ticketId = this.navParams.get('id');
        ticketService.getTicket(this.playerId, this.ticketId).then(function (response) {
            _this.ticket = response.Data;
        });
        this.authService.getUserCanCountryView().then(function (response) {
            _this.canViewCountry = response;
        });
        this.authService.getUserTicketCancelPermission().then(function (response) {
            _this.canCancelTicket = response;
        });
    }
    TicketsDetailPage.prototype.cancelTicket = function (ticketid) {
        var _this = this;
        var approveTitle;
        var approveDesc;
        var cancelBtn;
        var approveBtn;
        this.translateService.get('app.ticket.cancel.title').subscribe(function (value) { approveTitle = value; });
        this.translateService.get('app.ticket.cancel.desc').subscribe(function (value) { approveDesc = value; });
        this.translateService.get('app.btn.cancel').subscribe(function (value) { cancelBtn = value; });
        this.translateService.get('app.btn.approve').subscribe(function (value) { approveBtn = value; });
        var confirm = this.alertCtrl.create({
            title: approveTitle,
            message: approveDesc,
            buttons: [
                {
                    text: cancelBtn,
                    handler: function () { }
                },
                {
                    text: approveBtn,
                    handler: function () {
                        _this.ticketService.cancelTicket(ticketid).then(function (response) {
                            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                                var msg_3;
                                _this.translateService.get(response.Message).subscribe(function (value) { msg_3 = value; });
                                var error = _this.toastCtrl.create({ message: msg_3, cssClass: 'danger', duration: 3000, position: 'top' });
                                error.present();
                                return false;
                            }
                            var success = _this.toastCtrl.create({ message: response.Data.Data, cssClass: 'success', duration: 3000, position: 'top' });
                            success.present();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    TicketsDetailPage = __decorate([
        Component({
            selector: 'page-ticketdetail',
            templateUrl: 'ticket_detail.html'
        }),
        __metadata("design:paramtypes", [TicketService,
            AuthenticationService,
            NavParams,
            AlertController,
            ToastController,
            TranslateService])
    ], TicketsDetailPage);
    return TicketsDetailPage;
}());
export { TicketsDetailPage };
/* Filter Settings */
var TicketFilterPage = /** @class */ (function () {
    function TicketFilterPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.filterSettings = [];
        var filter = {
            ticketId: (this.navParams.get('ticketId') ? this.navParams.get('ticketId') : ''),
            startDate: (this.navParams.get('startDate') ? this.navParams.get('startDate') : ''),
            endDate: (this.navParams.get('endDate') ? this.navParams.get('endDate') : ''),
            username: (this.navParams.get('username') ? this.navParams.get('username') : ''),
            minStake: (this.navParams.get('minStake') ? this.navParams.get('minStake') : ''),
            maxStake: (this.navParams.get('maxStake') ? this.navParams.get('maxStake') : ''),
            minPayout: (this.navParams.get('minPayout') ? this.navParams.get('minPayout') : ''),
            maxPayout: (this.navParams.get('maxPayout') ? this.navParams.get('maxPayout') : ''),
            status: (this.navParams.get('status') ? this.navParams.get('status') : ''),
            live: (this.navParams.get('live') ? this.navParams.get('live') : ''),
            direct: (this.navParams.get('direct') ? this.navParams.get('direct') : ''),
            start: (this.navParams.get('start') ? this.navParams.get('start') : ''),
            limit: (this.navParams.get('limit') ? this.navParams.get('limit') : '')
        };
        this.filterSettings = filter;
        this.filterSettings.startDate = moment(filter.startDate).format('YYYY-MM-DD');
        this.filterSettings.endDate = moment(filter.endDate).format('YYYY-MM-DD');
    }
    TicketFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    TicketFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    TicketFilterPage = __decorate([
        Component({
            selector: 'page-ticket-filter',
            templateUrl: 'ticket_filter.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController])
    ], TicketFilterPage);
    return TicketFilterPage;
}());
export { TicketFilterPage };
//# sourceMappingURL=tickets.js.map