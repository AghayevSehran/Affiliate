webpackJsonp([0],{

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Güncelleniyor</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="about-header">\n\n        <img src="assets/img/appicon.svg" alt="Pinolo logo">\n\n    </div>\n\n    <div padding class="about-info">\n\n        <h4>Güncelleme Çalışmaları Devam Ediyor.</h4>\n\n\n\n        <p>\n\n            Sürmekte olan iyileştirme çalışması sebebiyle geçici olarak hizmet verememektedir. Çalışma tamamlandığında bu sayfa hizmetinize açılacaktır.\n\n            <br /><br /> Anlayışınız için teşekkür ederiz.\n\n            <br /><br /> Pinolo\n\n\n\n\n\n        </p>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PartnersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NewPartnerForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditPartnerForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PartnerProductPermits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePartnerPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_partner_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_models_tree_options_model__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
                __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_models_tree_options_model__["a" /* TREE_ACTIONS */].TOGGLE_EXPANDED($event.tree, $event.node, $event);
        };
        this.options = {
            displayField: 'nodeName',
            isExpandedField: 'expanded',
            idField: 'uuid',
            actionMapping: {
                mouse: {
                    dblClick: function (tree, node, $event) {
                        if (node.hasChildren)
                            __WEBPACK_IMPORTED_MODULE_3_angular_tree_component_dist_models_tree_options_model__["a" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
    ], PartnersPage.prototype, "content", void 0);
    PartnersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-partners',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\partners.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'app.partners.title\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end *ngIf="canCreatePartner">\n\n            <button ion-button icon-left [navPush]="NewPartnerForm"><ion-icon name="person-add"></ion-icon> {{\'app.btn.addnew\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list class="normal-font">\n\n\n\n        <ion-list-header no-padding>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-6 text-left>{{\'app.general.text.username\'|translate}}</ion-col>\n\n                    <!-- <ion-col col-4 text-center>{{\'app.general.text.credit\'|translate}}</ion-col> -->\n\n                    <ion-col col-6 text-right>{{\'app.general.text.balance\'|translate}}</ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-list-header>\n\n\n\n        <!-- <button md-button (click)="partnersTree.treeModel.expandAll()">Expand</button> -->\n\n\n\n        <tree-root [nodes]="nodes" [focused]="true" [options]="options">\n\n\n\n            <ng-template #treeNodeTemplate let-node let-index="index">\n\n\n\n                <ion-list class="normal-font nomargin">\n\n\n\n                    <ion-item-sliding>\n\n                        <ion-item>\n\n                            <div class="note-item" [ngClass]="{\'disabled\':!node.data.Active}">\n\n                                <ion-grid>\n\n                                    <ion-row>\n\n                                        <ion-col col-6 text-left class="ellipsis"><span class="partner-name">{{ node.data.Username }}</span></ion-col>\n\n                                        <!-- <ion-col col-4 text-center><span class="credit">{{ node.data.Credit|number:\'.2-2\' }} {{ node.data.Currency|currencyIcon }}</span></ion-col> -->\n\n                                        <ion-col col-6 text-right><span class="balance">{{ node.data.Balance|number:\'.2-2\' }} {{ node.data.Currency|currencyIcon }}</span></ion-col>\n\n                                    </ion-row>\n\n                                </ion-grid>\n\n                            </div>\n\n                        </ion-item>\n\n                        <ion-item-options side="right">\n\n                            <button ion-button color="primary" [navPush]="EditPartnerForm" [navParams]="{id:node.data.Id, balance: node.data.Balance}" small>{{\'app.btn.edit\'|translate}}</button>\n\n                            <button ion-button color="dark" (click)="productPermits(node.data.Id)" small>{{\'app.btn.product_permission\'|translate}}</button>\n\n                            <button ion-button color="danger" (click)="changePassword(node.data.Id)" small>{{\'app.btn.change_password\' | translate}}</button>\n\n\n\n                        </ion-item-options>\n\n\n\n                \n\n                    </ion-item-sliding>\n\n                </ion-list>\n\n            </ng-template>\n\n\n\n        </tree-root>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\partners.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_partner_service__["a" /* PartnerService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_user_data__["a" /* AuthenticationService */]])
    ], PartnersPage);
    return PartnersPage;
}());

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
                if (result.Status == __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\add.html"*/'<ion-header>\n\n    <ion-navbar>\n\n\n\n        <ion-title>{{\'app.btn.addpartner\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <form #partnerForm="ngForm" novalidate>\n\n\n\n        <ion-list class="form-list">\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.name\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.name" type="text" name="name" #name="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n            </ion-item>\n\n\n\n            <p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n\n                {{\'app.general.label.name_msg\'|translate}}\n\n            </p>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.username\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.username" type="text" #username="ngModel" name="username" spellcheck="false" autocapitalize="off"\n\n                    required></ion-input>\n\n            </ion-item>\n\n\n\n            <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n                {{\'app.general.label.username_msg\'|translate}}\n\n            </p>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.password\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.password" type="text" #password="ngModel" name="password" spellcheck="false" autocapitalize="off"\n\n                    required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n                {{\'app.general.label.username_msg\'|translate}}\n\n            </p>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.credit\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.credit" type="number" #credit="ngModel" name="credit" spellcheck="false" autocapitalize="off"\n\n                    required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="credit.valid || submitted == false" color="danger" padding-left>\n\n                {{\'app.general.label.credit_msg\'|translate}}\n\n            </p>\n\n\n\n            <ion-item>\n\n                <ion-label>{{\'app.general.label.active\'|translate}}</ion-label>\n\n                <ion-checkbox [(ngModel)]="partner.active" name="active"></ion-checkbox>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>{{\'app.general.label.partneraccess\'|translate}}</ion-label>\n\n                <ion-checkbox [(ngModel)]="partner.CanCreatePartner" name="cancreatepartner"></ion-checkbox>\n\n            </ion-item>\n\n\n\n\n\n            <div text-center padding>\n\n                <button ion-button type="submit" (click)="savePartner(partnerForm)" padding text-center>{{\'app.btn.save\'|translate}}</button>\n\n            </div>\n\n\n\n        </ion-list>\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_partner_service__["a" /* PartnerService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */]])
    ], NewPartnerForm);
    return NewPartnerForm;
}());

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
                if (result.Status == __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
                if (result.Status == __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
                if (result.Status == __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\edit.html"*/'<ion-header>\n\n    <ion-navbar>\n\n\n\n        <ion-title>{{\'app.partners.title_edit\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <form #partnerForm="ngForm" novalidate>\n\n\n\n        <ion-list class="form-list">\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.id\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.Id" type="number" name="id" #id="ngModel" disabled required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.name\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.Name" type="text" name="name" #name="ngModel" required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n\n                {{\'app.general.label.name_msg\'|translate}}\n\n            </p>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.email\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.Email" type="text" name="email" #email="ngModel" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.username\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.Username" type="text" #username="ngModel" name="username" disabled required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.text.balance\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="balance" disabled name="balance"></ion-input>\n\n            </ion-item>\n\n\n\n            <!-- <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.credit\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="partner.Credit" type="number" #creditx="ngModel" name="creditx" required></ion-input>\n\n            </ion-item> -->\n\n\n\n            <!-- <p ion-text [hidden]="creditx.valid || submitted == false" color="danger" padding-left>\n\n                {{\'app.general.label.credit_msg\'|translate}}\n\n            </p> -->\n\n\n\n            <ion-item>\n\n                <ion-label>{{\'app.general.label.active\'|translate}}</ion-label>\n\n                <ion-checkbox [(ngModel)]="partner.Active" name="active"></ion-checkbox>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>{{\'app.general.label.partneraccess\' |translate}}</ion-label>\n\n                <ion-checkbox [(ngModel)]="partner.CanCreatePartner" name="cancreatepartner"></ion-checkbox>\n\n            </ion-item>\n\n\n\n            <div text-center padding>\n\n                <button ion-button type="submit" (click)="savePartner(partnerForm)" padding text-center>{{\'app.btn.save\'|translate}}</button>\n\n            </div>\n\n\n\n        </ion-list>\n\n    </form>\n\n\n\n    <form>\n\n\n\n        <ion-item>\n\n            <ion-label floating primary>{{\'app.general.label.credit\'|translate}}</ion-label>\n\n            <ion-input [(ngModel)]="credit" type="text" name="credits"></ion-input>\n\n        </ion-item>\n\n\n\n        <div text-center padding>\n\n            <button ion-button (click)="depositCredit()" padding text-center>{{ \'app.btn.deposit\' | translate }}</button>\n\n            <button ion-button (click)="withdrawCredit()" padding text-center>{{ \'app.btn.withdraw\' | translate }}</button>\n\n        </div>\n\n        \n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_partner_service__["a" /* PartnerService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */]])
    ], EditPartnerForm);
    return EditPartnerForm;
}());

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
            if (response.Status == __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\partner_product_permits.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>{{\'app.partners.title.producut_permitions\'|translate}}</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">{{\'app.btn.cancel\'|translate}}</span>\n\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="dismiss()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n\n\n        <ion-item *ngFor="let row of productPermits">\n\n            <ion-label>{{row.Name}}</ion-label>\n\n            <ion-checkbox [(ngModel)]="row.Permitted" (ionChange)="savePermition(row)"></ion-checkbox>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\partner_product_permits.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_partner_service__["a" /* PartnerService */]])
    ], PartnerProductPermits);
    return PartnerProductPermits;
}());

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
            if (response.Status == __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\change_password.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>{{\'page.changepassword.title\'|translate}}</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">{{\'app.btn.cancel\'|translate}}</span>\n\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label fixed>{{\'page.changepassword.label.newpassword\'|translate}}</ion-label>\n\n            <ion-input #password type="password" required></ion-input>\n\n        </ion-item>\n\n        <div padding>\n\n            <button ion-button block color="primary" (click)="changePassword(partnerId,password.value)">{{\'app.btn.save\'|translate}}</button>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\partners\change_password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], ChangePartnerPasswordPage);
    return ChangePartnerPasswordPage;
}());

//# sourceMappingURL=partners.js.map

/***/ }),

/***/ 1124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetReportsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReportBetFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BetReportsPage = /** @class */ (function () {
    function BetReportsPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        var firstDay = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var today = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday() === 1) {
            firstDay = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            today = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'days').format('YYYY-MM-DD');
        }
        this.reportFilter = {
            startDate: firstDay,
            endDate: today
        };
        this.getReports();
        this.getShopHoldReports();
    }
    BetReportsPage.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getBetReports(this.reportFilter).then(function (response) {
            loading.dismiss();
            if (response.Status === __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
    BetReportsPage.prototype.getShopHoldReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getShopHoldReports(this.reportFilter).then(function (response) {
            loading.dismiss();
            if (response.Status === __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                var msg_2;
                _this.translateService.get(response.Message).subscribe(function (v) {
                    msg_2 = v;
                });
                var error = _this.toastCtrl.create({ message: msg_2, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            console.log(response.Data);
        });
    };
    BetReportsPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ReportBetFilterPage, this.reportFilter);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.reportFilter = data;
                _this.getReports();
            }
        });
    };
    BetReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-bet',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsbet\reports.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'app.betreports.title\'|translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n        \n\n\n\n    <ion-list class="normal-font">\n\n        <!-- <button md-button (click)="reportsTree.treeModel.expandAll()">Expand</button> -->\n\n\n\n        <tree-root #reportsTree [nodes]="nodes" [focused]="true" [options]="options">\n\n\n\n            <ng-template #treeNodeTemplate let-node let-index="index">\n\n\n\n                <ion-list class="normal-font nomargin">\n\n                    <ion-item>\n\n                        <div class="note-item" [ngClass]="{\'disabled\':!node.data.Active}">\n\n                            <ion-grid>\n\n                                <ion-row class="partner-title">\n\n                                    <ion-col text-center>{{ node.data.Username }}</ion-col>\n\n                                </ion-row>\n\n								<ion-row class="border">\n\n									<ion-col col-4 text-left><span>{{\'app.general.text.balance\'|translate}}</span><br />{{ node.data.Balance|number:\'.2-2\'}}</ion-col>\n\n									<ion-col col-4 text-left><span>{{\'app.general.text.ticket_count\'|translate}}</span><br />{{ node.data.TicketCount}}</ion-col>\n\n								</ion-row>\n\n                                <ion-row>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.deposit_amount\'|translate}}</span><br />{{ node.data.Stake|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.payout\'|translate}}</span><br />{{ node.data.Payout|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ node.data.Hold|number:\'.2-2\'}}</ion-col>\n\n                                </ion-row>\n\n                            </ion-grid>\n\n                        </div>\n\n                    </ion-item>\n\n\n\n                </ion-list>\n\n            </ng-template>\n\n\n\n        </tree-root>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsbet\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], BetReportsPage);
    return BetReportsPage;
}());

;
/* Filter Settings */
var ReportBetFilterPage = /** @class */ (function () {
    function ReportBetFilterPage(navParams, viewCtrl) {
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
    ReportBetFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    ReportBetFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ReportBetFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reportbet-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsbet\reports_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.onlyActive">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsbet\reports_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ReportBetFilterPage);
    return ReportBetFilterPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasinoReportsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReportCasinoFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CasinoReportsPage = /** @class */ (function () {
    function CasinoReportsPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        var firstDay = __WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var today = __WEBPACK_IMPORTED_MODULE_3_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday() === 1) {
            firstDay = __WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            today = __WEBPACK_IMPORTED_MODULE_3_moment__().add(1, 'days').format('YYYY-MM-DD');
        }
        this.reportFilter = {
            startDate: firstDay,
            endDate: today
        };
        this.getReports();
    }
    CasinoReportsPage.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getCasinoReports(this.reportFilter).then(function (response) {
            loading.dismiss();
            if (response.Status === __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
    CasinoReportsPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ReportCasinoFilterPage, this.reportFilter);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.reportFilter = data;
                _this.getReports();
            }
        });
    };
    CasinoReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-casino',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportscasino\reports.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'app.casinoreport.title\'|translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-list class="normal-font">\n\n        <!-- <button md-button (click)="reportsTree.treeModel.expandAll()">Expand</button> -->\n\n\n\n        <tree-root #reportsTree [nodes]="nodes" [focused]="true" [options]="options">\n\n\n\n            <ng-template #treeNodeTemplate let-node let-index="index">\n\n\n\n                <ion-list class="normal-font nomargin">\n\n                    <ion-item>\n\n                        <div class="note-item" [ngClass]="{\'disabled\':!node.data.Active}">\n\n                            <ion-grid>\n\n                                <ion-row class="partner-title">\n\n                                    <ion-col text-center>{{ node.data.Username }}</ion-col>\n\n                                </ion-row>\n\n                                <ion-row class="border">\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.credit\'|translate}}</span><br />{{ node.data.Credit|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.amount\'|translate}}</span><br />{{ node.data.Balance|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.deposit_amount\'|translate}}</span><br />{{ node.data.Turnover|number:\'.2-2\'}}</ion-col>\n\n                                </ion-row>\n\n                                <ion-row>\n\n                                    <ion-col col-6 text-left><span>{{\'app.general.text.payout\'|translate}}</span><br />{{ node.data.Payout|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-6 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ node.data.Profit|number:\'.2-2\'}}</ion-col>\n\n                                </ion-row>\n\n\n\n                            </ion-grid>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-list>\n\n\n\n\n\n            </ng-template>\n\n\n\n        </tree-root>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportscasino\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], CasinoReportsPage);
    return CasinoReportsPage;
}());

;
/* Filter Settings */
var ReportCasinoFilterPage = /** @class */ (function () {
    function ReportCasinoFilterPage(navParams, viewCtrl) {
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
    ReportCasinoFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    ReportCasinoFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ReportCasinoFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reportcasino-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportscasino\reports_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.onlyActive">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportscasino\reports_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ReportCasinoFilterPage);
    return ReportCasinoFilterPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveCasinoReportsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReportLiveCasinoFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiveCasinoReportsPage = /** @class */ (function () {
    function LiveCasinoReportsPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        var firstDay = __WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var today = __WEBPACK_IMPORTED_MODULE_3_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday() === 1) {
            firstDay = __WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            today = __WEBPACK_IMPORTED_MODULE_3_moment__().add(1, 'days').format('YYYY-MM-DD');
        }
        this.reportFilter = {
            startDate: firstDay,
            endDate: today
        };
        this.getReports();
    }
    LiveCasinoReportsPage.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getLiveCasinoReports(this.reportFilter).then(function (response) {
            loading.dismiss();
            if (response.Status === __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
    LiveCasinoReportsPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ReportLiveCasinoFilterPage, this.reportFilter);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.reportFilter = data;
                _this.getReports();
            }
        });
    };
    LiveCasinoReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-livecasino',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportslivecasino\reports.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'app.menu.reports.livecasinoreport\'|translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-list class="normal-font">\n\n        <!-- <button md-button (click)="reportsTree.treeModel.expandAll()">Expand</button> -->\n\n\n\n        <tree-root #reportsTree [nodes]="nodes" [focused]="true" [options]="options">\n\n\n\n            <ng-template #treeNodeTemplate let-node let-index="index">\n\n\n\n                <ion-list class="normal-font nomargin">\n\n                    <ion-item>\n\n                        <div class="note-item" [ngClass]="{\'disabled\':!node.data.Active}">\n\n                            <ion-grid>\n\n                                <ion-row class="partner-title">\n\n                                    <ion-col text-center>{{ node.data.Username }}</ion-col>\n\n                                </ion-row>\n\n                                <ion-row class="border">\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.credit\'|translate}}</span><br />{{ node.data.Credit|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.amount\'|translate}}</span><br />{{ node.data.Balance|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.deposit_amount\'|translate}}</span><br />{{ node.data.Turnover|number:\'.2-2\'}}</ion-col>\n\n                                </ion-row>\n\n                                <ion-row>\n\n                                    <ion-col col-6 text-left><span>{{\'app.general.text.payout\'|translate}}</span><br />{{ node.data.Payout|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-6 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ node.data.Profit|number:\'.2-2\'}}</ion-col>\n\n                                </ion-row>\n\n\n\n                            </ion-grid>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-list>\n\n\n\n\n\n            </ng-template>\n\n\n\n        </tree-root>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportslivecasino\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], LiveCasinoReportsPage);
    return LiveCasinoReportsPage;
}());

;
/* Filter Settings */
var ReportLiveCasinoFilterPage = /** @class */ (function () {
    function ReportLiveCasinoFilterPage(navParams, viewCtrl) {
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
    ReportLiveCasinoFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    ReportLiveCasinoFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ReportLiveCasinoFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reportcasino-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportslivecasino\reports_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.onlyActive">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportslivecasino\reports_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ReportLiveCasinoFilterPage);
    return ReportLiveCasinoFilterPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TombalaReportsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTombalaFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TombalaReportsPage = /** @class */ (function () {
    function TombalaReportsPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        var firstDay = __WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var today = __WEBPACK_IMPORTED_MODULE_3_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday() === 1) {
            firstDay = __WEBPACK_IMPORTED_MODULE_3_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            today = __WEBPACK_IMPORTED_MODULE_3_moment__().add(1, 'days').format('YYYY-MM-DD');
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
            if (response.Status === __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-tombala',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportstombala\reports.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'app.tombalareport.title\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <ion-list class="normal-font">\n\n        <!-- <button md-button (click)="reportsTree.treeModel.expandAll()">Expand</button> -->\n\n\n\n        <tree-root #reportsTree [nodes]="nodes" [focused]="true" [options]="options">\n\n\n\n            <ng-template #treeNodeTemplate let-node let-index="index">\n\n\n\n                <ion-list class="normal-font nomargin">\n\n\n\n                <ion-item>\n\n                    <div class="note-item" [ngClass]="{\'disabled\':!node.data.Active}">\n\n                        <ion-grid>\n\n                            <ion-row class="partner-title">\n\n                                <ion-col text-center>{{ node.data.Username }}</ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.credit\'|translate}}</span><br />{{ node.data.Credit }}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.balance\'|translate}}</span><br />{{ node.data.Balance }}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ node.data.Hold }}</ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div>\n\n                </ion-item>\n\n\n\n                </ion-list>\n\n\n\n            </ng-template>\n\n\n\n        </tree-root>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportstombala\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], TombalaReportsPage);
    return TombalaReportsPage;
}());

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reporttombala-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportstombala\reports_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.onlyActive">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportstombala\reports_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ReportTombalaFilterPage);
    return ReportTombalaFilterPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyIconPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UpDownPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CurrencyIconPipe = /** @class */ (function () {
    function CurrencyIconPipe() {
    }
    CurrencyIconPipe.prototype.transform = function (value) {
        var curIcon;
        switch (value) {
            case 'TRY':
                curIcon = '₺';
                break;
            case 'EUR':
                curIcon = '€';
                break;
            case 'USD':
                curIcon = '$';
                break;
            default:
                break;
        }
        return curIcon;
    };
    CurrencyIconPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'currencyIcon'
        })
    ], CurrencyIconPipe);
    return CurrencyIconPipe;
}());

var GetTimePipe = /** @class */ (function () {
    function GetTimePipe() {
    }
    GetTimePipe.prototype.transform = function (value) {
        if (__WEBPACK_IMPORTED_MODULE_1_moment__(value).isSame(__WEBPACK_IMPORTED_MODULE_1_moment__(), 'day'))
            return __WEBPACK_IMPORTED_MODULE_1_moment__(value).calendar();
        else
            return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format("DD/MM - HH:mm");
    };
    GetTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'gettime'
        })
    ], GetTimePipe);
    return GetTimePipe;
}());

var UpDownPipe = /** @class */ (function () {
    function UpDownPipe() {
    }
    UpDownPipe.prototype.transform = function (value) {
        if (String(value).indexOf('-') > -1) {
            return 'down';
        }
        return 'up';
    };
    UpDownPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'updown'
        })
    ], UpDownPipe);
    return UpDownPipe;
}());

//# sourceMappingURL=general.js.map

/***/ }),

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GeneralReportsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralReportFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralReportsPage = /** @class */ (function () {
    function GeneralReportsPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        var firstDay = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var today = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday() === 1) {
            firstDay = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            today = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'days').format('YYYY-MM-DD');
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
            if (response.Status === __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-general',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsgeneral\reports.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'app.generalreports.title\'|translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n \n\n        <ion-list class="normal-font">\n\n            <!-- <button md-button (click)="reportsTree.treeModel.expandAll()">Expand</button> -->\n\n\n\n            <tree-root #reportsTree [nodes]="nodes" [focused]="true" [options]="options">\n\n\n\n                <ng-template #treeNodeTemplate let-node let-index="index">\n\n\n\n                    <ion-list class="normal-font nomargin">\n\n                        <ion-item>\n\n                            <div class="note-item">\n\n                                <ion-grid>\n\n                                    <ion-row class="partner-title">\n\n                                        <ion-col text-center>{{ node.data.Username }}</ion-col>\n\n                                    </ion-row>\n\n                                    <ion-row class="border">\n\n                                        <ion-col col-4 text-left>\n\n                                            <span>{{\'app.general.text.bet\'|translate}}</span>\n\n                                            <br />{{ node.data.Bet|number:\'.2-2\'}}</ion-col>\n\n                                        <ion-col col-4 text-left>\n\n                                            <span>{{\'app.general.text.livecasino\'|translate}}</span>\n\n                                            <br />{{ node.data.LiveCasino|number:\'.2-2\'}}</ion-col>\n\n                                        <ion-col col-4 text-left>\n\n                                            <span>{{\'app.general.text.slot\'|translate}}</span>\n\n                                            <br />{{ node.data.Casino|number:\'.2-2\'}}</ion-col>\n\n                                    </ion-row>\n\n									<ion-row>\n\n										<ion-col col-4 text-left>\n\n											<span>{{\'app.general.text.tombala\'|translate}}</span>\n\n											<br />{{ node.data.Tombala|number:\'.2-2\'}}\n\n										</ion-col>\n\n										<ion-col col-4 text-left>\n\n											<span>{{\'app.general.text.total\'|translate}}</span>\n\n											<br />{{ node.data.Total|number:\'.2-2\'}}\n\n										</ion-col>\n\n										<ion-col col-4 text-left>\n\n											<span>{{\'app.general.text.fee\'|translate}}</span>\n\n											<br />{{ node.data.Fee|number:\'.2-2\'}}\n\n										</ion-col>\n\n									</ion-row>\n\n                                </ion-grid>\n\n                            </div>\n\n                        </ion-item>\n\n\n\n                    </ion-list>\n\n                </ng-template>\n\n\n\n            </tree-root>\n\n\n\n        </ion-list>\n\n\n\n \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsgeneral\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], GeneralReportsPage);
    return GeneralReportsPage;
}());

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsgeneral\reports_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.OnlyActive">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsgeneral\reports_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], GeneralReportFilterPage);
    return GeneralReportFilterPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetReportsTwoPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReportBetTwoFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BetReportsTwoPage = /** @class */ (function () {
    function BetReportsTwoPage(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        var firstDay = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var today = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday() === 1) {
            firstDay = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            today = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'days').format('YYYY-MM-DD');
        }
        this.reportFilter = {
            startDate: firstDay,
            endDate: today
        };
        this.getReports();
    }
    BetReportsTwoPage.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.getShopHoldReports(this.reportFilter).then(function (response) {
            loading.dismiss();
            if (response.Status === __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
    BetReportsTwoPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ReportBetTwoFilterPage, this.reportFilter);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.reportFilter = data;
                _this.getReports();
            }
        });
    };
    BetReportsTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-bet',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsbettwo\reports.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'app.betreports.title\'|translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    \n\n\n\n    <ion-list class="normal-font">\n\n        <!-- <button md-button (click)="reportsTree.treeModel.expandAll()">Expand</button> -->\n\n\n\n        <tree-root #reportsTree [nodes]="nodes" [focused]="true" [options]="options">\n\n\n\n            <ng-template #treeNodeTemplate let-node let-index="index">\n\n\n\n                <ion-list class="normal-font nomargin">\n\n                    <ion-item>\n\n                        <div class="note-item" [ngClass]="{\'disabled\':!node.data.Active}">\n\n                            <ion-grid>\n\n                                <ion-row class="partner-title">\n\n                                    <ion-col text-center>{{ node.data.Username }}</ion-col>\n\n                                </ion-row>\n\n								<ion-row class="border">\n\n									<ion-col col-4 text-left><span>{{\'app.general.text.balance\'|translate}}</span><br />{{ node.data.Balance|number:\'.2-2\'}}</ion-col>\n\n									<ion-col col-4 text-left><span>{{\'app.general.text.ticket_count\'|translate}}</span><br />{{ node.data.TicketCount}}</ion-col>\n\n								</ion-row>\n\n                                <ion-row>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.deposit_amount\'|translate}}</span><br />{{ node.data.Stake|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.payout\'|translate}}</span><br />{{ node.data.Payout|number:\'.2-2\'}}</ion-col>\n\n                                    <ion-col col-4 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ node.data.Hold|number:\'.2-2\'}}</ion-col>\n\n                                </ion-row>\n\n                            </ion-grid>\n\n                        </div>\n\n                    </ion-item>\n\n\n\n                </ion-list>\n\n            </ng-template>\n\n\n\n        </tree-root>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsbettwo\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], BetReportsTwoPage);
    return BetReportsTwoPage;
}());

;
/* Filter Settings */
var ReportBetTwoFilterPage = /** @class */ (function () {
    function ReportBetTwoFilterPage(navParams, viewCtrl) {
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
    ReportBetTwoFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    ReportBetTwoFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ReportBetTwoFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reportbet-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsbettwo\reports_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.onlyActive">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsbettwo\reports_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ReportBetTwoFilterPage);
    return ReportBetTwoFilterPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReportsNewFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportsNew = /** @class */ (function () {
    function ReportsNew(partnerService, navCtrl, alertCtrl, toastCtrl, loadingCtrl, modalCtrl, translateService) {
        this.partnerService = partnerService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        var firstDay = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var today = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday() === 1) {
            firstDay = __WEBPACK_IMPORTED_MODULE_4_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            today = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'days').format('YYYY-MM-DD');
        }
        this.reportFilter = {
            startDate: firstDay,
            endDate: today
        };
        this.getReports();
    }
    ReportsNew.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.partnerService.PartnerShopReport(this.reportFilter).then(function (response) {
            loading.dismiss();
            console.log(response);
            if (response.Status === __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
    ReportsNew.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ReportsNewFilter, this.reportFilter);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.reportFilter = data;
                _this.getReports();
            }
        });
    };
    ReportsNew = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-bet',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsnew\reports.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'app.menu.reports.depositwithdraw\'|translate}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    \n\n\n\n    <ion-list class="normal-font">\n\n        <!-- <button md-button (click)="reportsTree.treeModel.expandAll()">Expand</button> -->\n\n        <ion-list-header no-padding>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-6 text-left> <span style="width: 20px; height: 20px; background: green"></span> {{\'app.btn.deposit\'|translate}}</ion-col>\n\n                    <ion-col col-6 text-left> <span style="width: 20px; height: 20px; background: red"></span> {{\'app.btn.withdraw\'|translate}}</ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-list-header>\n\n\n\n        <ion-list-header no-padding>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-4 text-left>{{\'app.general.text.username\'|translate}}</ion-col>\n\n                    <ion-col col-4 text-center>{{\'app.general.text.amount\'|translate}}</ion-col>\n\n                    <ion-col col-4 text-right>{{\'app.general.text.balance\'|translate}}</ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-list-header>\n\n\n\n        <!-- <button md-button (click)="partnersTree.treeModel.expandAll()">Expand</button> -->\n\n\n\n        <ion-item *ngFor="let item of nodes">\n\n            <div>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-4 text-left class="ellipsis"><span class="partner-name">{{ item.Username }}</span></ion-col>\n\n                        <ion-col col-4 text-center><span class="credit" [class.green]="item.Amount > 0" [class.red]="item.Amount < 0">{{ item.Amount|number:\'.2-2\' }} {{ item.Currency|currencyIcon }}</span></ion-col>\n\n                        <ion-col col-4 text-right><span class="balance">{{ item.Balance|number:\'.2-2\' }} {{ item.Currency|currencyIcon }}</span></ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsnew\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], ReportsNew);
    return ReportsNew;
}());

;
/* Filter Settings */
var ReportsNewFilter = /** @class */ (function () {
    function ReportsNewFilter(navParams, viewCtrl) {
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
    ReportsNewFilter.prototype.applyFilters = function () {
        this.dismiss(this.filterSettings);
    };
    ReportsNewFilter.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ReportsNewFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reportbet-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsnew\reports_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.onlyActive">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsnew\reports_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ReportsNewFilter);
    return ReportsNewFilter;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TransactionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_partner_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountPage = /** @class */ (function () {
    function AccountPage(alertCtrl, nav, AuthenticationService, partnerService, modalCtrl) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.AuthenticationService = AuthenticationService;
        this.partnerService = partnerService;
        this.modalCtrl = modalCtrl;
        this.userSegment = 'AccountInfo';
        this.startDate = undefined;
        this.endDate = undefined;
        this.startTime = undefined;
        this.endTime = undefined;
        this.generalReport = {};
        this.AuthenticationService.userLoggedIn().then(function (response) {
            _this.user = response;
        });
    }
    AccountPage.prototype.getPastLogins = function () {
        var _this = this;
        var start = 1;
        var limit = 50;
        this.AuthenticationService.getUserLogins(start, limit).then(function (response) {
            _this.logins = response;
        });
    };
    AccountPage.prototype.openLoginDetailModal = function (model) {
        var modal = this.modalCtrl.create(ModalContentPage, { selected: model });
        modal.present();
    };
    AccountPage.prototype.getTransactions = function () {
        var _this = this;
        var start = 1;
        var limit = 50;
        this.AuthenticationService.getUserTransactions(start, limit).then(function (response) {
            _this.transactions = response;
        });
    };
    AccountPage.prototype.goTransactionDetail = function (item) {
        this.nav.push(TransactionDetail, { obj: item });
    };
    AccountPage.prototype.changePassword = function () {
        var modal = this.modalCtrl.create(ChangePasswordPage);
        modal.present();
    };
    AccountPage.prototype.getGeneralReport = function () {
        var _this = this;
        var startDate = this.startDate;
        var endDate = this.endDate;
        var filter = {
            startDate: startDate ? __WEBPACK_IMPORTED_MODULE_6_moment__(startDate).format('MM-DD-YYYY HH:mm:ss') : undefined,
            endDate: endDate ? __WEBPACK_IMPORTED_MODULE_6_moment__(endDate).format('MM-DD-YYYY HH:mm:ss') : undefined
        };
        this.partnerService.getPartnerGeneralReport(filter).then(function (response) {
            _this.generalReport = response;
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\account\account.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'page.account.title\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar>\n\n        <ion-segment [(ngModel)]="userSegment">\n\n            <ion-segment-button value="AccountInfo"><span [translate]="\'page.account.tab.account_info\'"></span></ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <div class="page-content" [ngSwitch]="userSegment">\n\n\n\n        <div text-center *ngIf="user">\n\n\n\n\n\n            <ion-grid *ngSwitchCase="\'AccountInfo\'">\n\n                <ion-row wrap>\n\n                    <ion-col col-50><img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar"></ion-col>\n\n                    <ion-col col-50 text-center>\n\n                        <h3>{{user.Name}}</h3>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n\n\n\n\n            <ion-list class="floated-list medium-font" *ngSwitchCase="\'AccountInfo\'">\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.id\'"></label>:\n\n                    <span>{{user.Id}}</span>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.sitename\'"></label>:\n\n                    <span>{{user.SiteName}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.username\'"></label>:\n\n                    <span>{{user.Username}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.name\'"></label>:\n\n                    <span>{{user.Name}}</span>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.currency\'"></label>:\n\n                    <span>{{user.Currency}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.language\'"></label>:\n\n                    <span>{{user.Language}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.lastlogin\'"></label>:\n\n                    <span>{{user.LastLogin | date:\'dd.MM.yyyy HH:mm:ss\'}}</span>\n\n                </ion-item>\n\n\n\n            </ion-list>\n\n\n\n\n\n            <ion-list inset *ngSwitchCase="\'AccountInfo\'">\n\n                <button ion-button color="dark" (click)="changePassword()" icon-left>\n\n                    <ion-icon name="key"></ion-icon>{{\'app.btn.change_password\' | translate}}\n\n                </button>\n\n            </ion-list>\n\n\n\n\n\n        </div>\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\account\account.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__providers_partner_service__["a" /* PartnerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_partner_service__["a" /* PartnerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AccountPage);
    return AccountPage;
}());

var TransactionDetail = /** @class */ (function () {
    function TransactionDetail(params, nav) {
        this.params = params;
        this.nav = nav;
        this.item = this.params.get('obj');
    }
    TransactionDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'transaction-detail',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\account\transaction_detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{item.Id}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div *ngIf="item">\n\n\n\n        <ion-list>\n\n            <ion-item>\n\n                {{\'app.general.text.transaction_date\'|translate}}\n\n                <ion-note item-end class="color-dark">{{item.TransactionDate| date:\'dd.MM.yyyy HH:mm\'}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                {{\'app.general.text.transaction_type\'|translate}}\n\n                <ion-note item-end class="color-dark">{{item.TransactionType}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                {{\'app.general.text.transaction_direction\'|translate}}\n\n                <ion-note item-end class="color-dark">{{item.Direction}}</ion-note>\n\n            </ion-item>\n\n            <ion-item [ngClass]="{\'down\' : (item.LastBalance>item.Balance), \'up\' : (item.Balance > item.LastBalance)}">\n\n                {{\'app.general.text.amount\'|translate}}\n\n                <ion-note item-end>{{item.Amount}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                {{\'app.general.text.lastbalance\'|translate}}\n\n                <ion-note item-end class="color-dark">{{item.LastBalance}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                {{\'app.general.text.balance\'|translate}}\n\n                <ion-note item-end class="color-dark">{{item.Balance}}</ion-note>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                {{\'app.general.text.currency\'|translate}}\n\n                <ion-note item-end class="color-dark">{{item.Currency}}</ion-note>\n\n            </ion-item>\n\n\n\n\n\n        </ion-list>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\account\transaction_detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TransactionDetail);
    return TransactionDetail;
}());

var ModalContentPage = /** @class */ (function () {
    function ModalContentPage(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.item = params.get('selected');
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{item.Id}}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">{{'app.btn.cancel' | translate}}</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n      <ion-item>\n        {{'page.account.loginhistory.browser'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.Browser}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.device'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.Device}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.os'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.Os}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.ip'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.Ip}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.date'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.LoginDate}}</ion-note>\n      </ion-item>\n      <ion-item>\n        {{'page.account.loginhistory.partnerId'|translate}}\n        <ion-note item-end class=\"color-dark\">{{item.PartnerId}}</ion-note>\n      </ion-item>      \n  </ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

/* Change Password */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(params, viewCtrl, authService, toastCtrl, alertCtrl, translateService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
    }
    ChangePasswordPage.prototype.changePassword = function (newpass) {
        var _this = this;
        this.authService.changePassword(newpass).then(function (response) {
            if (response.Status == __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
    ChangePasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\account\change_password.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>{{\'page.changepassword.title\'|translate}}</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">{{\'app.btn.cancel\'|translate}}</span>\n\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label fixed>{{\'page.changepassword.label.newpassword\'|translate}}</ion-label>\n\n            <ion-input #password type="password" required></ion-input>\n\n        </ion-item>\n\n        <div padding>\n\n            <button ion-button block color="primary" (click)="changePassword(password.value)">{{\'app.btn.save\'|translate}}</button>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\account\change_password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var PartnerService = /** @class */ (function () {
    function PartnerService(requestService) {
        this.requestService = requestService;
    }
    PartnerService.prototype.get = function (partnerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getpartner?partnerId=' + partnerId)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'partnerlist')];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.savePartner = function (partner) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?name=' + partner.name + '&username=' + partner.username + '&password=' + partner.password + '&credit=' + partner.credit + '&cancreatepartner=' + partner.cancreatepartner;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'createpartner' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.depositCredit = function (parnerId, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?partnerId=' + parnerId + '&amount=' + amount;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'depositcreditpartner' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.withdrawCredit = function (parnerId, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?partnerId=' + parnerId + '&amount=' + amount;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'withdrawcreditpartner' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.updatePartner = function (partner) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?Id=' + partner.Id + '&Name=' + partner.Name + '&email=' + partner.Email + '&active=' + partner.Active + '&credit=' + partner.Credit + '&cancreatepartner=' + partner.CanCreatePartner;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'updatepartner' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.getPlayers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'partnerplayers?' + params)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.playerPayIn = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?playerId=' + options.playerId + '&amount=' + options.amount;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'partnerplayerpayin' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.playerPayOut = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?playerId=' + options.playerId + '&amount=' + options.amount;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'partnerplayerpayout' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.savePlayer = function (player) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?name=' + player.name + '&surname=' + player.surname + '&username=' + player.username + '&password=' + player.password + '&type=' + player.type;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'createpartnerplayer' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.saveEditPlayer = function (player) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?name=' + player.name + '&surname=' + player.surname + '&isActive=' + player.active + '&type=' + player.type;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'createpartnerplayer' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.getPartnerPlayer = function (playerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getpartnerplayer?playerId=' + playerId)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getPlayerLogins = function (playerId, start, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayerlogins?playerId=' + playerId + '&start=' + start + '&limit=' + limit)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getPlayerTransactions = function (playerId, start, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayertransactions?playerId=' + playerId + '&start=' + start + '&limit=' + limit)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getPlayerCashTransactions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayercashtransactions?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getProductPermitions = function (partnerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'productpermits?partnerId=' + partnerId)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getPlayerProductPermitions = function (playerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'playerproductpermits?playerId=' + playerId)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.setPlayerProductPermitions = function (playerId, canPlayTombala, canPlayCasino, canPlayLiveCasino, canPlayBet, useCashout) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + ("playersetproductpermits?playerId=" + playerId + "&canPlayTombala=" + canPlayTombala + "&canPlayCasino=" + canPlayCasino + "&canPlayLiveCasino=" + canPlayLiveCasino + "&canPlayBet=" + canPlayBet + "&useCashout=" + useCashout))];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.saveProductPermits = function (product, partnerId) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?partnerId=' + partnerId + '&productTypeId=' + product.ProductTypeId + '&permitted=' + product.Permitted;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'updateproductpermits' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.getPlayerTickets = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayertickets?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getPartnerGeneralReport = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = "?startDate=" + filter.startDate + "&endDate=" + filter.endDate;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getpartnergeneralreport' + params)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    PartnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestService */]])
    ], PartnerService);
    return PartnerService;
}());

//# sourceMappingURL=partner-service.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, events, AuthenticationService, alertCtrl, translate, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.AuthenticationService = AuthenticationService;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.storage = storage;
        this.login = { username: '', password: '', language: 'tr' };
        this.submitted = false;
        AuthenticationService.getLanguage().then(function (r) {
            _this.login.language = r;
        });
    }
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.AuthenticationService.login(this.login.username, this.login.password, this.login.language)
                .then(function (resp) {
                if (resp.Status === __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                    var alert_1 = _this.alertCtrl.create({ title: resp.Message, buttons: [{ text: 'OK', handler: function () { } }] });
                    alert_1.present();
                    return false;
                }
                _this.events.publish('user:login');
                _this.events.publish('user:canpartneradd', resp.userCanCreatePartner);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */]);
            });
        }
    };
    LoginPage.prototype.onChangeLanguage = function (lang) {
        this.storage.set('lang', lang);
        this.translate.use(lang);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title><span [translate]="\'page.login.title\'"></span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="logo">\n\n        <img src="assets/img/appicon.svg" alt="Logo">\n\n    </div>\n\n\n\n    <form #loginForm="ngForm" novalidate>\n\n        <ion-list no-lines>\n\n            <ion-item>\n\n                <ion-label [translate]="\'page.login.label.username\'"></ion-label>\n\n                <ion-input [(ngModel)]="login.username" name="username" type="text" class="input" #username="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="username.valid || submitted == false" class="form-error" color="danger" padding-left [translate]="\'page.login.label.username.error\'"></p>\n\n            <ion-item>\n\n                <ion-label [translate]="\'page.login.label.password\'"></ion-label>\n\n                <ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="password.valid || submitted == false" class="form-error" color="danger" padding-left [translate]="\'page.login.label.password.error\'"></p>\n\n\n\n            <ion-item>\n\n                <ion-label [translate]="\'page.login.label.language\'"></ion-label>\n\n                <ion-select [(ngModel)]="login.language" name="langauge" (ionChange)="onChangeLanguage(login.language)">\n\n                    <ion-option value="tr">Türkçe</ion-option>\n\n                    <ion-option value="en">English</ion-option>\n\n                    <ion-option value="de">Deutsch</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            \n\n        </ion-list>\n\n\n\n        <ion-row responsive-sm>\n\n            <ion-col text-center>\n\n                <button ion-button (click)="onLogin(loginForm)" type="submit" medium> <span [translate]="\'app.btn.login\'"></span> </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = '/api/';
    AppSettings.REST_STATUS_UNAUTH = 'Unauthorized request';
    AppSettings.REST_STATUS_OK = 'Ok';
    AppSettings.REST_STATUS_ERROR = 'Error';
    return AppSettings;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 321;

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ReportsService = /** @class */ (function () {
    function ReportsService(requestService) {
        this.requestService = requestService;
    }
    ReportsService.prototype.getGeneralReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'gettotalreports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.PartnerShopReport = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = "?startDate=" + filter.startDate + "&endDate=" + filter.endDate;
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'partnershopreport' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ReportsService.prototype.getGeneralPlayerReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayerstotalreport?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getBetReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getholdreports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getShopHoldReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getshopholdreports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getCasinoReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getcasinoreports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getLiveCasinoReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getlivecasinoreports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getTombalaReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'gettombalareports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getPlayerHoldReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayerbetreports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getPlayerCasinoReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayercasinoreports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getPlayerLiveCasinoReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayerslivecasinoreport?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService.prototype.getPlayerTombalaReports = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getplayertombalareports?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    ReportsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestService */]])
    ], ReportsService);
    return ReportsService;
}());

//# sourceMappingURL=reports-service.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PlayersPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PlayerProductPermits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PlayersFilterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PlayerDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PayinPayoutModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoginHistoryModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NewPlayerForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditPlayerForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePlayerPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tickets_tickets__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_partner_service__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










;
var PlayersPage = /** @class */ (function () {
    function PlayersPage(partnerService, nav, modalCtrl, events, toastCtrl, translateService) {
        var _this = this;
        this.partnerService = partnerService;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.NewPlayerForm = NewPlayerForm;
        this.infiteMore = true;
        this.searchParams = {
            page: 1,
            start: 0,
            limit: 50,
            active: true,
            direct: true
        };
        partnerService.getPlayers(this.searchParams).then(function (response) {
            _this.players = response;
        });
        events.subscribe('player:reload', function () {
            _this.reloadPage();
            //events.unsubscribe('player:reload');
        });
    }
    PlayersPage.prototype.isReadonly = function () {
        return true;
    };
    PlayersPage.prototype.reloadPage = function () {
        var _this = this;
        delete this.searchParams.component;
        delete this.searchParams.opts;
        this.searchParams.page = 1;
        this.searchParams.start = 0;
        this.partnerService.getPlayers(this.searchParams).then(function (response) {
            _this.players = response;
        });
    };
    PlayersPage.prototype.openPayOut = function (player) {
        var modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payout', playerId: player.Id });
        modal.present();
    };
    PlayersPage.prototype.productPermits = function (player) {
        var modal = this.modalCtrl.create(PlayerProductPermits, { playerId: player.Id });
        modal.present();
    };
    PlayersPage.prototype.openPayIn = function (player) {
        var modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payin', playerId: player.Id });
        modal.present();
    };
    PlayersPage.prototype.goUserDetail = function (id) {
        this.nav.push(PlayerDetailPage, { id: id });
    };
    PlayersPage.prototype.changePassword = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__account_account__["b" /* ChangePasswordPage */]);
        modal.present();
    };
    PlayersPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(PlayersFilterPage, this.searchParams);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.searchParams = data;
                _this.reloadPage();
            }
        });
    };
    PlayersPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.searchParams.page += 1;
            _this.searchParams.start = ((_this.searchParams.page - 1) * _this.searchParams.limit);
            _this.partnerService.getPlayers(_this.searchParams).then(function (response) {
                if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                    var msg_1;
                    _this.translateService.get(response.Message).subscribe(function (value) {
                        msg_1 = value;
                    });
                    var error = _this.toastCtrl.create({
                        message: msg_1,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_UNAUTH) {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                    }
                    return false;
                }
                if (!response.length) {
                    _this.infiteMore = false;
                    return false;
                }
                response.forEach(function (element) {
                    _this.players.push(element);
                });
                resolve();
            });
        });
    };
    PlayersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-players',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\players.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'app.players.title\'|translate}}</ion-title>\n\n     </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-list #playerList *ngIf="players" class="player-list zebra small-font">\n\n\n\n        <ion-list-header no-padding>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-4 text-left>{{\'app.general.text.partner\'|translate}}</ion-col>\n\n                    <ion-col col-4 text-center>{{\'app.general.text.player\'|translate}}</ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-list-header>\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <ion-item class="border">\n\n                        <ion-label>{{\'app.btn.only_myplayers\'|translate}}</ion-label>\n\n                        <ion-checkbox [(ngModel)]="searchParams.direct"   disabled="true" (ionChange)="reloadPage()"></ion-checkbox>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-item>\n\n                        <button ion-button item-end icon-left (click)="presentFilter()">\n\n                            <ion-icon name="search"></ion-icon>\n\n                            {{\'app.btn.searchplayer\'|translate}}\n\n                        </button>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n\n\n        <ion-item-sliding *ngFor="let row of players" no-padding>\n\n            <ion-item no-padding (click)="goUserDetail(row.Id)">\n\n                <ion-grid no-padding>\n\n                    <ion-row [ngClass]="{\'line-through\': !row.IsActive}">\n\n                        <ion-col col-4 text-left>{{row.Partner}}</ion-col>\n\n                        <ion-col col-4 text-center>{{row.Username}}</ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-item>\n\n            <ion-item-options side="left">\n\n                <button ion-button color="dark" (click)="changePassword(row)">\n\n                    <ion-icon name="remove"></ion-icon>\n\n                    {{\'app.btn.change_password\'|translate}}\n\n                </button>\n\n            </ion-item-options>\n\n\n\n            <ion-item-options side="right">\n\n                <button ion-button color="dark" (click)="productPermits(row)" small>\n\n                    <ion-icon name="cog"></ion-icon>\n\n                    {{\'app.btn.product_permission\'|translate}}\n\n                </button>\n\n                <button ion-button color="dark" (click)="openPayOut(row)">\n\n                    <ion-icon name="remove"></ion-icon>\n\n                    {{\'app.btn.withdraw\'|translate}}\n\n                </button>\n\n                <button ion-button color="primary" (click)="openPayIn(row)">\n\n                    <ion-icon name="add"></ion-icon>\n\n                    {{\'app.btn.deposit\'|translate}}\n\n                </button>\n\n\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n\n\n        <ion-infinite-scroll *ngIf="infiteMore" (ionInfinite)="$event.waitFor(doInfinite())">\n\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\players.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_partner_service__["a" /* PartnerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], PlayersPage);
    return PlayersPage;
}());

/* Product Permitions */
var PlayerProductPermits = /** @class */ (function () {
    function PlayerProductPermits(params, viewCtrl, toastCtrl, partnerService) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.partnerService = partnerService;
        this.productPermits = {
            CanPlayBet: true,
            CanPlayCasino: true,
            CanPlayLiveCasino: true,
            CanPlayTombala: true,
            UseCashout: true
        };
        this.partnerId = params.get('playerId');
        this.partnerService.getPlayerProductPermitions(this.partnerId).then(function (response) {
            _this.productPermits = response;
        });
    }
    PlayerProductPermits.prototype.savePermition = function () {
        var _this = this;
        this.partnerService.setPlayerProductPermitions(this.partnerId, this.productPermits.CanPlayTombala, this.productPermits.CanPlayCasino, this.productPermits.CanPlayLiveCasino, this.productPermits.CanPlayBet, this.productPermits.UseCashout).then(function (response) {
            if (response.Status == __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                var error = _this.toastCtrl.create({ message: response.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
        });
    };
    PlayerProductPermits.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PlayerProductPermits = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\player_product_permits.html"*/'﻿<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>{{\'app.partners.title.producut_permitions\'|translate}}</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">{{\'app.btn.cancel\'|translate}}</span>\n\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="dismiss()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n\n\n        <ion-item >\n\n            <ion-label>SportBet</ion-label>\n\n            <ion-checkbox [(ngModel)]="productPermits.CanPlayBet" name="CanPlayBet" (ionChange)="savePermition()"></ion-checkbox>\n\n        </ion-item>\n\n        <ion-item >\n\n            <ion-label>Live Casino</ion-label>\n\n            <ion-checkbox [(ngModel)]="productPermits.CanPlayLiveCasino" name="CanPlayLiveCasino" (ionChange)="savePermition()"></ion-checkbox>\n\n        </ion-item>\n\n        <ion-item >\n\n            <ion-label>Slot Games</ion-label>\n\n            <ion-checkbox [(ngModel)]="productPermits.CanPlayCasino" name="CanPlayCasino" (ionChange)="savePermition()"></ion-checkbox>\n\n        </ion-item>\n\n        <ion-item >\n\n            <ion-label>Tombala</ion-label>\n\n            <ion-checkbox [(ngModel)]="productPermits.CanPlayTombala" name="CanPlayTombala" (ionChange)="savePermition()"></ion-checkbox>\n\n        </ion-item>\n\n        <ion-item >\n\n            <ion-label>Cashout</ion-label>\n\n            <ion-checkbox [(ngModel)]="productPermits.UseCashout" name="UseCashout" (ionChange)="savePermition()"></ion-checkbox>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\player_product_permits.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_partner_service__["a" /* PartnerService */]])
    ], PlayerProductPermits);
    return PlayerProductPermits;
}());

/* Filter Settings */
var PlayersFilterPage = /** @class */ (function () {
    function PlayersFilterPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.searchParams = [];
        var filter = {
            active: (this.navParams.get('active') ? this.navParams.get('active') : false),
            direct: (this.navParams.get('direct') ? this.navParams.get('direct') : false),
            start: (this.navParams.get('start') ? this.navParams.get('start') : 0),
            limit: (this.navParams.get('limit') ? this.navParams.get('limit') : 50),
        };
        this.searchParams = filter;
    }
    PlayersFilterPage.prototype.applyFilters = function () {
        this.dismiss(this.searchParams);
    };
    PlayersFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    PlayersFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-player-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\players_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.player\'|translate}}:</ion-label>\n\n            <ion-input [(ngModel)]="searchParams.username" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.name\'|translate}}:</ion-label>\n\n            <ion-input [(ngModel)]="searchParams.name" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.surname\'|translate}}:</ion-label>\n\n            <ion-input [(ngModel)]="searchParams.surname" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="searchParams.active">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.direct\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="searchParams.direct">\n\n                <ion-option value="false">{{\'app.general.text.allplayer\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.general.text.only_myplayer\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\players_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PlayersFilterPage);
    return PlayersFilterPage;
}());

var PlayerDetailPage = /** @class */ (function () {
    function PlayerDetailPage(alertCtrl, nav, navParams, events, partnerService, modalCtrl, toastCtrl, translateService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.events = events;
        this.partnerService = partnerService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.userSegment = 'AccountInfo';
        this.cashParams = {
            startDate: null,
            endDate: null,
            playerId: null
        };
        this.searchParams = {
            playerId: null,
            page: 1,
            start: 0,
            limit: 50
        };
        var firstDay = __WEBPACK_IMPORTED_MODULE_8_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var today = __WEBPACK_IMPORTED_MODULE_8_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_8_moment__().isoWeekday() === 1) {
            firstDay = __WEBPACK_IMPORTED_MODULE_8_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            today = __WEBPACK_IMPORTED_MODULE_8_moment__().add(1, 'days').format('YYYY-MM-DD');
        }
        this.playerId = this.navParams.get('id');
        this.cashParams.startDate = firstDay;
        this.cashParams.endDate = today;
        this.cashParams.playerId = this.playerId;
        this.reloadPage();
        events.subscribe('player:reload', function () {
            _this.reloadPage();
        });
    }
    PlayerDetailPage.prototype.reloadPage = function () {
        var _this = this;
        this.partnerService.getPartnerPlayer(this.playerId).then(function (response) {
            if (response.Status == __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                var msg_2;
                _this.translateService.get(response.Message).subscribe(function (value) {
                    msg_2 = value;
                });
                var error = _this.toastCtrl.create({ message: msg_2, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.player = response;
        });
    };
    PlayerDetailPage.prototype.getPastLogins = function () {
        var _this = this;
        var start = 1;
        var limit = 50;
        this.partnerService.getPlayerLogins(this.playerId, start, limit).then(function (response) {
            _this.logins = response;
        });
    };
    PlayerDetailPage.prototype.getCashTransactions = function () {
        var _this = this;
        this.partnerService.getPlayerCashTransactions(this.cashParams).then(function (response) {
            if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                var msg_3;
                _this.translateService.get(response.Message).subscribe(function (value) {
                    msg_3 = value;
                });
                var error = _this.toastCtrl.create({ message: msg_3, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.cashtransactions = response.Data;
        });
    };
    PlayerDetailPage.prototype.openLoginDetailModal = function (model) {
        var modal = this.modalCtrl.create(LoginHistoryModal, { selected: model });
        modal.present();
    };
    PlayerDetailPage.prototype.getTransactions = function () {
        var _this = this;
        var start = 1;
        var limit = 50;
        this.partnerService.getPlayerTransactions(this.playerId, start, limit).then(function (response) {
            _this.transactions = response;
        });
    };
    PlayerDetailPage.prototype.getPlayerTickets = function () {
        var _this = this;
        this.searchParams.playerId = this.playerId;
        this.partnerService.getPlayerTickets(this.searchParams).then(function (response) {
            if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                var msg_4;
                _this.translateService.get(response.Message).subscribe(function (value) {
                    msg_4 = value;
                });
                var error = _this.toastCtrl.create({ message: msg_4, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.tickets = response.Data;
        });
    };
    PlayerDetailPage.prototype.goTransactionDetail = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__account_account__["d" /* TransactionDetail */], { obj: item });
    };
    PlayerDetailPage.prototype.changePassword = function (player) {
        var modal = this.modalCtrl.create(ChangePlayerPasswordPage, { playerId: player.Id });
        modal.present();
    };
    PlayerDetailPage.prototype.openPayOut = function (player) {
        var modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payout', playerId: player.Id });
        modal.present();
    };
    PlayerDetailPage.prototype.openPayIn = function (player) {
        var modal = this.modalCtrl.create(PayinPayoutModal, { type: 'payin', playerId: player.Id });
        modal.present();
    };
    PlayerDetailPage.prototype.goTicketDetail = function (pid, id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__tickets_tickets__["b" /* TicketsDetailPage */], { playerid: pid, id: id });
    };
    PlayerDetailPage.prototype.editPlayer = function (player) {
        this.nav.push(EditPlayerForm, { id: player.Id });
    };
    PlayerDetailPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.searchParams.page += 1;
            _this.searchParams.start = _this.searchParams.page - 1;
            _this.partnerService.getPlayerTickets(_this.searchParams).then(function (response) {
                if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                    var msg_5;
                    _this.translateService.get(response.Message).subscribe(function (value) {
                        msg_5 = value;
                    });
                    var error = _this.toastCtrl.create({
                        message: msg_5,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_UNAUTH) {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
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
    PlayerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-player-detail',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\player-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title *ngIf="player">{{player.Name}} {{player.Surname}}</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar>\n\n        <ion-segment [(ngModel)]="userSegment">\n\n            <ion-segment-button value="AccountInfo"><span [translate]="\'page.account.tab.account_info\'"></span></ion-segment-button>\n\n            <ion-segment-button value="CashTransactions" (ionSelect)="getCashTransactions()"><span [translate]="\'app.general.text.incomeexpense\'"></span></ion-segment-button>\n\n            <ion-segment-button value="TransactionHistory" (ionSelect)="getTransactions()"><span [translate]="\'page.account.tab.transaction_hisorty\'"></span></ion-segment-button>\n\n            <ion-segment-button value="Tickets" (ionSelect)="getPlayerTickets()"><span [translate]="\'page.account.tab.tickets\'"></span></ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <div class="page-content" [ngSwitch]="userSegment">\n\n\n\n        <div text-center *ngIf="player">\n\n\n\n\n\n            <ion-grid *ngSwitchCase="\'AccountInfo\'">\n\n                <ion-row wrap>\n\n                    <ion-col col-50>\n\n                        <h3>{{player.Name}} <br /> {{player.Balance |number:\'.2-2\'}} {{player.Currency|currencyIcon}}</h3>\n\n                    </ion-col>\n\n                    <ion-col col-50 text-center>\n\n                        <div class="user-buttons">\n\n                            <button ion-button color="primary" small (click)="openPayIn(player)">{{\'app.btn.deposit\'|translate}}</button>\n\n                            <button ion-button color="dark" small (click)="openPayOut(player)">{{\'app.btn.withdraw\'|translate}}</button>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n\n\n\n\n            <ion-list class="floated-list small-font" *ngSwitchCase="\'AccountInfo\'">\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.id\'"></label>:\n\n                    <span>{{player.Id}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.username\'"></label>:\n\n                    <span>{{player.Username}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.name\'"></label>:\n\n                    <span>{{player.Name}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.surname\'"></label>:\n\n                    <span>{{player.Surname}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.email\'"></label>:\n\n                    <span>{{player.Email}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.partner\'"></label>:\n\n                    <span>{{player.Email}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.currency\'"></label>:\n\n                    <span>{{player.Currency}}</span>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <label [translate]="\'page.account.table.language\'"></label>:\n\n                    <span>{{player.Language}}</span>\n\n                </ion-item>\n\n\n\n            </ion-list>\n\n\n\n\n\n            <ion-list inset *ngSwitchCase="\'AccountInfo\'">\n\n                <button ion-button color="primary" (click)="editPlayer(player)" icon-left small>\n\n                        <ion-icon name="create"></ion-icon>{{\'app.btn.edit\' | translate}}\n\n                    </button>\n\n                <button ion-button color="dark" (click)="changePassword(player)" icon-left small>\n\n                        <ion-icon name="key"></ion-icon>{{\'app.btn.change_password\' | translate}}\n\n                    </button>\n\n            </ion-list>\n\n\n\n        </div>\n\n\n\n\n\n        <ion-grid class="medium" *ngSwitchCase="\'CashTransactions\'">\n\n            <ion-row>\n\n                <ion-col col-10 text-left>\n\n                    <ion-item>\n\n                        <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DDDD MM YYYY"  [(ngModel)]="cashParams.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n                    </ion-item>\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-10 text-right>\n\n                    <ion-item>\n\n                        <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="cashParams.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <button ion-button icon-only class="filterbtn" (click)="getCashTransactions()">\n\n                        <ion-icon name="arrow-forward"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-list no-padding *ngSwitchCase="\'CashTransactions\'" class="small-font">\n\n            <ion-list-header no-padding>\n\n\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-4 text-left>{{\'app.general.text.date\'|translate}}</ion-col>\n\n                        <ion-col col-4 text-right>{{\'app.general.text.transactiontype\'|translate}}</ion-col>\n\n                        <ion-col col-4 text-right>{{\'app.general.text.amount\'|translate}}</ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n\n\n            </ion-list-header>\n\n\n\n\n\n            <button *ngFor="let row of cashtransactions" no-padding ion-item>\n\n                <ion-grid no-padding>\n\n                    <ion-row>\n\n                        <ion-col col-4 text-left>{{row.TransactionDate|date:\'dd/MM/yyyy HH:mm\'}}</ion-col>\n\n                        <ion-col col-4 text-right>{{row.TransactionType}}</ion-col>\n\n                        <ion-col col-4 text-right class="{{row.Amount|updown}}">{{row.Amount|number:\'.2-2\'}}</ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                </button>\n\n        </ion-list>\n\n\n\n\n\n        <ion-list *ngSwitchCase="\'TransactionHistory\'" class="small-font">\n\n            <ion-list-header no-padding>\n\n\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-4 text-left>{{\'app.general.text.amount\'|translate}}</ion-col>\n\n                        <ion-col col-4 text-center>{{\'app.general.text.lastbalance\'|translate}}</ion-col>\n\n                        <ion-col col-4 text-right>{{\'app.general.text.balance\'|translate}}</ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n\n\n            </ion-list-header>\n\n\n\n            <button *ngFor="let row of transactions" no-padding ion-item (click)="goTransactionDetail(row)">\n\n\n\n                <ion-grid no-padding>\n\n                    <ion-row [ngClass]="{\'down\' : (row.LastBalance>row.Balance), \'up\' : (row.Balance > row.LastBalance)}">\n\n                        <ion-col col-4 text-left>{{row.Amount|number:\'.2-2\'}} {{row.Currency|currencyIcon}}</ion-col>\n\n                        <ion-col col-4 text-center>{{row.LastBalance|number:\'.2-2\'}} {{row.Currency|currencyIcon}}</ion-col>\n\n                        <ion-col col-4 text-right>{{row.Balance|number:\'.2-2\'}} {{row.Currency|currencyIcon}}</ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                \n\n            </button>\n\n        </ion-list>\n\n\n\n\n\n        <ion-list #ticketList *ngSwitchCase="\'Tickets\'" class="ticket-list zebra small-font">\n\n            <ion-list-header no-padding>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col col-3 text-left>{{\'app.general.text.date\'|translate}}</ion-col>\n\n                        <ion-col col-4 text-center>{{\'app.general.text.amount\'|translate}}</ion-col>\n\n                        <ion-col col-1 text-center>{{\'app.general.text.live\'|translate}}</ion-col>\n\n                        <ion-col col-4 text-right>{{\'app.general.text.payout\'|translate}}</ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n\n\n            </ion-list-header>\n\n\n\n            <button *ngFor="let row of tickets" no-padding ion-item [attr.status]="\'st\'+ row.Status | lowercase" (click)="goTicketDetail(row.PlayerId, row.Id)">\n\n            <ion-grid no-padding>\n\n                <ion-row>\n\n                    <ion-col col-3 text-left>{{row.TicketDate|gettime}}</ion-col>\n\n                    <ion-col col-4 text-center>{{row.Stake|number:\'.2-2\'}} {{row.Currency|currencyIcon}}</ion-col>\n\n                    <ion-col col-1 text-center><span class="live-icon" *ngIf="row.IsLive"><img src="/assets/img/icon-live-red.gif" /></span></ion-col>\n\n                    <ion-col col-4 text-right>{{row.Payout|number:\'.2-2\'}} {{row.Currency|currencyIcon}}</ion-col>\n\n                </ion-row>\n\n            </ion-grid>                \n\n        </button>\n\n\n\n\n\n            <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n\n                <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll>\n\n\n\n\n\n        </ion-list>\n\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\player-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_9__providers_partner_service__["a" /* PartnerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_partner_service__["a" /* PartnerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], PlayerDetailPage);
    return PlayerDetailPage;
}());

var PayinPayoutModal = /** @class */ (function () {
    function PayinPayoutModal(params, viewCtrl, navCtrl, partnerService, alertCtrl, toastCtrl, events, translateService, authService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.partnerService = partnerService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.translateService = translateService;
        this.authService = authService;
        this.playerId = this.params.get('playerId');
        this.type = this.params.get('type');
    }
    PayinPayoutModal.prototype.sendAmount = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            if (this.type === 'payin') {
                this.partnerService.playerPayIn({ playerId: this.playerId, amount: this.amount }).then(function (response) {
                    _this.createResponse(response);
                });
            }
            else if (this.type === 'payout') {
                this.partnerService.playerPayOut({ playerId: this.playerId, amount: this.amount }).then(function (response) {
                    _this.createResponse(response);
                });
            }
            else {
                return false;
            }
        }
    };
    PayinPayoutModal.prototype.createResponse = function (response) {
        var _this = this;
        if (response.Status == __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
            var error = this.toastCtrl.create({
                message: response.Message,
                cssClass: 'danger',
                duration: 3000,
                position: 'top'
            });
            error.present();
            return false;
        }
        var successMessage;
        this.translateService.get('app.general.message.success').subscribe(function (v) {
            successMessage = v;
        });
        var alert = this.alertCtrl.create({
            message: successMessage,
            buttons: [{
                    text: 'OK', handler: function () {
                        _this.dismiss();
                        _this.events.publish('player:reload');
                    }
                }]
        });
        alert.present();
    };
    PayinPayoutModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(PlayersPage),
        __metadata("design:type", Object)
    ], PayinPayoutModal.prototype, "playersPage", void 0);
    PayinPayoutModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'payinout-modal',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\player-payinout.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>{{\'app.players.title.deposit_withdraw\'|translate}}</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">{{\'app.btn.cancel\'|translate}}</span>\n\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <form #payinForm="ngForm" novalidate>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label fixed>{{\'app.general.text.amount\'|translate}}</ion-label>\n\n                <ion-input  [(ngModel)]="amount" type="number" name="pamount" required></ion-input>\n\n            </ion-item>\n\n \n\n            <div padding>\n\n                <button ion-button block color="primary" (click)="sendAmount(payinForm)">{{\'app.btn.save\'|translate}}</button>\n\n            </div>\n\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\player-payinout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_partner_service__["a" /* PartnerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* AuthenticationService */]])
    ], PayinPayoutModal);
    return PayinPayoutModal;
}());

/* Login Histroy Detail */
var LoginHistoryModal = /** @class */ (function () {
    function LoginHistoryModal(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.item = params.get('selected');
    }
    LoginHistoryModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginHistoryModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>\n                    {{item.Id}}\n                </ion-title>\n                <ion-buttons start>\n                    <button ion-button (click)=\"dismiss()\">\n                        <span ion-text color=\"primary\" showWhen=\"ios\">{{'app.btn.cancel' | translate}}</span>\n                        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <ion-list>\n                <ion-item>\n                    {{'page.account.loginhistory.browser' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.BrowserFamily}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.device' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.DeviceFamily}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.os' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.OsFamily}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.ip' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.PlayerIpAddress}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.date' | translate}}\n                    <ion-note item-end class=\"color-dark\">{{item.SessionStart}}</ion-note>\n                </ion-item>\n                <ion-item>\n                    {{'page.account.loginhistory.active' | translate}}\n                    <ion-note item-end class=\"color-dark\">\n                        <ion-icon name=\"checkmark-circle\" *ngIf=\"item.IsActive\" color=\"primary\"></ion-icon>\n                        <ion-icon name=\"close-circle\" *ngIf=\"!item.IsActive\" color=\"danger\"></ion-icon>\n                    </ion-note>\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], LoginHistoryModal);
    return LoginHistoryModal;
}());

/* Create New Player */
var NewPlayerForm = /** @class */ (function () {
    function NewPlayerForm(partnerService, nav, navParams, loadingCtrl, toastCtrl, translateService) {
        this.partnerService = partnerService;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.player = {
            type: 'NEW',
            name: '',
            surname: '',
            username: ''
        };
        this.submitted = false;
    }
    NewPlayerForm.prototype.savePlayer = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.partnerService.savePlayer(this.player).then(function (result) {
                loading_1.dismiss();
                if (result.Status == __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                    var error = _this.toastCtrl.create({
                        message: result.Message,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    return false;
                }
                var successMessage;
                _this.translateService.get('app.general.message.success').subscribe(function (v) {
                    successMessage = v;
                });
                var succes = _this.toastCtrl.create({ message: successMessage, duration: 3000 });
                succes.present();
                _this.nav.setRoot(PlayersPage);
            });
        }
    };
    NewPlayerForm.prototype.generateUsername = function (length) {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.player.username = 'P_' + text;
        this.player.name = 'N_' + text;
        this.player.surname = 'S_' + text;
    };
    NewPlayerForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\add.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'app.players.title.add\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <form #playerForm="ngForm" novalidate>\n\n\n\n        <ion-list class="form-list">\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.name\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="player.name" type="text" name="name" #name="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>{{\'app.general.label.name_msg\'|translate}}</p>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.surname\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="player.surname" type="text" name="surname" #surname="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="surname.valid || submitted == false" color="danger" padding-left>{{\'app.general.label.surname_msg\'|translate}}</p>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.username\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="player.username" type="text" #username="ngModel" name="username" spellcheck="false" autocapitalize="off"required></ion-input>                \n\n            </ion-item>\n\n            <p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n                {{\'app.general.label.username_msg\'|translate}}\n\n            </p>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.password\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="player.password" type="text" #password="ngModel" name="password" spellcheck="false" autocapitalize="off" required></ion-input>\n\n            </ion-item>\n\n\n\n            <p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n                {{\'app.general.label.password_msg\'|translate}}\n\n            </p>\n\n \n\n            <div text-center padding>\n\n                <button ion-button type="button" (click)="generateUsername(5)">Generate User</button>\n\n                <button ion-button type="submit" (click)="savePlayer(playerForm)" padding text-center>{{\'app.btn.save\'|translate}}</button>\n\n            </div>\n\n\n\n        </ion-list>\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_partner_service__["a" /* PartnerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], NewPlayerForm);
    return NewPlayerForm;
}());

/* Edit Player */
var EditPlayerForm = /** @class */ (function () {
    function EditPlayerForm(partnerService, nav, navParams, loadingCtrl, toastCtrl, translateService) {
        this.partnerService = partnerService;
        this.nav = nav;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.player = {
            name: null,
            surname: null,
            active: true,
            type: 'EDIT'
        };
        this.submitted = false;
        this.playerId = navParams.get('id');
        this.getUser();
    }
    EditPlayerForm.prototype.getUser = function () {
        var _this = this;
        this.partnerService.getPartnerPlayer(this.playerId).then(function (response) {
            if (response.Status == __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                var msg_6;
                _this.translateService.get(response.Message).subscribe(function (value) {
                    msg_6 = value;
                });
                var error = _this.toastCtrl.create({ message: msg_6, cssClass: 'danger', duration: 3000, position: 'top' });
                error.present();
                return false;
            }
            _this.player.name = response.Name;
            _this.player.surname = response.Surname;
            _this.player.active = response.IsActive;
        });
    };
    EditPlayerForm.prototype.savePlayer = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_2 = this.loadingCtrl.create();
            loading_2.present();
            this.partnerService.saveEditPlayer(this.player).then(function (result) {
                loading_2.dismiss();
                if (result.Status == __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                    var error = _this.toastCtrl.create({
                        message: result.Message,
                        cssClass: 'danger',
                        duration: 3000,
                        position: 'top'
                    });
                    error.present();
                    return false;
                }
                var successMessage;
                _this.translateService.get('app.general.message.success').subscribe(function (v) {
                    successMessage = v;
                });
                var succes = _this.toastCtrl.create({ message: successMessage, duration: 3000 });
                succes.present();
                _this.nav.push(PlayerDetailPage, { id: _this.playerId });
            });
        }
    };
    EditPlayerForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\edit.html"*/'<ion-header>\n\n    <ion-navbar>\n\n\n\n        <ion-title>{{\'app.players.title.edit\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <form #playerForm="ngForm" novalidate>\n\n\n\n        <ion-list class="form-list">\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.name\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="player.name" type="text" name="name" #name="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>{{\'app.general.label.name_msg\'|translate}}</p>\n\n\n\n            <ion-item>\n\n                <ion-label floating primary>{{\'app.general.label.surname\'|translate}}</ion-label>\n\n                <ion-input [(ngModel)]="player.surname" type="text" name="surname" #surname="ngModel" spellcheck="false" autocapitalize="off" required></ion-input>\n\n            </ion-item>\n\n            <p ion-text [hidden]="surname.valid || submitted == false" color="danger" padding-left>{{\'app.general.label.surname_msg\'|translate}}</p>\n\n\n\n\n\n            <ion-item>\n\n                <ion-label>{{\'app.general.label.active\'|translate}}</ion-label>\n\n                <ion-checkbox [(ngModel)]="player.active" name="active"></ion-checkbox>\n\n            </ion-item>\n\n\n\n            <div text-center padding>\n\n                <button ion-button type="submit" (click)="savePlayer(playerForm)" padding text-center>{{\'app.btn.save\'|translate}}</button>\n\n            </div>\n\n\n\n        </ion-list>\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_partner_service__["a" /* PartnerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], EditPlayerForm);
    return EditPlayerForm;
}());

/* Change Password */
var ChangePlayerPasswordPage = /** @class */ (function () {
    function ChangePlayerPasswordPage(params, viewCtrl, authService, toastCtrl, alertCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.playerId = this.params.get('playerId');
        console.log(this.playerId);
    }
    ChangePlayerPasswordPage.prototype.changePassword = function (newpass) {
        var _this = this;
        this.authService.changePlayerPassword(this.playerId, newpass).then(function (response) {
            if (response.Status == __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                var error = _this.toastCtrl.create({
                    message: response.Message,
                    cssClass: 'danger',
                    duration: 3000,
                    position: 'top'
                });
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
    ChangePlayerPasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ChangePlayerPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\change_password.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>{{\'page.changepassword.title\'|translate}}</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios">{{\'app.btn.cancel\'|translate}}</span>\n\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label fixed>{{\'page.changepassword.label.newpassword\'|translate}}</ion-label>\n\n            <ion-input #password type="password" required></ion-input>\n\n        </ion-item>\n\n\n\n        <div padding>\n\n            <button ion-button block color="primary" (click)="changePassword(password.value)">{{\'app.btn.save\'|translate}}</button>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\players\change_password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChangePlayerPasswordPage);
    return ChangePlayerPasswordPage;
}());

//# sourceMappingURL=players.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TicketsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TicketsDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_tickets_service__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Rxjs_rx__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_Rxjs_rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
        this.searchParams.startDate = __WEBPACK_IMPORTED_MODULE_4_moment__().add(-1, 'days').format('YYYY-MM-DD');
        this.searchParams.endDate = __WEBPACK_IMPORTED_MODULE_4_moment__().add(1, 'days').format('YYYY-MM-DD');
        this.getTickets();
        this.observableVar = __WEBPACK_IMPORTED_MODULE_8_Rxjs_rx__["Observable"].interval(30000).subscribe(function () {
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
            if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
                if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                    var msg_2;
                    _this.translateService.get(response.Message).subscribe(function (value) { msg_2 = value; });
                    var error = _this.toastCtrl.create({ message: msg_2, cssClass: 'danger', duration: 3000, position: 'top' });
                    error.present();
                    if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_UNAUTH) {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tickets',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\tickets\tickets.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'app.tickets.title\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content refreshingText="{{\'app.general.text.loading\'|translate}}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <ion-list #ticketList *ngIf="tickets" class="ticket-list zebra medium-font">\n\n        <ion-list-header no-padding>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-3 text-left>{{\'app.general.text.player\'|translate}}</ion-col>\n\n                    <ion-col col-4 text-left>{{\'app.general.text.date\'|translate}}</ion-col>\n\n                    <ion-col col-3 text-left>{{\'app.general.text.amount\'|translate}}</ion-col>\n\n                    <ion-col col-2 text-center>{{\'app.general.text.live\'|translate}}</ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-list-header>\n\n\n\n        <button *ngFor="let row of tickets" no-padding ion-item [attr.status]="\'st\'+ row.Status | lowercase" (click)="goDetail(row.PlayerId, row.Id)">\n\n            <ion-grid no-padding>\n\n                <ion-row>\n\n                    <ion-col col-3 text-left class="ellipsis">{{row.Player}}</ion-col>\n\n                    <ion-col col-4 text-left>{{row.TicketDate|gettime}}</ion-col>\n\n                    <ion-col col-3 text-left>{{row.Stake|number:\'.2-2\'}}{{row.Currency|currencyIcon}}</ion-col>\n\n                    <ion-col col-2 text-right><span class="live-icon" *ngIf="row.IsLive"><img src="/assets/img/icon-live-red.gif" /></span></ion-col>\n\n                </ion-row>\n\n            </ion-grid>                \n\n        </button>\n\n\n\n        <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n\n\n    </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\tickets\tickets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_tickets_service__["a" /* TicketService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], TicketsPage);
    return TicketsPage;
}());

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
                            if (response.Status === __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ticketdetail',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\tickets\ticket_detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{\'app.tickets.title.detail\'|translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="ticket-details-page" *ngIf="ticket">\n\n        <ion-list class="ticket-summary">\n\n            <ion-list-header>\n\n                {{\'app.tickets.title.ticketinfo\'|translate}}\n\n                <button *ngIf="canCancelTicket" ion-button color="danger" (click)="cancelTicket(ticket.TicketId)" icon-left item-end>\n\n                    <ion-icon name="power"></ion-icon>{{\'app.btn.cancel_ticket\' | translate}}\n\n                </button>\n\n            </ion-list-header> \n\n            <ion-item>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.ticketno\'|translate}} :</span> {{ticket.TicketId}}\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.partner\'|translate}} :</span> {{ticket.Partner}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.ticket_date\'|translate}} :</span> {{ticket.TicketDate | date:\'dd/MM/yyyy\n\n                            HH:mm\'}}\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.player\'|translate}} :</span> {{ticket.Player}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.amount\'|translate}} :</span> {{ticket.Stake}}\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <div *ngIf="!canViewCountry"><span>{{\'app.tickets.label.ip\'|translate}} :</span> {{ticket.PlayerIp}}</div>\n\n                            <div *ngIf="canViewCountry"><span>{{\'app.tickets.label.country\'|translate}} :</span> <span class="text-danger">{{ticket.CountryName}}</span></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.stakeperbet\'|translate}} :</span> {{ticket.StakePerbet}}\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.currency\'|translate}} :</span> {{ticket.Currency}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.payout\'|translate}} :</span> {{ticket.Payout}}\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.status\'|translate}} :</span> {{ticket.Status}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n\n\n                    <ion-row *ngIf="ticket.IsSystem">\n\n                        <ion-col>\n\n                            <span>{{\'app.tickets.label.system\'|translate}} :</span> {{ticket.System}} / {{ticket.BetCount}}\n\n                        </ion-col>\n\n                        <ion-col></ion-col>\n\n                    </ion-row>\n\n\n\n\n\n                </ion-grid>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n\n\n        <ion-list no-margin>\n\n            <ion-list-header>{{\'app.tickets.title.teams\'|translate}}</ion-list-header>\n\n\n\n            <ion-item *ngFor="let row of ticket.Details" class="ticket-item">\n\n\n\n                <div class="ticket-detail">\n\n\n\n                    <div class="tournament-info">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-9>\n\n                                    <div class="tournament-name">{{row.Tournament}}</div>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-right class="status">\n\n                                    <span class="status text-center ts-st{{row.DStatus}}">{{row.Status}}</span>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div>\n\n                    <div class="match-info">\n\n                        <h3 text-center>{{row.Teams}}</h3>\n\n                        <div class="sub-details">\n\n\n\n                            <ion-grid>\n\n                                <ion-row>\n\n                                    <ion-col col-4 class="ellipsis">\n\n                                        {{\'app.tickets.title.date\'|translate}} <br />{{row.MatchDate | date:\'dd/MM/yyyy HH:mm\'}}\n\n                                    </ion-col>\n\n                                    <ion-col col-2 text-center class="isLive">\n\n                                        {{\'app.tickets.title.live\'|translate}} <br />\n\n                                        <ion-icon name="checkmark" color="primary" *ngIf="row.Live"></ion-icon>\n\n                                        <ion-icon name="close" color="danger" *ngIf="!row.Live"></ion-icon>\n\n                                    </ion-col>\n\n                                    <ion-col col-2 text-center>\n\n                                        {{\'app.tickets.title.oddsvalue\'|translate}} <br />{{row.OddsValue}}\n\n                                    </ion-col>\n\n                                    <ion-col col-2 text-center>\n\n                                        {{\'app.tickets.title.bet\'|translate}} <br /> <span class="elliptis">{{row.OddsType}}</span>\n\n                                    </ion-col>\n\n                                    <ion-col col-2 text-center>\n\n                                        {{\'app.tickets.title.wager\'|translate}} <br /> {{row.Outcome}}\n\n                                    </ion-col>\n\n                                </ion-row>\n\n                            </ion-grid>\n\n\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\tickets\ticket_detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_tickets_service__["a" /* TicketService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_data__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], TicketsDetailPage);
    return TicketsDetailPage;
}());

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
        this.filterSettings.startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(filter.startDate).format('YYYY-MM-DD');
        this.filterSettings.endDate = __WEBPACK_IMPORTED_MODULE_4_moment__(filter.endDate).format('YYYY-MM-DD');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ticket-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\tickets\ticket_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>{{\'app.tickets.label.ticketno\'|translate}}:</ion-label>\n\n            <ion-input [(ngModel)]="filterSettings.ticketId" type="number"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.player\'|translate}}:</ion-label>\n\n            <ion-input [(ngModel)]="filterSettings.username" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>{{\'app.general.text.minamount\'|translate}}:</ion-label>\n\n                        <ion-input [(ngModel)]="filterSettings.minStake" type="number"></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>{{\'app.general.text.maxamount\'|translate}}:</ion-label>\n\n                        <ion-input [(ngModel)]="filterSettings.maxStake" type="number"></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>{{\'app.general.text.minpayout\'|translate}}:</ion-label>\n\n                        <ion-input [(ngModel)]="filterSettings.minPayout" type="number"></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-item>\n\n                        <ion-label>{{\'app.general.text.maxpayout\'|translate}}:</ion-label>\n\n                        <ion-input [(ngModel)]="filterSettings.maxPayout" type="number"></ion-input>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.status\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.status">\n\n                <ion-option value="">{{\'app.general.text.all\'|translate}}</ion-option>\n\n                <ion-option value="21">{{\'app.tickets.status.open\'|translate}}</ion-option>\n\n                <ion-option value="23">{{\'app.tickets.status.won\'|translate}}</ion-option>\n\n                <ion-option value="24">{{\'app.tickets.status.void\'|translate}}</ion-option>\n\n                <ion-option value="25">{{\'app.tickets.status.lost\'|translate}}</ion-option>\n\n                <ion-option value="20">{{\'app.tickets.status.waiting\'|translate}}</ion-option>\n\n                <ion-option value="22">{{\'app.tickets.status.cancel\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.live\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.live">\n\n                <ion-option value="">{{\'app.general.text.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.general.text.only_live\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.general.text.only_prematch\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.direct\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.direct">\n\n                <ion-option value="">{{\'app.general.text.allplayer\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.general.text.only_myplayer\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\tickets\ticket_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */]])
    ], TicketFilterPage);
    return TicketFilterPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TicketService = /** @class */ (function () {
    function TicketService(requestService, translate) {
        this.requestService = requestService;
        this.translate = translate;
        this.lang = this.translate.currentLang;
    }
    TicketService.prototype.getAll = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'ticketsearch?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    TicketService.prototype.getTicket = function (playerId, ticketId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'ticketdetail?lang=' + this.lang + '&playerId=' + playerId + '&ticketId=' + ticketId)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    TicketService.prototype.cancelTicket = function (ticketId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_1__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'ticketcancel?ticketId=' + ticketId)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    TicketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__request__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], TicketService);
    return TicketService;
}());

//# sourceMappingURL=tickets-service.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReportsPlayerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPlayerFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







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
        var startDate = __WEBPACK_IMPORTED_MODULE_5_moment__().isoWeekday(2).format('YYYY-MM-DD');
        var endDate = __WEBPACK_IMPORTED_MODULE_5_moment__().add(1, 'weeks').isoWeekday(2).format('YYYY-MM-DD');
        if (__WEBPACK_IMPORTED_MODULE_5_moment__().isoWeekday() === 1) {
            startDate = __WEBPACK_IMPORTED_MODULE_5_moment__().isoWeekday(-5).format('YYYY-MM-DD');
            endDate = __WEBPACK_IMPORTED_MODULE_5_moment__().add(1, 'days').format('YYYY-MM-DD');
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
            if (response.Status === __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
            if (response.Status === __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
            if (response.Status === __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
            if (response.Status === __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
            if (response.Status === __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-player-reports',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsplayer\reports.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{\'app.playerreport.title\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="presentFilter()">\n\n                <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n\n\n\n\n    <ion-toolbar>\n\n        <ion-segment [(ngModel)]="userSegment">\n\n            <ion-segment-button value="generalreport" (ionSelect)="getGeneralReports()"><span [translate]="\'app.menu.reports.generalreport\'"></span></ion-segment-button>\n\n            <ion-segment-button value="betreport" (ionSelect)="getReports()"><span [translate]="\'app.menu.reports.betreport\'"></span></ion-segment-button>\n\n            <ion-segment-button value="casinoreport" (ionSelect)="getCasinoReports()"><span [translate]="\'app.menu.reports.casinoreport\'"></span></ion-segment-button>\n\n            <ion-segment-button value="livecasinoreport" (ionSelect)="getLiveCasinoReports()"><span [translate]="\'app.menu.reports.livecasinoreport\'"></span></ion-segment-button>\n\n            <ion-segment-button value="tombalareport" (ionSelect)="getTombalaReports()"><span [translate]="\'app.menu.reports.tombalareport\'"></span></ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div class="page-content" [ngSwitch]="userSegment">\n\n\n\n\n\n        \n\n        <div *ngIf="glists">\n\n            <ion-list class="normal-font" *ngSwitchCase="\'generalreport\'">\n\n                <ion-item *ngFor="let item of glists">\n\n                    <div class="note-item">\n\n                        <ion-grid>\n\n                            <ion-row class="partner-title">\n\n                                <ion-col text-center>{{ item.Username }}</ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.bet\'|translate}}</span><br />{{item.Bet|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.livecasino\'|translate}}</span><br />{{ item.LiveCasino|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.slot\'|translate}}</span><br />{{ item.Casino|number:\'.2-2\'}}</ion-col>\n\n                            </ion-row>\n\n							<ion-row>\n\n								<ion-col col-4 text-left><span>{{\'app.general.text.tombala\'|translate}}</span><br />{{ item.Tombala|number:\'.2-2\'}}</ion-col>\n\n								<ion-col col-4 text-left><span>{{\'app.general.text.total\'|translate}}</span><br />{{ item.Total|number:\'.2-2\'}}</ion-col>\n\n								<ion-col col-4 text-left><span>{{\'app.general.text.fee\'|translate}}</span><br />{{ item.Fee|number:\'.2-2\'}}</ion-col>\n\n							</ion-row>\n\n                        </ion-grid>\n\n                    </div>\n\n                </ion-item> \n\n            </ion-list>\n\n        </div>\n\n\n\n\n\n\n\n        <div *ngIf="lists">\n\n            <ion-list class="normal-font" *ngSwitchCase="\'betreport\'">\n\n                <ion-item *ngFor="let item of lists">\n\n                    <div class="note-item">\n\n                        <ion-grid>\n\n                            <ion-row class="partner-title">\n\n                                <ion-col text-center>{{ item.Username }}</ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.balance\'|translate}}</span><br />{{item.Balance|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.deposit_amount\'|translate}}</span><br />{{ item.Stake|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.deposit\'|translate}}</span><br />{{ item.TotalDeposit }}</ion-col>\n\n                            </ion-row>\n\n							<ion-row>\n\n								<ion-col col-3 text-left><span>{{\'app.general.text.payout\'|translate}}</span><br />{{ item.Payout|number:\'.2-2\'}}</ion-col>\n\n								<ion-col col-3 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ item.Hold|number:\'.2-2\'}}</ion-col>\n\n								<ion-col col-3 text-left><span>{{\'app.general.text.deposit\'|translate}}</span><br />{{ item.TotalDeposit }}</ion-col>\n\n								<ion-col col-3 text-left><span>{{\'app.general.text.fee\'|translate}}</span><br />{{ item.Fee|number:\'.2-2\'}}</ion-col>\n\n							</ion-row>\n\n                        </ion-grid>\n\n                    </div>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n\n\n\n\n\n\n        <div *ngIf="casinolist">\n\n            <ion-list class="normal-font" *ngSwitchCase="\'casinoreport\'">\n\n                <ion-item *ngFor="let item of casinolist">\n\n                    <div class="note-item">\n\n                        <ion-grid>\n\n                            <ion-row class="partner-title">\n\n                                <ion-col text-center>{{ item.Username }}</ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.balance\'|translate}}</span><br />{{item.Balance|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.spin_count\'|translate}}</span><br />{{ item.SpinCount }}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.turnover\'|translate}}</span><br />{{ item.Turnover|number:\'.2-2\'}}</ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.payout\'|translate}}</span><br />{{ item.Payout|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ item.Hold|number:\'.2-2\'}}</ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n\n\n\n\n\n\n        <div *ngIf="livecasinolist">\n\n            <ion-list class="normal-font" *ngSwitchCase="\'livecasinoreport\'">\n\n                <ion-item *ngFor="let item of livecasinolist">\n\n                    <div class="note-item">\n\n                        <ion-grid>\n\n                            <ion-row class="partner-title">\n\n                                <ion-col text-center>{{ item.Username }}</ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.balance\'|translate}}</span><br />{{item.Balance|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.turnover\'|translate}}</span><br />{{ item.Turnover|number:\'.2-2\'}}</ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.payout\'|translate}}</span><br />{{ item.Payout|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ item.Hold|number:\'.2-2\'}}</ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n\n\n\n\n\n\n        <div *ngIf="tombalalist">\n\n            <ion-list class="normal-font" *ngSwitchCase="\'tombalareport\'">\n\n                <ion-item *ngFor="let item of tombalalist">\n\n                    <div class="note-item">\n\n                        <ion-grid>\n\n                            <ion-row class="partner-title">\n\n                                <ion-col text-center>{{ item.Username }}</ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.balance\'|translate}}</span><br />{{item.Balance|number:\'.2-2\'}}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.cardcount\'|translate}}</span><br />{{ item.CardCount }}</ion-col>\n\n                                <ion-col col-4 text-left><span>{{\'app.general.text.profit\'|translate}}</span><br />{{ item.Amount|number:\'.2-2\'}}</ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div>\n\n                </ion-item>\n\n            </ion-list>\n\n        </div>\n\n\n\n\n\n\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsplayer\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_reports_service__["a" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ReportsPlayerPage);
    return ReportsPlayerPage;
}());

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reportplayer-filter',template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsplayer\reports_filter.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">{{\'app.btn.cancel\'|translate}}</button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>{{\'app.general.text.filtre\'|translate}}</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button (click)="applyFilters()" strong>{{\'app.btn.apply\'|translate}}</button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.startdate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.startDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.text.enddate\'|translate}}:</ion-label>\n\n            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="filterSettings.endDate" cancelText="{{\'app.btn.cancel\'|translate}}" doneText="{{\'app.btn.ok\'|translate}}"></ion-datetime>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'app.general.label.active\'|translate}}:</ion-label>\n\n            <ion-select [(ngModel)]="filterSettings.onlyActive">\n\n                <ion-option value="" selected>{{\'app.options.item.all\'|translate}}</ion-option>\n\n                <ion-option value="true">{{\'app.options.item.only_active\'|translate}}</ion-option>\n\n                <ion-option value="false">{{\'app.options.item.only_passive\'|translate}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\pages\reportsplayer\reports_filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */]])
    ], ReportPlayerFilterPage);
    return ReportPlayerFilterPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(613);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




//rxjs promises cause angular http return observable natively.


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(events, storage, requestService) {
        this.events = events;
        this.storage = storage;
        this.requestService = requestService;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    AuthenticationService.prototype.login = function (username, password, lang) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get('/Home/Login?username=' + username + '&password=' + password + '&lang=' + lang)];
                    case 1:
                        data = _a.sent();
                        this.storage.set('user', data.Data);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.getbalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getbalance')];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.userLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'getsession')];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_OK) {
                            this.storage.remove('user');
                            return [2 /*return*/, data];
                        }
                        this.storage.set('user', data.Data);
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.getUserLogins = function (start, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'loginhistory?start=' + start + '&limit=' + limit)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.getUserTransactions = function (start, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'transactionhistory?start=' + start + '&limit=' + limit)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.changePassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'changemypassword?password=' + password)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.changePartnerPassword = function (partnerId, password) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'changemypassword?partnerId=' + partnerId + '&password=' + password)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.changePlayerPassword = function (playerId, password) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'changeplayerpassword?playerId=' + playerId + '&password=' + password)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.remove(this.HAS_LOGGED_IN);
                        this.storage.remove('user');
                        this.events.publish('user:logout');
                        return [4 /*yield*/, this.requestService.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'logout')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.getLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('lang').then(function (lang) {
                            if (lang) {
                                return lang;
                            }
                            else {
                                var userLang = navigator.language.split('-')[0];
                                userLang = /(de|en|tr)/gi.test(userLang) ? userLang : 'tr';
                                return userLang;
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    AuthenticationService.prototype.getUserCanCountryView = function () {
        return this.storage.get('user').then(function (value) {
            if (value)
                return value.CanViewCountry;
        });
    };
    ;
    AuthenticationService.prototype.getUserTicketCancelPermission = function () {
        return this.storage.get('user').then(function (value) {
            if (value)
                return value.CanCancelTicket;
        });
    };
    ;
    AuthenticationService.prototype.getCanCreatePartner = function () {
        return this.storage.get('user').then(function (value) {
            if (value)
                return value.CanCreatePartner;
        });
    };
    ;
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__request__["a" /* RequestService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_request__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_partner_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_tickets_service__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_players_players__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_reportsbet_reports__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reportscasino_reports__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_reportslivecasino_reports__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_reportstombala_reports__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_reports_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_general__ = __webpack_require__(1128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_reportsplayer_reports__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_reportsgeneral_reports__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_reportsbettwo_reports__ = __webpack_require__(1130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_reportsnew_reports__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_brmasker_ionic_3__ = __webpack_require__(1132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* enableProdMode */])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* PartnerApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["c" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["b" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["d" /* TransactionDetail */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["e" /* PartnersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["a" /* ChangePartnerPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["c" /* NewPartnerForm */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["b" /* EditPartnerForm */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["d" /* PartnerProductPermits */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["c" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["b" /* TicketsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["a" /* TicketFilterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["i" /* PlayersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["h" /* PlayersFilterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["d" /* NewPlayerForm */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["b" /* EditPlayerForm */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["e" /* PayinPayoutModal */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["f" /* PlayerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["a" /* ChangePlayerPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["c" /* LoginHistoryModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_reportsgeneral_reports__["b" /* GeneralReportsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_reportsgeneral_reports__["a" /* GeneralReportFilterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_reportsbet_reports__["a" /* BetReportsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_reportsbet_reports__["b" /* ReportBetFilterPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reportscasino_reports__["b" /* ReportCasinoFilterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_reportslivecasino_reports__["b" /* ReportLiveCasinoFilterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_reportstombala_reports__["a" /* ReportTombalaFilterPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reportscasino_reports__["a" /* CasinoReportsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_reportslivecasino_reports__["a" /* LiveCasinoReportsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_reportstombala_reports__["b" /* TombalaReportsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reportsplayer_reports__["b" /* ReportsPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reportsplayer_reports__["a" /* ReportPlayerFilterPage */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_general__["a" /* CurrencyIconPipe */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_general__["b" /* GetTimePipe */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_general__["c" /* UpDownPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["g" /* PlayerProductPermits */],
                __WEBPACK_IMPORTED_MODULE_30__pages_reportsbettwo_reports__["a" /* BetReportsTwoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_reportsbettwo_reports__["b" /* ReportBetTwoFilterPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_reportsnew_reports__["a" /* ReportsNew */],
                __WEBPACK_IMPORTED_MODULE_31__pages_reportsnew_reports__["b" /* ReportsNewFilter */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_5_angular_tree_component__["a" /* TreeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* PartnerApp */], {
                    backButtonText: ' ',
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["e" /* PartnersPage */], name: 'PartnersPage', segment: 'partners' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["c" /* NewPartnerForm */], name: 'NewPartnerForm', segment: 'partners/new-partner' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["b" /* EditPartnerForm */], name: 'EditPartnerForm', segment: 'partners/edit-partner/:id' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["b" /* ChangePasswordPage */], name: 'ChangePassword', segment: 'account/changepassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["c" /* TicketsPage */], name: 'TicketsPage', segment: 'tickets' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["b" /* TicketsDetailPage */], name: 'TicketDetails', segment: 'tickets/detail/:playerid/:id' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["i" /* PlayersPage */], name: 'PlayersPage', segment: 'players' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["d" /* NewPlayerForm */], name: 'NewPlayerForm', segment: 'players/add' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["b" /* EditPlayerForm */], name: 'EditPlayerForm', segment: 'players/edit/:id' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["f" /* PlayerDetailPage */], name: 'PlayerDetailPage', segment: 'players/detail/:id' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_29__pages_reportsgeneral_reports__["b" /* GeneralReportsPage */], name: 'GeneralReportsPage', segment: 'generalreports' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_reportsbet_reports__["a" /* BetReportsPage */], name: 'BetReportsPage', segment: 'reports' },
                        { component: __WEBPACK_IMPORTED_MODULE_30__pages_reportsbettwo_reports__["a" /* BetReportsTwoPage */], name: 'BetReportsTwoPage', segment: 'reportstwo' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_reportsplayer_reports__["b" /* ReportsPlayerPage */], name: 'ReportsPlayerPage', segment: 'reports/player-reports' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_reportscasino_reports__["a" /* CasinoReportsPage */], name: 'CasinoReportsPage', segment: 'reports/casino' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_reportslivecasino_reports__["a" /* LiveCasinoReportsPage */], name: 'LiveCasinoReportsPage', segment: 'reports/livecasino' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_reportstombala_reports__["b" /* TombalaReportsPage */], name: 'TombalaReportsPage', segment: 'reports/tombala' },
                        { component: __WEBPACK_IMPORTED_MODULE_31__pages_reportsnew_reports__["a" /* ReportsNew */], name: 'ReportsNew', segment: 'reportsnew' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* PartnerApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["c" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["b" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["d" /* TransactionDetail */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["e" /* PartnersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["a" /* ChangePartnerPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["c" /* NewPartnerForm */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["b" /* EditPartnerForm */],
                __WEBPACK_IMPORTED_MODULE_15__pages_partners_partners__["d" /* PartnerProductPermits */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["c" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["b" /* TicketsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tickets_tickets__["a" /* TicketFilterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["i" /* PlayersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["h" /* PlayersFilterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["e" /* PayinPayoutModal */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["d" /* NewPlayerForm */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["b" /* EditPlayerForm */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["f" /* PlayerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["g" /* PlayerProductPermits */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["a" /* ChangePlayerPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_players_players__["c" /* LoginHistoryModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_reportsgeneral_reports__["b" /* GeneralReportsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_reportsgeneral_reports__["a" /* GeneralReportFilterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_reportsbet_reports__["a" /* BetReportsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_reportsbet_reports__["b" /* ReportBetFilterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_reportslivecasino_reports__["b" /* ReportLiveCasinoFilterPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reportscasino_reports__["b" /* ReportCasinoFilterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_reportstombala_reports__["a" /* ReportTombalaFilterPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reportscasino_reports__["a" /* CasinoReportsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_reportslivecasino_reports__["a" /* LiveCasinoReportsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reportsplayer_reports__["b" /* ReportsPlayerPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reportsplayer_reports__["a" /* ReportPlayerFilterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_reportstombala_reports__["b" /* TombalaReportsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_reportsbettwo_reports__["a" /* BetReportsTwoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_reportsbettwo_reports__["b" /* ReportBetTwoFilterPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_reportsnew_reports__["a" /* ReportsNew */],
                __WEBPACK_IMPORTED_MODULE_31__pages_reportsnew_reports__["b" /* ReportsNewFilter */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_user_data__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__providers_request__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_partner_service__["a" /* PartnerService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_tickets_service__["a" /* TicketService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_reports_service__["a" /* ReportsService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



//rxjs promises cause angular http return observable natively.


var RequestService = /** @class */ (function () {
    function RequestService(events, storage, http) {
        this.events = events;
        this.storage = storage;
        this.http = http;
    }
    RequestService.prototype.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RequestService.prototype.post = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(url, {}).toPromise()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RequestService.prototype.ipost = function (url, params) {
        return __awaiter(this, void 0, void 0, function () {
            var body, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = JSON.stringify(params);
                        return [4 /*yield*/, this.http.post(url, body).toPromise()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], RequestService);
    return RequestService;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_players_players__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reportsplayer_reports__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_toast_toast_controller__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PartnerApp = /** @class */ (function () {
    function PartnerApp(events, AuthenticationService, menu, statusBar, platform, storage, splashScreen, translate, toastCtrl) {
        var _this = this;
        this.events = events;
        this.AuthenticationService = AuthenticationService;
        this.menu = menu;
        this.statusBar = statusBar;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'app.menu.account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'contact' },
            { title: 'app.menu.players', name: 'PlayersPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_players_players__["i" /* PlayersPage */], icon: 'people' }
        ];
        this.appReports = [
            // { title: 'app.menu.reports.betreport', name: 'BetReportsPage', component: BetReportsPage, icon: 'stats' },
            { title: 'app.menu.reports.playerreport', name: 'ReportsPlayerPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_reportsplayer_reports__["b" /* ReportsPlayerPage */], icon: 'easel' }
        ];
        this.appOthers = [
            { title: 'app.menu.logout', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-out', logsOut: true }
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */];
        __WEBPACK_IMPORTED_MODULE_9_moment__["locale"]('tr');
        this.translate.setDefaultLang('tr');
        AuthenticationService.getLanguage().then(function (r) {
            _this.lang = r;
            var days = new Array();
            days['tr'] = 'Bugün';
            days['en'] = 'Today';
            days['de'] = 'Heute';
            translate.use(_this.lang);
            __WEBPACK_IMPORTED_MODULE_9_moment__["updateLocale"]('tr', {
                calendar: {
                    sameDay: '[' + days[_this.lang] + '] LT'
                }
            });
        });
        // load the conference data  
        //confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.AuthenticationService.userLoggedIn().then(function (result) {
            if (result.Status === __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* AppSettings */].REST_STATUS_ERROR) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                _this.enableMenu(false);
                // let error = this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                // error.present();
                return false;
            }
            else {
                _this.canCreatePartner = result.CanCreatePartner;
                if (!_this.canCreatePartner) {
                    _this.appPages.splice(1, 1);
                }
                _this.enableMenu(true);
            }
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
        this.platformReady();
    }
    PartnerApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
            // Set the root of the nav with params if it's a tab index
        }
        else {
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.AuthenticationService.logout().then(function (respons) {
                console.log(respons);
            });
        }
    };
    PartnerApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    PartnerApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    PartnerApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    PartnerApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]) === "function" && _a || Object)
    ], PartnerApp.prototype, "nav", void 0);
    PartnerApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\app\app.template.html"*/'<ion-split-pane>\n\n    <!-- logged out menu -->\n\n    <ion-menu id="loggedInMenu1" [content]="content">\n\n        <ion-header>\n\n            <ion-toolbar>\n\n                <ion-title><img class="pinolo-leftside-logo" src="assets/img/appicon.svg" alt="Pinolo Partner"></ion-title>\n\n            </ion-toolbar>\n\n        </ion-header>\n\n        <ion-content class="outer-content">\n\n\n\n            <ion-list>\n\n                <ion-list-header>{{\'app.menu.root\'|translate}}</ion-list-header>\n\n                <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n\n                  <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> {{p.title|translate}}\n\n                </button>\n\n            </ion-list>\n\n\n\n            <ion-list>\n\n                <ion-list-header>{{\'app.menu.reports\'|translate}}</ion-list-header>\n\n                <button ion-item menuClose *ngFor="let p of appReports" (click)="openPage(p)">\n\n                  <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>{{p.title|translate}}\n\n                </button>\n\n            </ion-list>\n\n\n\n\n\n            <ion-list>\n\n                <ion-list-header>{{\'app.menu.other\'|translate}}</ion-list-header>\n\n                <button ion-item menuClose *ngFor="let p of appOthers" (click)="openPage(p)">\n\n                  <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> {{p.title|translate}}\n\n                </button>\n\n            </ion-list>\n\n\n\n        </ion-content>\n\n\n\n    </ion-menu>\n\n    \n\n\n\n    <!-- main navigation -->\n\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\sehran.a\Documents\MyFIles\Game\Affiliate\Megma.Partner.MobileApp\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_user_data__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_user_data__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_toast_toast_controller__["a" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]) === "function" && _k || Object])
    ], PartnerApp);
    return PartnerApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 365,
	"./af.js": 365,
	"./ar": 366,
	"./ar-dz": 367,
	"./ar-dz.js": 367,
	"./ar-kw": 368,
	"./ar-kw.js": 368,
	"./ar-ly": 369,
	"./ar-ly.js": 369,
	"./ar-ma": 370,
	"./ar-ma.js": 370,
	"./ar-sa": 371,
	"./ar-sa.js": 371,
	"./ar-tn": 372,
	"./ar-tn.js": 372,
	"./ar.js": 366,
	"./az": 373,
	"./az.js": 373,
	"./be": 374,
	"./be.js": 374,
	"./bg": 375,
	"./bg.js": 375,
	"./bm": 376,
	"./bm.js": 376,
	"./bn": 377,
	"./bn.js": 377,
	"./bo": 378,
	"./bo.js": 378,
	"./br": 379,
	"./br.js": 379,
	"./bs": 380,
	"./bs.js": 380,
	"./ca": 381,
	"./ca.js": 381,
	"./cs": 382,
	"./cs.js": 382,
	"./cv": 383,
	"./cv.js": 383,
	"./cy": 384,
	"./cy.js": 384,
	"./da": 385,
	"./da.js": 385,
	"./de": 386,
	"./de-at": 387,
	"./de-at.js": 387,
	"./de-ch": 388,
	"./de-ch.js": 388,
	"./de.js": 386,
	"./dv": 389,
	"./dv.js": 389,
	"./el": 390,
	"./el.js": 390,
	"./en-au": 391,
	"./en-au.js": 391,
	"./en-ca": 392,
	"./en-ca.js": 392,
	"./en-gb": 393,
	"./en-gb.js": 393,
	"./en-ie": 394,
	"./en-ie.js": 394,
	"./en-il": 395,
	"./en-il.js": 395,
	"./en-nz": 396,
	"./en-nz.js": 396,
	"./eo": 397,
	"./eo.js": 397,
	"./es": 398,
	"./es-do": 399,
	"./es-do.js": 399,
	"./es-us": 400,
	"./es-us.js": 400,
	"./es.js": 398,
	"./et": 401,
	"./et.js": 401,
	"./eu": 402,
	"./eu.js": 402,
	"./fa": 403,
	"./fa.js": 403,
	"./fi": 404,
	"./fi.js": 404,
	"./fo": 405,
	"./fo.js": 405,
	"./fr": 406,
	"./fr-ca": 407,
	"./fr-ca.js": 407,
	"./fr-ch": 408,
	"./fr-ch.js": 408,
	"./fr.js": 406,
	"./fy": 409,
	"./fy.js": 409,
	"./gd": 410,
	"./gd.js": 410,
	"./gl": 411,
	"./gl.js": 411,
	"./gom-latn": 412,
	"./gom-latn.js": 412,
	"./gu": 413,
	"./gu.js": 413,
	"./he": 414,
	"./he.js": 414,
	"./hi": 415,
	"./hi.js": 415,
	"./hr": 416,
	"./hr.js": 416,
	"./hu": 417,
	"./hu.js": 417,
	"./hy-am": 418,
	"./hy-am.js": 418,
	"./id": 419,
	"./id.js": 419,
	"./is": 420,
	"./is.js": 420,
	"./it": 421,
	"./it.js": 421,
	"./ja": 422,
	"./ja.js": 422,
	"./jv": 423,
	"./jv.js": 423,
	"./ka": 424,
	"./ka.js": 424,
	"./kk": 425,
	"./kk.js": 425,
	"./km": 426,
	"./km.js": 426,
	"./kn": 427,
	"./kn.js": 427,
	"./ko": 428,
	"./ko.js": 428,
	"./ky": 429,
	"./ky.js": 429,
	"./lb": 430,
	"./lb.js": 430,
	"./lo": 431,
	"./lo.js": 431,
	"./lt": 432,
	"./lt.js": 432,
	"./lv": 433,
	"./lv.js": 433,
	"./me": 434,
	"./me.js": 434,
	"./mi": 435,
	"./mi.js": 435,
	"./mk": 436,
	"./mk.js": 436,
	"./ml": 437,
	"./ml.js": 437,
	"./mr": 438,
	"./mr.js": 438,
	"./ms": 439,
	"./ms-my": 440,
	"./ms-my.js": 440,
	"./ms.js": 439,
	"./mt": 441,
	"./mt.js": 441,
	"./my": 442,
	"./my.js": 442,
	"./nb": 443,
	"./nb.js": 443,
	"./ne": 444,
	"./ne.js": 444,
	"./nl": 445,
	"./nl-be": 446,
	"./nl-be.js": 446,
	"./nl.js": 445,
	"./nn": 447,
	"./nn.js": 447,
	"./pa-in": 448,
	"./pa-in.js": 448,
	"./pl": 449,
	"./pl.js": 449,
	"./pt": 450,
	"./pt-br": 451,
	"./pt-br.js": 451,
	"./pt.js": 450,
	"./ro": 452,
	"./ro.js": 452,
	"./ru": 453,
	"./ru.js": 453,
	"./sd": 454,
	"./sd.js": 454,
	"./se": 455,
	"./se.js": 455,
	"./si": 456,
	"./si.js": 456,
	"./sk": 457,
	"./sk.js": 457,
	"./sl": 458,
	"./sl.js": 458,
	"./sq": 459,
	"./sq.js": 459,
	"./sr": 460,
	"./sr-cyrl": 461,
	"./sr-cyrl.js": 461,
	"./sr.js": 460,
	"./ss": 462,
	"./ss.js": 462,
	"./sv": 463,
	"./sv.js": 463,
	"./sw": 464,
	"./sw.js": 464,
	"./ta": 465,
	"./ta.js": 465,
	"./te": 466,
	"./te.js": 466,
	"./tet": 467,
	"./tet.js": 467,
	"./tg": 468,
	"./tg.js": 468,
	"./th": 469,
	"./th.js": 469,
	"./tl-ph": 470,
	"./tl-ph.js": 470,
	"./tlh": 471,
	"./tlh.js": 471,
	"./tr": 472,
	"./tr.js": 472,
	"./tzl": 473,
	"./tzl.js": 473,
	"./tzm": 474,
	"./tzm-latn": 475,
	"./tzm-latn.js": 475,
	"./tzm.js": 474,
	"./ug-cn": 476,
	"./ug-cn.js": 476,
	"./uk": 477,
	"./uk.js": 477,
	"./ur": 478,
	"./ur.js": 478,
	"./uz": 479,
	"./uz-latn": 480,
	"./uz-latn.js": 480,
	"./uz.js": 479,
	"./vi": 481,
	"./vi.js": 481,
	"./x-pseudo": 482,
	"./x-pseudo.js": 482,
	"./yo": 483,
	"./yo.js": 483,
	"./zh-cn": 484,
	"./zh-cn.js": 484,
	"./zh-hk": 485,
	"./zh-hk.js": 485,
	"./zh-tw": 486,
	"./zh-tw.js": 486
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 825;

/***/ })

},[595]);
//# sourceMappingURL=main.js.map