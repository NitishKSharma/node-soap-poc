import * as soap from "soap";


export class Stock
{
    private readonly _url = "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";


    public constructor()
    {

    }


    public getStock(): void
    {
        // @ts-ignore
        const args = {
            sCountryISOCode: "IN"
        };

        // soap.createClient(this._url, function (_err, client)
        // {
        //     client.CountryInfoService.CountryInfoServiceSoap.CapitalCity(args, function (_err: any, result: any)
        //     {
        //         console.log(result);
        //     });
        // });

        // soap.createClientAsync(url).then((client) =>
        // {
        //     return client.MyFunctionAsync(args);
        // }).then((result) =>
        // {
        //     console.log(result);
        // });

        soap.createClientAsync(this._url).then((client) =>
        {
            // return client.describe();
            return client.CountryInfoService.CountryInfoServiceSoap.CapitalCity(args);
        }).then((result: any) => 
        {
            console.log(result);
        });
    }
}