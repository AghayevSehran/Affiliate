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
import { PartnerService } from "../../providers/partner-service";
import { LoadingController, ToastController, NavController, NavParams, ViewController, ModalController, AlertController, Content } from "ionic-angular";
import { TREE_ACTIONS } from "angular-tree-component/dist/models/tree-options.model";
import { AppSettings } from "../../app/app.config";
import { TranslateService } from "@ngx-translate/core";
import { AuthenticationService } from "../../providers/user-data";
var PartnersPage = /** @class */ (function () {
    function PartnersPage(partnerService, loadingCtrl, modalCtrl, authService) {
        var _this = this;
        this.partnerService = partnerService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.nodes = [];
        this.EditPartnerForm = EditPartnerForm;
        this.NewPartnerForm = NewPartnerForm;
        this.onEvent = function ($event) {
            if ($event.node.hasChildren)
                TREE_ACTIONS.TOGGLE_EXPANDED($event.tree, $event.node, $event);
        };
        this.options = {
            displayField: 'nodeName',
            isExpandedField: 'expanded',
            idField: 'uuid',
            actionMapping: {
                mouse: {
                    dblClick: function (tree, node, $event) {
                        if (node.hasChildren)
                            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
                    }
                }
            }
        };
        var loading = this.loadingCtrl.create();
        loading.present();
        partnerService.getAll().then(function (response) {
            loading.dismiss();
            _this.nodes = response;
            // this.content.resize();
        });
        this.authService.getCanCreatePartner().then(function (response) {
            _this.canCreatePartner = response;
        });
    }
    PartnersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.partnerService.getAll().then(function (response) {
            _this.nodes = response;
            // this.content.resize();
        });
    };
    PartnersPage.prototype.productPermits = function (partnerId) {
        var modal = this.modalCtrl.create(PartnerProductPermits, { partnerId: partnerId });
        modal.present();
    };
    PartnersPage.prototype.changePassword = function (id) {
        var modal = this.modalCtrl.create(ChangePartnerPasswordPage, { id: id });
        modal.present();
    };
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], PartnersPage.prototype, "content", void 0);
    PartnersPage = __decorate([
        Component({
            selector: 'page-partners',
            templateUrl: 'partners.html'
        }),
        __metadata("design:paramtypes", [PartnerService, LoadingController, ModalController, AuthenticationService])
    ], PartnersPage);
    return PartnersPage;
}());
export { PartnersPage };
/* Create New Partner */
var NewPartnerForm = /** @class */ (function () {
    function NewPartnerForm(partnerService, nav, navParams, loadingCtrl, toastCtrl) {
        this.partnerService = partnerService;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.partner = {};
        this.submitted = false;
    }
    NewPartnerForm.prototype.savePartner = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.partnerService.savePartner(this.partner).then(function (result) {
                loading_1.dismiss();
                if (result.Status == AppSettings.REST_STATUS_ERROR) {
                    var error = _this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                    error.present();
                    return false;
                }
                var succes = _this.toastCtrl.create({ message: result.Message, duration: 3000 });
                succes.present();
                _this.nav.setRoot(PartnersPage);
            });
        }
    };
    NewPartnerForm = __decorate([
        Component({
            templateUrl: 'add.html'
        }),
        __metadata("design:paramtypes", [PartnerService, NavController, NavParams, LoadingController, ToastController])
    ], NewPartnerForm);
    return NewPartnerForm;
}());
export { NewPartnerForm };
/* Edit Partner */
var EditPartnerForm = /** @class */ (function () {
    function EditPartnerForm(partnerService, nav, navParams, loadingCtrl, toastCtrl) {
        var _this = this;
        this.partnerService = partnerService;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.partnerId = null;
        this.partner = {};
        this.submitted = false;
        this.credit = 0;
        this.balance = 0;
        this.partnerId = this.navParams.get('id');
        this.balance = this.navParams.get('balance');
        partnerService.get(this.partnerId).then(function (response) {
            _this.partner = response;
        });
    }
    EditPartnerForm.prototype.savePartner = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_2 = this.loadingCtrl.create();
            loading_2.present();
            this.partnerService.updatePartner(this.partner).then(function (result) {
                loading_2.dismiss();
                if (result.Status == AppSettings.REST_STATUS_ERROR) {
                    var error = _this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                    error.present();
                    return false;
                }
                var succes = _this.toastCtrl.create({ message: result.Message, duration: 3000 });
                succes.present();
                _this.nav.setRoot(PartnersPage);
            });
        }
    };
    EditPartnerForm.prototype.depositCredit = function () {
        var _this = this;
        if (this.credit) {
            var loading_3 = this.loadingCtrl.create();
            loading_3.present();
            this.partnerService.depositCredit(this.partnerId, this.credit).then(function (result) {
                loading_3.dismiss();
                if (result.Status == AppSettings.REST_STATUS_ERROR) {
                    var error = _this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                    error.present();
                    return false;
                }
                var succes = _this.toastCtrl.create({ message: result.Data, duration: 3000 });
                _this.balance = Number(_this.balance) + Number(_this.credit);
                succes.present();
            });
        }
    };
    EditPartnerForm.prototype.withdrawCredit = function () {
        var _this = this;
        if (this.credit) {
            var loading_4 = this.loadingCtrl.create();
            loading_4.present();
            this.partnerService.withdrawCredit(this.partnerId, this.credit).then(function (result) {
                loading_4.dismiss();
                if (result.Status == AppSettings.REST_STATUS_ERROR) {
                    var error = _this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                    error.present();
                    return false;
                }
                var succes = _this.toastCtrl.create({ message: result.Data, duration: 3000 });
                _this.balance = Number(_this.balance) - Number(_this.credit);
                succes.present();
            });
        }
    };
    EditPartnerForm = __decorate([
        Component({
            templateUrl: 'edit.html'
        }),
        __metadata("design:paramtypes", [PartnerService, NavController, NavParams, LoadingController, ToastController])
    ], EditPartnerForm);
    return EditPartnerForm;
}());
export { EditPartnerForm };
/* Product Permitions */
var PartnerProductPermits = /** @class */ (function () {
    function PartnerProductPermits(params, viewCtrl, toastCtrl, partnerService) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.partnerService = partnerService;
        this.partnerId = params.get('partnerId');
        this.partnerService.getProductPermitions(this.partnerId).then(function (response) {
            _this.productPermits = response;
        });
    }
    PartnerProductPermits.prototype.savePermition = function (product) {
        var _this = this;
        this.partnerService.saveProductPermits(product, this.partnerId).then(function (response) {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                var error = _this.toastCtrl.create({ message: response.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
        });
    };
    PartnerProductPermits.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PartnerProductPermits = __decorate([
        Component({
            templateUrl: 'partner_product_permits.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController,
            ToastController,
            PartnerService])
    ], PartnerProductPermits);
    return PartnerProductPermits;
}());
export { PartnerProductPermits };
/* Change Password */
var ChangePartnerPasswordPage = /** @class */ (function () {
    function ChangePartnerPasswordPage(params, viewCtrl, authService, toastCtrl, alertCtrl, translateService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.partnerId = this.params.get('id');
    }
    ChangePartnerPasswordPage.prototype.changePassword = function (partnerId, newpass) {
        var _this = this;
        console.log(partnerId);
        this.authService.changePartnerPassword(partnerId, newpass).then(function (response) {
            if (response.Status == AppSettings.REST_STATUS_ERROR) {
                var msg_1;
                _this.translateService.get(response.Message).subscribe(function (value) { msg_1 = value; });
                var error = _this.toastCtrl.create({ message: msg_1, cssClass: 'danger', duration: 3000, position: 'top' });
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
    ChangePartnerPasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChangePartnerPasswordPage = __decorate([
        Component({
            templateUrl: 'change_password.html'
        }),
        __metadata("design:paramtypes", [NavParams,
            ViewController,
            AuthenticationService,
            ToastController,
            AlertController,
            TranslateService])
    ], ChangePartnerPasswordPage);
    return ChangePartnerPasswordPage;
}());
export { ChangePartnerPasswordPage };
//# sourceMappingURL=partners.js.map