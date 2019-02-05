import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'currencyIcon'
})
export class CurrencyIconPipe implements PipeTransform {
    transform(value: string): string {
        var curIcon: string;

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
    }
}

@Pipe({
    name: 'gettime'
})
export class GetTimePipe implements PipeTransform {
    transform(value: string): string {
        if(moment(value).isSame(moment(), 'day'))
            return moment(value).calendar();
        else
            return moment(value).format("DD/MM - HH:mm");
    }
}

@Pipe({
    name: 'updown'
})
export class UpDownPipe implements PipeTransform {
    transform(value: string): string {
        if(String(value).indexOf('-') > -1){
            return 'down';
        }
         return 'up';
    }
}
