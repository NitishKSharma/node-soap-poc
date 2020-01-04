"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assert = require("assert");
const stock_1 = require("../src/api/soap/stock");
suite("Dummy", () => {
    test("this is a dummy test", () => {
        const foo = "Hello world";
        Assert.strictEqual(foo, "Hello world");
    });
    test("Testing soap", () => {
        const stock = new stock_1.Stock();
        stock.getStock();
        Assert.strictEqual(1, 1);
    });
});
//# sourceMappingURL=stock.test.js.map