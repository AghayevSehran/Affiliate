import { Component, ViewChild, OnInit } from '@angular/core';
import { PartnerService } from "../../providers/partner-service";
import { LoadingController, ToastController, NavController, NavParams, ViewController, ModalController, AlertController, Content } from "ionic-angular";
import { ITreeOptions } from "angular-tree-component/dist/defs/api";
import { TREE_ACTIONS } from "angular-tree-component/dist/models/tree-options.model";
import { NgForm } from "@angular/forms/src/forms";
import { AppSettings } from "../../app/app.config";
import { TranslateService } from "@ngx-translate/core";
import { AuthenticationService } from "../../providers/user-data";

@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html'
})
export class PartnersPage {
  @ViewChild(Content) content: Content;
  nodes = [];
  canCreatePartner: boolean;
  EditPartnerForm = EditPartnerForm;
  NewPartnerForm = NewPartnerForm;

  constructor(public partnerService: PartnerService, public loadingCtrl: LoadingController, public modalCtrl: ModalController, public authService:AuthenticationService) {
    let loading = this.loadingCtrl.create();
    loading.present();
    partnerService.getAll().then((response) => {
      loading.dismiss();
      this.nodes = response;
      // this.content.resize();
    });

    this.authService.getCanCreatePartner().then(response => {
      this.canCreatePartner = response;
    });

  }


  ionViewWillEnter() {
    this.partnerService.getAll().then((response) => {
     
      this.nodes = response;
      // this.content.resize();
    });
  }

  onEvent = ($event) => {
    if ($event.node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED($event.tree, $event.node, $event);
  }

  options: ITreeOptions = {
    displayField: 'nodeName',
    isExpandedField: 'expanded',
    idField: 'uuid',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      }
    }
  }

  productPermits(partnerId) {
    let modal = this.modalCtrl.create(PartnerProductPermits, { partnerId: partnerId });
    modal.present();
  }


  changePassword(id) {
    let modal = this.modalCtrl.create(ChangePartnerPasswordPage, { id: id });
    modal.present();
  }
}


/* Create New Partner */
@Component({
  templateUrl: 'add.html'
})
export class NewPartnerForm {
  partner = {};
  submitted = false;
  constructor(public partnerService: PartnerService, public nav: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

  savePartner(form: NgForm) {
    this.submitted = true;
    if (form.valid) {

      let loading = this.loadingCtrl.create();
      loading.present();
      this.partnerService.savePartner(this.partner).then(result => {
        loading.dismiss();
        if (result.Status == AppSettings.REST_STATUS_ERROR) {
          let error = this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
          error.present();
          return false;
        }
        let succes = this.toastCtrl.create({ message: result.Message, duration: 3000 });
        succes.present();
        this.nav.setRoot(PartnersPage);
      });
    }
  }
}


/* Edit Partner */
@Component({
  templateUrl: 'edit.html'
})
export class EditPartnerForm {
  partnerId = null;
  partner = {};
  submitted = false;
  credit = 0;
  balance = 0;
  constructor(public partnerService: PartnerService, public nav: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.partnerId = this.navParams.get('id');
    this.balance = this.navParams.get('balance');
    partnerService.get(this.partnerId).then(response => {
      this.partner = response;
    })
  }

  savePartner(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      let loading = this.loadingCtrl.create();
      loading.present();
      this.partnerService.updatePartner(this.partner).then(result => {
        loading.dismiss();
        if (result.Status == AppSettings.REST_STATUS_ERROR) {
          let error = this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
          error.present();
          return false;
        }
        let succes = this.toastCtrl.create({ message: result.Message, duration: 3000 });
        succes.present();
        this.nav.setRoot(PartnersPage);
      });
    }
  }

  depositCredit() {

    if(this.credit) {
      let loading = this.loadingCtrl.create();
      loading.present();
      this.partnerService.depositCredit(this.partnerId, this.credit).then((result) =>  {
        loading.dismiss();
        if (result.Status == AppSettings.REST_STATUS_ERROR) {
          let error = this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
          error.present();
          return false;
        }
        let succes = this.toastCtrl.create({ message: result.Data, duration: 3000 });
        this.balance = Number(this.balance) + Number(this.credit);
        succes.present();
      })
    }

  }

  withdrawCredit() {
    if(this.credit) {
      let loading = this.loadingCtrl.create();
      loading.present();
      this.partnerService.withdrawCredit(this.partnerId, this.credit).then((result) =>  {
        loading.dismiss();
        if (result.Status == AppSettings.REST_STATUS_ERROR) {
          let error = this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
          error.present();
          return false;
        }
        let succes = this.toastCtrl.create({ message: result.Data, duration: 3000 });
        this.balance = Number(this.balance) - Number(this.credit);
        succes.present();
      })
    }
  }



}

/* Product Permitions */
@Component({
  templateUrl: 'partner_product_permits.html'
})
export class PartnerProductPermits {
  partnerId: number;
  productPermits: any;
  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public partnerService: PartnerService
  ) {
    this.partnerId = params.get('partnerId');
    this.partnerService.getProductPermitions(this.partnerId).then(response => {
      this.productPermits = response;
    });
  }

  savePermition(product) {
    this.partnerService.saveProductPermits(product, this.partnerId).then(response => {
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



/* Change Password */
@Component({
  templateUrl: 'change_password.html'
})
export class ChangePartnerPasswordPage {
  partnerId: number;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthenticationService,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public translateService: TranslateService,
  ) {
    this.partnerId = this.params.get('id');
  }

  changePassword(partnerId: number, newpass: string) {

    console.log(partnerId);

    this.authService.changePartnerPassword(partnerId, newpass).then(response => {
      if (response.Status == AppSettings.REST_STATUS_ERROR) {
        let msg: string;
        this.translateService.get(response.Message).subscribe(value => { msg = value });
        let error = this.toastCtrl.create({ message: msg, cssClass: 'danger', duration: 3000, position: 'top' });
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