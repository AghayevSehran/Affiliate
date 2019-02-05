import {Component} from '@angular/core';
import {ReportsService} from "../../providers/reports-service";
import {
    NavController,
    AlertController,
    ToastController,
    LoadingController,
    ModalController,
    ViewController,
    NavParams
} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";
import {Storage} from '@ionic/storage';

import * as moment from 'moment';
import {AppSettings} from "../../app/app.config";

@Component({
    selector: 'page-player-reports',
    templateUrl: 'reports.html'
})
export class ReportsPlayerPage {
    partner: any;
    reportFilter: any;
    glists: any;
    lists: any;
    casinolist: any;
    livecasinolist: any;
    tombalalist: any;
    searchParams: any;
    userSegment: string = 'generalreport';


    constructor(public partnerService: ReportsService,
                public navCtrl: NavController,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                public translateService: TranslateService,
                public storage: Storage) {

        let startDate = moment().isoWeekday(2).format('YYYY-MM-DD');
        let endDate   = moment().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');

        if(moment().isoWeekday() === 1){
            startDate = moment().isoWeekday(-5).format('YYYY-MM-DD');
            endDate   = moment().add(1, 'days').format('YYYY-MM-DD');
        }
        

        storage.get('user').then((user) => {
            this.partner = user;
            this.reportFilter = {
                partnerId: this.partner.Id,
                startDate: startDate,
                endDate: endDate
            }
            this.getGeneralReports();
        });
    }


    getGeneralReports() {
        let loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getGeneralPlayerReports(this.reportFilter).then(response => {
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
            this.glists = response.Data;
        });
    }


    getReports() {
        let loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getPlayerHoldReports(this.reportFilter).then(response => {
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
            this.lists = response.Data;
        });
    }

    getCasinoReports() {
        // let loading = this.loadingCtrl.create();
        // loading.present();
        this.partnerService.getPlayerCasinoReports(this.reportFilter).then(response => {
            //loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(v => {
                    msg = v
                });
                let error = this.toastCtrl.create({message: msg, cssClass: 'danger', duration: 3000, position: 'top'});
                error.present();
                return false;
            }
            this.casinolist = response.Data;
        });
    }


    getLiveCasinoReports() {
        // let loading = this.loadingCtrl.create();
        // loading.present();
        this.partnerService.getPlayerLiveCasinoReports(this.reportFilter).then(response => {
            //loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(v => {
                    msg = v
                });
                let error = this.toastCtrl.create({message: msg, cssClass: 'danger', duration: 3000, position: 'top'});
                error.present();
                return false;
            }
            this.livecasinolist = response.Data;
        });
    }


    getTombalaReports() {
        // let loading = this.loadingCtrl.create();
        // loading.present();
        this.partnerService.getPlayerTombalaReports(this.reportFilter).then(response => {
            //loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(v => {
                    msg = v
                });
                let error = this.toastCtrl.create({message: msg, cssClass: 'danger', duration: 3000, position: 'top'});
                error.present();
                return false;
            }
            this.tombalalist = response.Data;
        });
    }


    presentFilter() {
        let modal = this.modalCtrl.create(ReportPlayerFilterPage, this.reportFilter);
        modal.present();

        modal.onWillDismiss((data: Filter) => {
            if (data) {
                this.reportFilter = data;
                this.getGeneralReports();
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
    selector: 'page-reportplayer-filter',
    templateUrl: 'reports_filter.html'
})
export class ReportPlayerFilterPage {
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

