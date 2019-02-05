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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AppSettings } from "../app/app.config";
//rxjs promises cause angular http return observable natively.
import 'rxjs/add/operator/toPromise';
import { RequestService } from "./request";
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
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getbalance')];
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
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getsession')];
                    case 1:
                        data = _a.sent();
                        if (data.Status != AppSettings.REST_STATUS_OK) {
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
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'loginhistory?start=' + start + '&limit=' + limit)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != AppSettings.REST_STATUS_OK)
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
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'transactionhistory?start=' + start + '&limit=' + limit)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != AppSettings.REST_STATUS_OK)
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
                    case 0: return [4 /*yield*/, this.requestService.post(AppSettings.API_ENDPOINT + 'changemypassword?password=' + password)];
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
                    case 0: return [4 /*yield*/, this.requestService.post(AppSettings.API_ENDPOINT + 'changemypassword?partnerId=' + partnerId + '&password=' + password)];
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
                    case 0: return [4 /*yield*/, this.requestService.post(AppSettings.API_ENDPOINT + 'changeplayerpassword?playerId=' + playerId + '&password=' + password)];
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
                        return [4 /*yield*/, this.requestService.post(AppSettings.API_ENDPOINT + 'logout')];
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
        Injectable(),
        __metadata("design:paramtypes", [Events,
            Storage,
            RequestService])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=user-data.js.map