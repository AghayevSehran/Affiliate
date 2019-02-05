import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
//import { PartnersPage } from "../pages/partners/partners";

import { AuthenticationService } from '../providers/user-data';
import { TicketsPage } from "../pages/tickets/tickets";
import { PlayersPage } from "../pages/players/players";
import { BetReportsPage } from "../pages/reportsbet/reports";
import { CasinoReportsPage } from "../pages/reportscasino/reports";
import { TombalaReportsPage } from "../pages/reportstombala/reports";

import * as moment from 'moment';
import { ReportsPlayerPage } from "../pages/reportsplayer/reports";
import { AppSettings } from './app.config';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LiveCasinoReportsPage } from '../pages/reportslivecasino/reports';
import { GeneralReportsPage } from '../pages/reportsgeneral/reports';
import { StatusBar } from '@ionic-native/status-bar';
import { BetReportsTwoPage } from '../pages/reportsbettwo/reports';
import { ReportsNew } from '../pages/reportsnew/reports';

export interface PageInterface {
    title: string;
    name: string;
    component: any;
    icon: string;
    logsOut?: boolean;
    index?: number;
    tabName?: string;
    tabComponent?: any;
}


@Component({
    templateUrl: 'app.template.html'
})
export class PartnerApp {
    // the root nav is a child of the root app component
    // @ViewChild(Nav) gets a reference to the app's root nav
    @ViewChild(Nav) nav: Nav;
    lang: string;
    canCreatePartner: boolean;
    // List of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    appPages: PageInterface[] = [
        { title: 'app.menu.account', name: 'AccountPage', component: AccountPage, icon: 'contact' },
        { title: 'app.menu.players', name: 'PlayersPage', component: PlayersPage, icon: 'people' }
    ];
    appReports: PageInterface[] = [
        // { title: 'app.menu.reports.betreport', name: 'BetReportsPage', component: BetReportsPage, icon: 'stats' },
        { title: 'app.menu.reports.playerreport', name: 'ReportsPlayerPage', component: ReportsPlayerPage, icon: 'easel' }
    ];

    appOthers: PageInterface[] = [
        { title: 'app.menu.logout', name: 'LoginPage', component: LoginPage, icon: 'log-out', logsOut: true }
    ]

    rootPage: any = AccountPage;
    userLoggedIn: boolean;

    constructor(
        public events: Events,
        public AuthenticationService: AuthenticationService,
        public menu: MenuController,
        public statusBar: StatusBar,
        public platform: Platform,
        public storage: Storage,
        public splashScreen: SplashScreen,
        public translate: TranslateService,
        public toastCtrl: ToastController
    ) {
        moment.locale('tr');
        this.translate.setDefaultLang('tr');

        AuthenticationService.getLanguage().then(r => {
            this.lang = r;

            let days = new Array();
            days['tr'] = 'Bugün';
            days['en'] = 'Today';
            days['de'] = 'Heute';

            translate.use(this.lang);
            moment.updateLocale('tr', {
                calendar: {
                    sameDay: '[' + days[this.lang] + '] LT'
                }
            });

        });

        // load the conference data  
        //confData.load();

        // decide which menu items should be hidden by current login status stored in local storage
        this.AuthenticationService.userLoggedIn().then((result) => {
            if (result.Status === AppSettings.REST_STATUS_ERROR) {
                this.rootPage = LoginPage;
                this.enableMenu(false);
                // let error = this.toastCtrl.create({ message: result.Message, cssClass: 'danger', duration: 3000, position: 'top' });
                // error.present();
                return false;
            } else {
                this.canCreatePartner = result.CanCreatePartner;
                if (!this.canCreatePartner) {
                    this.appPages.splice(1, 1);
                }
                this.enableMenu(true);
            }
        });

        this.enableMenu(true);
        this.listenToLoginEvents();
        this.platformReady();

    }

    openPage(page: PageInterface) {
        let params = {};

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
        } else {
            this.nav.setRoot(page.name, params).catch((err: any) => {
                console.log(`Didn't set nav root: ${err}`);
            });
        }

        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.AuthenticationService.logout().then(respons => {
                console.log(respons);
            });
        }
    }

    listenToLoginEvents() {
        this.events.subscribe('user:login', () => {
            this.enableMenu(true);
        });
        this.events.subscribe('user:logout', () => {
            this.enableMenu(false);
        });
    }

    enableMenu(loggedIn: boolean) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    }

    platformReady() {
        // Call any initial plugins when ready
        this.platform.ready().then(() => {
            this.statusBar.styleDefault(); 
            this.splashScreen.hide();
        });
    }

    isActive(page: PageInterface) {
        let childNav = this.nav.getActiveChildNavs()[0];

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
    }
}
