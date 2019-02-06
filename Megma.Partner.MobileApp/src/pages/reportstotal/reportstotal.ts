import { Component } from '@angular/core';

import {
    AlertController,
    NavController,
    ToastController,
    LoadingController,
    ModalController,
    NavParams,
    ViewController
} from 'ionic-angular';
import { ReportsService } from "../../providers/reports-service";

import * as moment from 'moment';
import { AppSettings } from "../../app/app.config";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-reportstotal',
    templateUrl: './reportstotal.html'
})
/** reportstotal component*/
export class ReportstotalComponent {
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
        let today = moment().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');

        if (moment().isoWeekday() === 1) {
            firstDay = moment().isoWeekday(-5).format('YYYY-MM-DD');
            today = moment().add(1, 'days').format('YYYY-MM-DD');
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
        this.partnerService.getPlayerTotalHoldReports(this.reportFilter).then(response => {
            loading.dismiss();
            if (response.Status === AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(v => {
                    msg = v
                });
                let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            this.nodes = response.Data;
            console.log(this.nodes);
        });
    }
        
}