var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import * as moment from 'moment';
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
        Pipe({
            name: 'currencyIcon'
        })
    ], CurrencyIconPipe);
    return CurrencyIconPipe;
}());
export { CurrencyIconPipe };
var GetTimePipe = /** @class */ (function () {
    function GetTimePipe() {
    }
    GetTimePipe.prototype.transform = function (value) {
        if (moment(value).isSame(moment(), 'day'))
            return moment(value).calendar();
        else
            return moment(value).format("DD/MM - HH:mm");
    };
    GetTimePipe = __decorate([
        Pipe({
            name: 'gettime'
        })
    ], GetTimePipe);
    return GetTimePipe;
}());
export { GetTimePipe };
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
        Pipe({
            name: 'updown'
        })
    ], UpDownPipe);
    return UpDownPipe;
}());
export { UpDownPipe };
//# sourceMappingURL=general.js.map