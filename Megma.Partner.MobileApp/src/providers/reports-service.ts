import { Injectable } from '@angular/core';
import { AppSettings } from "../app/app.config";
import { RequestService } from "./request";

@Injectable()
export class ReportsService {
    constructor(
        private requestService: RequestService
    ) { }

    
    async getGeneralReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'gettotalreports?' + params);
        return data;
    };


    async PartnerShopReport(filter): Promise<any> {
        var params = `?startDate=${ filter.startDate }&endDate=${ filter.endDate }`;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'partnershopreport' + params);
        return data;
    }

    async getGeneralPlayerReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayerstotalreport?' + params);
        return data;
    };

    async getBetReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getholdreports?' + params);
        return data;
    };

    async getShopHoldReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getshopholdreports?' + params);
        return data;
    };

    async getCasinoReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getcasinoreports?' + params);
        return data;
    };


    async getLiveCasinoReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getlivecasinoreports?' + params);
        return data;
    };

    async getTombalaReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'gettombalareports?' + params);
        return data;
    };

    async getPlayerHoldReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayerbetreports?' + params);
        return data;
    };

    async getPlayerCasinoReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayercasinoreports?' + params);
        return data;
    };

    async getPlayerLiveCasinoReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayerslivecasinoreport?' + params);
        return data;
    };


    async getPlayerTombalaReports(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayertombalareports?' + params);
        return data;
    };

} 