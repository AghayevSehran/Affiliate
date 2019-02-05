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
import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
//import { PartnersPage } from "../pages/partners/partners";
import { AuthenticationService } from '../providers/user-data';
import { PlayersPage } from "../pages/players/players";
import * as moment from 'moment';
import { ReportsPlayerPage } from "../pages/reportsplayer/reports";
import { AppSettings } from './app.config';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { StatusBar } from '@ionic-native/status-bar';
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
            { title: 'app.menu.account', name: 'AccountPage', component: AccountPage, icon: 'contact' },
            { title: 'app.menu.players', name: 'PlayersPage', component: PlayersPage, icon: 'people' }
        ];
        this.appReports = [
            // { title: 'app.menu.reports.betreport', name: 'BetReportsPage', component: BetReportsPage, icon: 'stats' },
            { title: 'app.menu.reports.playerreport', name: 'ReportsPlayerPage', component: ReportsPlayerPage, icon: 'easel' }
        ];
        this.appOthers = [
            { title: 'app.menu.logout', name: 'LoginPage', component: LoginPage, icon: 'log-out', logsOut: true }
        ];
        this.rootPage = AccountPage;
        moment.locale('tr');
        this.translate.setDefaultLang('tr');
        AuthenticationService.getLanguage().then(function (r) {
            _this.lang = r;
            var days = new Array();
            days['tr'] = 'Bugün';
            days['en'] = 'Today';
            days['de'] = 'Heute';
            translate.use(_this.lang);
            moment.updateLocale('tr', {
                calendar: {
                    sameDay: '[' + days[_this.lang] + '] LT'
                }
            });
        });
        // load the conference data  
        //confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.AuthenticationService.userLoggedIn().then(function (result) {
            if (result.Status === AppSettings.REST_STATUS_ERROR) {
                _this.rootPage = LoginPage;
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
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], PartnerApp.prototype, "nav", void 0);
    PartnerApp = __decorate([
        Component({
            templateUrl: 'app.template1.html'
        }),
        __metadata("design:paramtypes", [Events,
            AuthenticationService,
            MenuController,
            StatusBar,
            Platform,
            Storage,
            SplashScreen,
            TranslateService,
            ToastController])
    ], PartnerApp);
    return PartnerApp;
}());
export { PartnerApp };
//# sourceMappingURL=app.component.js.map