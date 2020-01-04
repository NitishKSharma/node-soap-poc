import * as Assert from "assert";
import { Stock } from "../src/api/soap/stock";


suite("Dummy", () =>
{
    test("this is a dummy test", () =>
    {
        const foo = "Hello world";
        Assert.strictEqual(foo, "Hello world");
    });


    test("Testing soap", () =>
    {
        const stock = new Stock();
        stock.getStock();
        // console.log("result", stock.getStock());
        Assert.strictEqual(1, 1);
    });
});