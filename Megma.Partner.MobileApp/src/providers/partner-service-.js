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
import { AppSettings } from "../app/app.config";
import { RequestService } from "./request";
var PartnerService = /** @class */ (function () {
    function PartnerService(requestService) {
        this.requestService = requestService;
    }
    PartnerService.prototype.get = function (partnerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getpartner?partnerId=' + partnerId)];
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
    PartnerService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'partnerlist')];
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
    PartnerService.prototype.savePartner = function (partner) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?name=' + partner.name + '&username=' + partner.username + '&password=' + partner.password + '&credit=' + partner.credit + '&cancreatepartner=' + partner.cancreatepartner;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'createpartner' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.depositCredit = function (parnerId, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?partnerId=' + parnerId + '&amount=' + amount;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'depositcreditpartner' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.withdrawCredit = function (parnerId, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?partnerId=' + parnerId + '&amount=' + amount;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'withdrawcreditpartner' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.updatePartner = function (partner) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?Id=' + partner.Id + '&Name=' + partner.Name + '&email=' + partner.Email + '&active=' + partner.Active + '&credit=' + partner.Credit + '&cancreatepartner=' + partner.CanCreatePartner;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'updatepartner' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.getPlayers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'partnerplayers?' + params)];
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
    PartnerService.prototype.playerPayIn = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?playerId=' + options.playerId + '&amount=' + options.amount;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'partnerplayerpayin' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.playerPayOut = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?playerId=' + options.playerId + '&amount=' + options.amount;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'partnerplayerpayout' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.savePlayer = function (player) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?name=' + player.name + '&surname=' + player.surname + '&username=' + player.username + '&password=' + player.password + '&type=' + player.type;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'createpartnerplayer' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.saveEditPlayer = function (player) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?name=' + player.name + '&surname=' + player.surname + '&isActive=' + player.active + '&type=' + player.type;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'createpartnerplayer' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.getPartnerPlayer = function (playerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getpartnerplayer?playerId=' + playerId)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getPlayerLogins = function (playerId, start, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getplayerlogins?playerId=' + playerId + '&start=' + start + '&limit=' + limit)];
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
    PartnerService.prototype.getPlayerTransactions = function (playerId, start, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getplayertransactions?playerId=' + playerId + '&start=' + start + '&limit=' + limit)];
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
    PartnerService.prototype.getPlayerCashTransactions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getplayercashtransactions?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getProductPermitions = function (partnerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'productpermits?partnerId=' + partnerId)];
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
    PartnerService.prototype.getPlayerProductPermitions = function (playerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'playerproductpermits?playerId=' + playerId)];
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
    PartnerService.prototype.setPlayerProductPermitions = function (playerId, canPlayTombala, canPlayCasino, canPlayLiveCasino, canPlayBet, useCashout) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + ("playersetproductpermits?playerId=" + playerId + "&canPlayTombala=" + canPlayTombala + "&canPlayCasino=" + canPlayCasino + "&canPlayLiveCasino=" + canPlayLiveCasino + "&canPlayBet=" + canPlayBet + "&useCashout=" + useCashout))];
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
    PartnerService.prototype.saveProductPermits = function (product, partnerId) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = '?partnerId=' + partnerId + '&productTypeId=' + product.ProductTypeId + '&permitted=' + product.Permitted;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'updateproductpermits' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    PartnerService.prototype.getPlayerTickets = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, key, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams();
                        for (key in options) {
                            params.set(key, options[key]);
                        }
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getplayertickets?' + params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ;
    PartnerService.prototype.getPartnerGeneralReport = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = "?startDate=" + filter.startDate + "&endDate=" + filter.endDate;
                        return [4 /*yield*/, this.requestService.get(AppSettings.API_ENDPOINT + 'getpartnergeneralreport' + params)];
                    case 1:
                        data = _a.sent();
                        if (data.Status != AppSettings.REST_STATUS_OK)
                            return [2 /*return*/, false];
                        return [2 /*return*/, data.Data];
                }
            });
        });
    };
    PartnerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [RequestService])
    ], PartnerService);
    return PartnerService;
}());
export { PartnerService };
//# sourceMappingURL=partner-service-.js.map