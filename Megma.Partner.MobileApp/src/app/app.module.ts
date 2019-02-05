import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule, ErrorHandler, enableProdMode } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TreeModule } from 'angular-tree-component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { IonicStorageModule } from '@ionic/storage';





import { PartnerApp } from './app.component';
import { AccountPage, ModalContentPage, TransactionDetail, ChangePasswordPage } from '../pages/account/account';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { PartnersPage, NewPartnerForm, EditPartnerForm, PartnerProductPermits, ChangePartnerPasswordPage } from '../pages/partners/partners';
import { AuthenticationService } from '../providers/user-data';

import { RequestService } from '../providers/request';
import { PartnerService } from "../providers/partner-service";
import { TicketService } from "../providers/tickets-service";
import { TicketsPage, TicketsDetailPage, TicketFilterPage } from "../pages/tickets/tickets";
import { PlayersPage, PayinPayoutModal, NewPlayerForm, PlayerDetailPage, LoginHistoryModal, ChangePlayerPasswordPage, EditPlayerForm, PlayersFilterPage, PlayerProductPermits } from "../pages/players/players";
import { BetReportsPage, ReportBetFilterPage } from "../pages/reportsbet/reports";
import { CasinoReportsPage, ReportCasinoFilterPage } from "../pages/reportscasino/reports";
import { LiveCasinoReportsPage, ReportLiveCasinoFilterPage } from "../pages/reportslivecasino/reports";
import { TombalaReportsPage, ReportTombalaFilterPage } from "../pages/reportstombala/reports";
import { ReportsService } from "../providers/reports-service";
import { CurrencyIconPipe, GetTimePipe, UpDownPipe } from "../pipes/general";
import { ReportsPlayerPage, ReportPlayerFilterPage } from "../pages/reportsplayer/reports";
import { GeneralReportsPage, GeneralReportFilterPage } from '../pages/reportsgeneral/reports';
import { BetReportsTwoPage, ReportBetTwoFilterPage } from '../pages/reportsbettwo/reports';
import { ReportsNew, ReportsNewFilter } from '../pages/reportsnew/reports';
import { BrMaskerModule } from 'brmasker-ionic-3';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

enableProdMode();

@NgModule({
    declarations: [
        PartnerApp,
        LoginPage,
        AccountPage,
        ModalContentPage,
        ChangePasswordPage,
        TransactionDetail,
        PartnersPage,
        ChangePartnerPasswordPage,
        NewPartnerForm,
        EditPartnerForm,
        PartnerProductPermits,
        TicketsPage,
        TicketsDetailPage,
        TicketFilterPage,
        PlayersPage,
        PlayersFilterPage,
        NewPlayerForm,
        EditPlayerForm,
        PayinPayoutModal,
        PlayerDetailPage,
        ChangePlayerPasswordPage,
        LoginHistoryModal,
        AboutPage,
        GeneralReportsPage,
        GeneralReportFilterPage,
        BetReportsPage,
        ReportBetFilterPage,
        ReportCasinoFilterPage,
        ReportLiveCasinoFilterPage,
        ReportTombalaFilterPage,
        CasinoReportsPage,
        LiveCasinoReportsPage,
        TombalaReportsPage,
        ReportsPlayerPage,
        ReportPlayerFilterPage,
        CurrencyIconPipe,
        GetTimePipe,
        UpDownPipe,
        PlayerProductPermits,
        BetReportsTwoPage,
        ReportBetTwoFilterPage,
        ReportsNew,
        ReportsNewFilter
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        TreeModule.forRoot(),
        IonicModule.forRoot(PartnerApp, {
            backButtonText: ' ',
        }, {
                links: [
                   { component: PartnersPage, name: 'PartnersPage', segment: 'partners' },
                   { component: NewPartnerForm, name: 'NewPartnerForm', segment: 'partners/new-partner' },
                   { component: EditPartnerForm, name: 'EditPartnerForm', segment: 'partners/edit-partner/:id' },
                    { component: LoginPage, name: 'LoginPage', segment: 'login' },
                    { component: AccountPage, name: 'AccountPage', segment: 'account' },
                    { component: ChangePasswordPage, name: 'ChangePassword', segment: 'account/changepassword' },
                    { component: TicketsPage, name: 'TicketsPage', segment: 'tickets' },
                    { component: TicketsDetailPage, name: 'TicketDetails', segment: 'tickets/detail/:playerid/:id' },
                    { component: PlayersPage, name: 'PlayersPage', segment: 'players' },
                    { component: NewPlayerForm, name: 'NewPlayerForm', segment: 'players/add' },
                    { component: EditPlayerForm, name: 'EditPlayerForm', segment: 'players/edit/:id' },
                    { component: PlayerDetailPage, name: 'PlayerDetailPage', segment: 'players/detail/:id' },
                    { component: AboutPage, name: 'About', segment: 'about' },
                    { component: GeneralReportsPage, name: 'GeneralReportsPage', segment: 'generalreports' },
                    { component: BetReportsPage, name: 'BetReportsPage', segment: 'reports' },
                    { component: BetReportsTwoPage, name: 'BetReportsTwoPage', segment: 'reportstwo' },
                    { component: ReportsPlayerPage, name: 'ReportsPlayerPage', segment: 'reports/player-reports' },
                    { component: CasinoReportsPage, name: 'CasinoReportsPage', segment: 'reports/casino' },
                    { component: LiveCasinoReportsPage, name: 'LiveCasinoReportsPage', segment: 'reports/livecasino' },
                    { component: TombalaReportsPage, name: 'TombalaReportsPage', segment: 'reports/tombala' },
                    { component: ReportsNew, name: 'ReportsNew', segment: 'reportsnew' },
                ]
            }),
        IonicStorageModule.forRoot(),
        BrMaskerModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        PartnerApp,
        LoginPage,
        AccountPage,
        ModalContentPage,
        ChangePasswordPage,
        TransactionDetail,
        PartnersPage,
        ChangePartnerPasswordPage,
        NewPartnerForm,
        EditPartnerForm,
       PartnerProductPermits,
        TicketsPage,
        TicketsDetailPage,
        TicketFilterPage,
        PlayersPage,
        PlayersFilterPage,
        PayinPayoutModal,
        NewPlayerForm,
        EditPlayerForm,
        PlayerDetailPage,
        PlayerProductPermits,
        ChangePlayerPasswordPage,
        LoginHistoryModal,
        AboutPage,
        GeneralReportsPage,
        GeneralReportFilterPage,
        BetReportsPage,
        ReportBetFilterPage,
        ReportLiveCasinoFilterPage,
        ReportCasinoFilterPage,
        ReportTombalaFilterPage,
        CasinoReportsPage,
        LiveCasinoReportsPage,
        ReportsPlayerPage,
        ReportPlayerFilterPage,
        TombalaReportsPage,
        BetReportsTwoPage,
        ReportBetTwoFilterPage,
        ReportsNew,
        ReportsNewFilter
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        AuthenticationService,
        StatusBar,
        SplashScreen,
        RequestService,
        PartnerService,
        TicketService,
        ReportsService
    ]
})
export class AppModule { }
