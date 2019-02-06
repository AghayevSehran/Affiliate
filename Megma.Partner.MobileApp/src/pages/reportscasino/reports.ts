import {Component} from '@angular/core';

import {
    AlertController,
    NavController,
    ToastController,
    LoadingController,
    ModalController,
    NavParams,
    ViewController
} from 'ionic-angular';
import {ReportsService} from "../../providers/reports-service";

import * as moment from 'moment';
import {AppSettings} from "../../app/app.config";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'page-report-casino',
    templateUrl: 'reports.html'
})
export class CasinoReportsPage {


    reportFilter: any;
    nodes: any;
    searchParams: any;

    constructor(public partnerService: ReportsService,
                public navCtrl: NavController,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                public translateService: TranslateService) {

        let firstDay = moment().isoWeekday(2).format('YYYY-MM-DD');
        let today   = moment().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
            
        if(moment().isoWeekday() === 1){
            firstDay = moment().isoWeekday(-5).format('YYYY-MM-DD');
            today   = moment().add(1, 'days').format('YYYY-MM-DD');
        }

        this.reportFilter = {
            startDate: firstDay,
            endDate: today
        }

        this.getReports();
    }

    getReports() {
        let loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getCasinoReports(this.reportFilter).then(response => {
            loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(v => {
                    msg = v
                });
                let error = this.toastCtrl.create({message: msg, cssClass: 'danger', duration: 3000, position: 'top'});
                error.present();
                return false;
            }
            this.nodes = response.Data;

        });
    }


    presentFilter() {
        let modal = this.modalCtrl.create(ReportCasinoFilterPage, this.reportFilter);
        modal.present();

        modal.onWillDismiss((data: Filter) => {
            if (data) {
                this.reportFilter = data;
                this.getReports();
            }
        });

    }
}


export interface Filter {
    startDate: Date,
    endDate: Date,
    onlyActive: boolean
};


/* Filter Settings */
@Component({
    selector: 'page-reportcasino-filter',
    templateUrl: 'reports_filter.html'
})
export class ReportCasinoFilterPage {
    filterSettings: any = [];

    constructor(public navParams: NavParams,
                public viewCtrl: ViewController) {
        let filter: Filter = {
            startDate: (this.navParams.get('startDate') ? this.navParams.get('startDate') : ''),
            endDate: (this.navParams.get('endDate') ? this.navParams.get('endDate') : ''),
            onlyActive: (this.navParams.get('onlyActive') ? this.navParams.get('onlyActive') : ''),
        };
        this.filterSettings = filter;
    }

    applyFilters() {
        this.dismiss(this.filterSettings);
    }

    dismiss(data?: any) {
        this.viewCtrl.dismiss(data);
    }
}
