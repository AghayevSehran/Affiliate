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
import { ReportsService } from "../../providers/reports-service";
import { NavController, AlertController, ToastController, LoadingController, ModalController, ViewController, NavParams } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { AppSettings } from "../../app/app.config";
var ReportsPlayerPage = /** @class */ (function () {
    function ReportsPlayerPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService, storage) {
        var _this = this;
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.storage = storage;
        this.userSegment = 'generalreport';
        var startDate = moment().isoWeekday(2).format('YYYY-MM-DD');
        var endDate = moment().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (moment().isoWeekday() === 1) {
            startDate = moment().isoWeekday(-5).format('YYYY-MM-DD');
            endDate = moment().add(1, 'days').format('YYYY-MM-DD');
        }
        storage.get('user').then(function (user) {
            _this.partner = user;
            _this.reportFilter = {
                partnerId: _this.partner.Id,
                startDate: startDate,
                endDate: endDate
            };
            _this.getGeneralReports();
        });
    }
    ReportsPlayerPage.prototype.getGeneralReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getGeneralPlayerReports(this.reportFilter).then(function (response) {
            loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                var msg_1;
                _this.translateService.get(response.Message).subscribe(function (v) {
                    msg_1 = v;
                });
                var error = _this.toastCtrl.create({ message: msg_1, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.glists = response.Data;
        });
    };
    ReportsPlayerPage.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getPlayerHoldReports(this.reportFilter).then(function (response) {
            loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                var msg_2;
                _this.translateService.get(response.Message).subscribe(function (v) {
                    msg_2 = v;
                });
                var error = _this.toastCtrl.create({ message: msg_2, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.lists = response.Data;
        });
    };
    ReportsPlayerPage.prototype.getCasinoReports = function () {
        var _this = this;
        // let loading = this.loadingCtrl.create();
        // loading.present();
        this.partnerService.getPlayerCasinoReports(this.reportFilter).then(function (response) {
            //loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                var msg_3;
                _this.translateService.get(response.Message).subscribe(function (v) {
                    msg_3 = v;
                });
                var error = _this.toastCtrl.create({ message: msg_3, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.casinolist = response.Data;
        });
    };
    ReportsPlayerPage.prototype.getLiveCasinoReports = function () {
        var _this = this;
        // let loading = this.loadingCtrl.create();
        // loading.present();
        this.partnerService.getPlayerLiveCasinoReports(this.reportFilter).then(function (response) {
            //loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                var msg_4;
                _this.translateService.get(response.Message).subscribe(function (v) {
                    msg_4 = v;
                });
                var error = _this.toastCtrl.create({ message: msg_4, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.livecasinolist = response.Data;
        });
    };
    ReportsPlayerPage.prototype.getTombalaReports = function () {
        var _this = this;
        // let loading = this.loadingCtrl.create();
        // loading.present();
        this.partnerService.getPlayerTombalaReports(this.reportFilter).then(function (response) {
            //loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                var msg_5;
                _this.translateService.get(response.Message).subscribe(function (v) {
                    msg_5 = v;
                });
                var error = _this.toastCtrl.create({ message: msg_5, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.tombalalist = response.Data;
        });
    };
    ReportsPlayerPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ReportPlayerFilterPage, this.reportFilter);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.reportFilter = data;
                _this.getGeneralReports();
            }
        });
    };
    ReportsPlayerPage = __decorate([
        Component({
            selector: 'page-player-reports',
            templateUrl: 'reports.html'
        }),
        __metadata("design:paramtypes", [ReportsService,
            NavController,
            AlertController,
            ToastController,
            LoadingController,
            ModalController,
            TranslateService,
            Storage])
    ], ReportsPlayerPage);
    return ReportsPlayerPage;
}());
export { ReportsPlayerPage };
;
/* Filter Settings */
var ReportPlayerFilterPage = /** @class */ (function () {
    function ReportPlayerFilterPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.filterSettings = [];
        var filter = {
            startDate: (this.navParams.get('startDate') ? this.navParams.get('startDate') : ''),
            endDate: (this.navParams.get('endDate') ? this.navParams.get('endDate') : ''),
            onlyActive: (this.navParams.get('onlyActive') ? this.navParams.get('onlyActive') : ''),
        };
        this.filterSettings = filter;
    }
    ReportPlayerFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    ReportPlayerFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ReportPlayerFilterPage = __decorate([
        Component({
            selector: 'page-reportplayer-filter',
            templateUrl: 'reports_filter.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController])
    ], ReportPlayerFilterPage);
    return ReportPlayerFilterPage;
}());
export { ReportPlayerFilterPage };
//# sourceMappingURL=reports.js.map