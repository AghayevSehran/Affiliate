import {Injectable} from '@angular/core';
import {Events} from 'ionic-angular';
import {Storage} from '@ionic/storage';

//rxjs promises cause angular http return observable natively.
import 'rxjs/add/operator/toPromise';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RequestService {
    constructor(public events: Events,
                public storage: Storage,
                private http: HttpClient) {
    }

    async get(url: string): Promise<any> {
        let data = await this.http.get(url).toPromise();
        return data;
    }

    async post(url: string): Promise<any> {
        let data = await this.http.post(url, {}).toPromise();
        return data;
    }

    async ipost(url: string, params?: any): Promise<any> {
        let body = JSON.stringify(params);
        let data = await this.http.post(url, body).toPromise();
        return data;
    }

}
