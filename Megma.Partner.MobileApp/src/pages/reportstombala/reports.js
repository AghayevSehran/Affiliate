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
import { AlertController, NavController, ToastController, LoadingController, ModalController, NavParams, ViewController } from 'ionic-angular';
import { ReportsService } from "../../providers/reports-service";
import * as moment from 'moment';
import { AppSettings } from "../../app/app.config";
import { TranslateService } from "@ngx-translate/core";
var TombalaReportsPage = /** @class */ (function () {
    function TombalaReportsPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        var firstDay = moment().isoWeekday(2).format('YYYY-MM-DD');
        var today = moment().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (moment().isoWeekday() === 1) {
            firstDay = moment().isoWeekday(-5).format('YYYY-MM-DD');
            today = moment().add(1, 'days').format('YYYY-MM-DD');
        }
        this.reportFilter = {
            startDate: firstDay,
            endDate: today
        };
        this.getReports();
    }
    TombalaReportsPage.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getTombalaReports(this.reportFilter).then(function (response) {
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
            _this.nodes = response.Data;
        });
    };
    TombalaReportsPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ReportTombalaFilterPage, this.reportFilter);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.reportFilter = data;
                _this.getReports();
            }
        });
    };
    TombalaReportsPage = __decorate([
        Component({
            selector: 'page-report-tombala',
            templateUrl: 'reports.html'
        }),
        __metadata("design:paramtypes", [ReportsService,
            NavController,
            AlertController,
            ToastController,
            LoadingController,
            ModalController,
            TranslateService])
    ], TombalaReportsPage);
    return TombalaReportsPage;
}());
export { TombalaReportsPage };
;
/* Filter Settings */
var ReportTombalaFilterPage = /** @class */ (function () {
    function ReportTombalaFilterPage(navParams, viewCtrl) {
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
    ReportTombalaFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    ReportTombalaFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ReportTombalaFilterPage = __decorate([
        Component({
            selector: 'page-reporttombala-filter',
            templateUrl: 'reports_filter.html'
        }),
        __metadata("design:paramtypes", [NavParams, ViewController])
    ], ReportTombalaFilterPage);
    return ReportTombalaFilterPage;
}());
export { ReportTombalaFilterPage };
//# sourceMappingURL=reports.js.map