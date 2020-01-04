"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soap = require("soap");
class Stock {
    constructor() {
        this._url = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";
    }
    getStock() {
        const args = {
            sCountryISOCode: "IN"
        };
        soap.createClientAsync(this._url).then((client) => {
            return client.CountryInfoService.CountryInfoServiceSoap.CapitalCity(args);
        }).then((result) => {
            console.log(result);
        });
    }
}
exports.Stock = Stock;
//# sourceMappingURL=stock.js.map