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
import { AppSettings } from "../../app/app.config";
import * as moment from 'moment';
import { TranslateService } from "@ngx-translate/core";
var GeneralReportsPage = /** @class */ (function () {
    function GeneralReportsPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
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
            endDate: today,
            OnlyActive: false
        };
        this.getReports();
    }
    GeneralReportsPage.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getGeneralReports(this.reportFilter).then(function (response) {
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
    GeneralReportsPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(GeneralReportFilterPage, this.reportFilter);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.reportFilter = data;
                _this.getReports();
            }
        });
    };
    GeneralReportsPage = __decorate([
        Component({
            selector: 'page-report-general',
            templateUrl: 'reports.html'
        }),
        __metadata("design:paramtypes", [ReportsService,
            NavController,
            AlertController,
            ToastController,
            LoadingController,
            ModalController,
            TranslateService])
    ], GeneralReportsPage);
    return GeneralReportsPage;
}());
export { GeneralReportsPage };
;
/* Filter Settings */
var GeneralReportFilterPage = /** @class */ (function () {
    function GeneralReportFilterPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.filterSettings = [];
        var filter = {
            startDate: (this.navParams.get('startDate') ? this.navParams.get('startDate') : ''),
            endDate: (this.navParams.get('endDate') ? this.navParams.get('endDate') : ''),
            OnlyActive: (this.navParams.get('active') ? this.navParams.get('active') : ''),
        };
        this.filterSettings = filter;
    }
    GeneralReportFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    GeneralReportFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    GeneralReportFilterPage = __decorate([
        Component({
            selector: 'page-report-filter',
            templateUrl: 'reports_filter.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController])
    ], GeneralReportFilterPage);
    return GeneralReportFilterPage;
}());
export { GeneralReportFilterPage };
//# sourceMappingURL=reports.js.map