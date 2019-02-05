

import {
    Injectable
} from '@angular/core';
import { AppSettings } from "../app/app.config";
import { RequestService } from "./request";

@Injectable()
export class PartnerService {
    constructor(
        private requestService: RequestService
    ) { }

    async get(partnerId): Promise<any> {
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getpartner?partnerId=' + partnerId);
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    };

    async getAll(): Promise<any> {
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'partnerlist');
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    };

    async savePartner(partner: any): Promise<any> {
        var params = '?name=' + partner.name + '&username=' + partner.username + '&password=' + partner.password + '&credit=' + partner.credit + '&cancreatepartner='+ partner.cancreatepartner;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'createpartner' + params);
        return data;
    }


    async depositCredit(parnerId, amount): Promise<any> {
        var params = '?partnerId=' + parnerId + '&amount=' + amount;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'depositcreditpartner' + params);
        return data;
    }

    async withdrawCredit(parnerId, amount): Promise<any> {
        var params = '?partnerId=' + parnerId + '&amount=' + amount;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'withdrawcreditpartner' + params);
        return data;
    }

    

    async updatePartner(partner: any): Promise<any> {
        var params = '?Id=' + partner.Id + '&Name=' + partner.Name + '&email=' + partner.Email + '&active=' + partner.Active + '&credit=' + partner.Credit+ '&cancreatepartner='+ partner.CanCreatePartner;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'updatepartner' + params);
        return data;
    }

    async getPlayers(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'partnerplayers?' + params);
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    };

    async playerPayIn(options: any): Promise<any> {
        var params = '?playerId=' + options.playerId + '&amount=' + options.amount;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'partnerplayerpayin' + params);
        return data;
    }

    async playerPayOut(options: any): Promise<any> {
        var params = '?playerId=' + options.playerId + '&amount=' + options.amount;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'partnerplayerpayout' + params);
        return data;
    }

    async savePlayer(player: any): Promise<any> {
        var params = '?name=' + player.name + '&surname=' + player.surname + '&username=' + player.username + '&password=' + player.password + '&type=' + player.type;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'createpartnerplayer' + params);
        return data;
    }

    async saveEditPlayer(player: any): Promise<any> {
        var params = '?name=' + player.name + '&surname=' + player.surname + '&isActive=' + player.active + '&type=' + player.type;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'createpartnerplayer' + params);
        return data;
    }

    async getPartnerPlayer(playerId: number): Promise<any> {
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getpartnerplayer?playerId=' + playerId);
        return data.Data;
    };

    async getPlayerLogins(playerId: number, start: number, limit: number): Promise<any> {
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayerlogins?playerId=' + playerId + '&start=' + start + '&limit=' + limit);
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    };

    async getPlayerTransactions(playerId: number, start: number, limit: number): Promise<any> {
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayertransactions?playerId=' + playerId + '&start=' + start + '&limit=' + limit);
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    };
    
    async getPlayerCashTransactions(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayercashtransactions?' + params);
        return data;
    };

    async getProductPermitions(partnerId): Promise<any> {
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'productpermits?partnerId=' + partnerId);
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    };

    async getPlayerProductPermitions(playerId): Promise<any> {
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'playerproductpermits?playerId=' + playerId);
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    };
    async setPlayerProductPermitions(playerId, canPlayTombala, canPlayCasino, canPlayLiveCasino, canPlayBet, useCashout): Promise<any> {
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + `playersetproductpermits?playerId=${playerId}&canPlayTombala=${canPlayTombala}&canPlayCasino=${canPlayCasino}&canPlayLiveCasino=${canPlayLiveCasino}&canPlayBet=${canPlayBet}&useCashout=${useCashout}`);
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    };


    async saveProductPermits(product: any, partnerId:number): Promise<any> {
        var params = '?partnerId='+partnerId+'&productTypeId=' + product.ProductTypeId + '&permitted=' + product.Permitted;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'updateproductpermits' + params);
        return data;
    }

    async getPlayerTickets(options): Promise<any> {
        let params = new URLSearchParams();
        for (let key in options) {
            params.set(key, options[key])
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getplayertickets?' + params);
        return data;
    };

    async getPartnerGeneralReport(filter): Promise<any> {
        var params = `?startDate=${filter.startDate}&endDate=${filter.endDate}`;
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'getpartnergeneralreport' + params);
        if (data.Status != AppSettings.REST_STATUS_OK)
            return false;
        return data.Data;
    }






} 