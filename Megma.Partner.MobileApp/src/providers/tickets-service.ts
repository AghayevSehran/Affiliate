import {Injectable} from '@angular/core';
import { AppSettings } from "../app/app.config";
import { RequestService } from "./request";
import { TranslateService } from '@ngx-translate/core';
 
@Injectable()
export class TicketService {
    lang:string;  
     constructor(
        private requestService: RequestService,
        public translate: TranslateService,
    ) { 
        this.lang = this.translate.currentLang;
    } 

    async getAll(options): Promise<any> { 
        let params = new URLSearchParams();
        for(let key in options){
            params.set(key, options[key]) 
        }
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'ticketsearch?' + params);
        return data;
    };

    async getTicket(playerId:number, ticketId:number) : Promise<any>{
        let data = await this.requestService.get(AppSettings.API_ENDPOINT +  'ticketdetail?lang='+this.lang+'&playerId=' + playerId + '&ticketId=' + ticketId);
        return data; 
    } 

    async cancelTicket(ticketId:number): Promise<any>{
        let data = await this.requestService.get(AppSettings.API_ENDPOINT + 'ticketcancel?ticketId=' + ticketId);
        return data;
    } 
}