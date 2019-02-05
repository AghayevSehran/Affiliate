import { Component } from '@angular/core';
import { TicketService } from "../../providers/tickets-service";
import { AppSettings } from "../../app/app.config";
import { ToastController, NavController, NavParams, ModalController, ViewController, AlertController } from "ionic-angular";

import * as moment from 'moment';
import { TranslateService } from "@ngx-translate/core";
import { LoginPage } from "../login/login";
import { AuthenticationService } from "../../providers/user-data";

import { Observable } from 'Rxjs/rx';
import { Subscription } from "rxjs/Subscription";


export interface Filter {
  ticketId: string,
  startDate: Date,
  endDate: Date,
  username: string,
  minStake: string,
  maxStake: string,
  minPayout: string,
  maxPayout: string,
  status: boolean,
  live: boolean,
  direct: boolean,
  start: number,
  limit: number
};


@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {
  timeoutId: any;
  tickets: any;
  searchParams: any = {
    startDate: null,
    endDate: null,
    page: 1,
    start: 0,
    limit: 50
  };
  observableVar: Subscription;
  TicketsDetailPage: TicketsDetailPage;

  constructor(
    public ticketService: TicketService,
    public nav: NavController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public translateService: TranslateService
  ) {

    // let today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    // let yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toJSON().slice(0, 10).replace(/-/g, '/');
    // this.searchParams.startDate = yesterday;
    // this.searchParams.endDate = today;
    this.searchParams.startDate = moment().add(-1, 'days').format('YYYY-MM-DD');
    this.searchParams.endDate = moment().add(1, 'days').format('YYYY-MM-DD');
    this.getTickets();

    this.observableVar = Observable.interval(30000).subscribe(() => {
      this.getTickets();
    });


  }

  ionViewDidLeave() {
    this.observableVar.unsubscribe();
  }

  getTickets() {
    delete this.searchParams.component;
    delete this.searchParams.opts;

    this.ticketService.getAll(this.searchParams).then(response => {
      if (response.Status === AppSettings.REST_STATUS_ERROR) {
        let msg: string;
        this.translateService.get(response.Message).subscribe(value => { msg = value });
        let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
        error.present();
        return false;
      }
      this.tickets = response.Data;
    });
  }

  doRefresh(refresher) {
    this.getTickets();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.searchParams.page += 1;
      this.searchParams.start = ((this.searchParams.page - 1) * this.searchParams.limit);
      this.ticketService.getAll(this.searchParams).then(response => {

        if (response.Status === AppSettings.REST_STATUS_ERROR) {
          let msg: string;
          this.translateService.get(response.Message).subscribe(value => { msg = value });
          let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
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

    })
  }

  presentFilter() {
    let modal = this.modalCtrl.create(TicketFilterPage, this.searchParams);
    modal.present();

    modal.onWillDismiss((data: any) => {
      if (data) {
        this.searchParams.page = 1;
        this.searchParams.start = 0;
        this.searchParams.startDate = data.startDate;
        this.searchParams.endDate = data.endDate;
        if (data.ticketId) this.searchParams.ticketId = data.ticketId;
        if (data.username) this.searchParams.username = data.username;
        if (data.minStake) this.searchParams.minStake = data.minStake;
        if (data.maxStake) this.searchParams.maxStake = data.maxStake;
        if (data.minPayout) this.searchParams.minPayout = data.minPayout;
        if (data.maxPayout) this.searchParams.maxPayout = data.maxPayout;
        if (data.live) this.searchParams.live = data.live;
        if (data.status) this.searchParams.status = data.status;
        if (data.direct) this.searchParams.direct = data.direct;

        this.getTickets();
      }
    });

  }

  goDetail(pid, id) {
    this.nav.push(TicketsDetailPage, { playerid: pid, id: id });
  }

}

@Component({
  selector: 'page-ticketdetail',
  templateUrl: 'ticket_detail.html'
})
export class TicketsDetailPage {
  playerId: null;
  ticketId: null;
  ticket: any;
  canCancelTicket: boolean = false;
  canViewCountry: boolean = false;

  constructor(
    public ticketService: TicketService,
    public authService: AuthenticationService,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {


    this.playerId = this.navParams.get('playerid');
    this.ticketId = this.navParams.get('id');
    ticketService.getTicket(this.playerId, this.ticketId).then(response => {
      this.ticket = response.Data;
    });

    this.authService.getUserCanCountryView().then(response => {
      this.canViewCountry = response;
    });

    this.authService.getUserTicketCancelPermission().then(response => {
      this.canCancelTicket = response;
    });


  }

  cancelTicket(ticketid) {
    let approveTitle: any;
    let approveDesc: any;
    let cancelBtn: string;
    let approveBtn: string;

    this.translateService.get('app.ticket.cancel.title').subscribe(value => { approveTitle = value });
    this.translateService.get('app.ticket.cancel.desc').subscribe(value => { approveDesc = value });
    this.translateService.get('app.btn.cancel').subscribe(value => { cancelBtn = value });
    this.translateService.get('app.btn.approve').subscribe(value => { approveBtn = value });

    let confirm = this.alertCtrl.create({
      title: approveTitle,
      message: approveDesc,
      buttons: [
        {
          text: cancelBtn,
          handler: () => { }
        },
        {
          text: approveBtn,
          handler: () => {
            this.ticketService.cancelTicket(ticketid).then(response => {
              if (response.Status === AppSettings.REST_STATUS_ERROR) {
                let msg: string;
                this.translateService.get(response.Message).subscribe(value => { msg = value });
                let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
              }

              let success = this.toastCtrl.create({ message: response.Data.Data, cssClass: 'success', duration: 3000, position: 'top' });
              success.present();
            });
          }
        }
      ]
    });
    confirm.present();
  }
}



/* Filter Settings */
@Component({
  selector: 'page-ticket-filter',
  templateUrl: 'ticket_filter.html'
})
export class TicketFilterPage {
  filterSettings: any = [];
  filterModel: Filter;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {


    let filter: Filter = {
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

  applyFilters() {
    this.dismiss(this.filterSettings);
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}