"use strict";
/**
 * This file does not exist to be executed, just compiled,
 * so that we can ensure that the definition files
 * only reference names that exist,
 * and to perform a basic sanity check that types are exported as intended.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
///<reference types="../2020-03-02" />
var stripe_1 = require("stripe");
var stripe = new stripe_1["default"]('sk_test_123', {
    apiVersion: '2020-03-02'
});
// @ts-ignore lazily ignore apiVersion requirement.
stripe = new stripe_1["default"]('sk_test_123');
stripe = new stripe_1["default"]('sk_test_123', {
    // @ts-ignore ignore specific apiVersion.
    apiVersion: '2019-11-05'
});
stripe = new stripe_1["default"]('sk_test_123', {
    // @ts-ignore ignore default apiVersion.
    apiVersion: null
});
// Check config object.
stripe = new stripe_1["default"]('sk_test_123', {
    apiVersion: '2020-03-02',
    typescript: true,
    maxNetworkRetries: 1,
    timeout: 1000,
    host: 'api.example.com',
    port: 123,
    telemetry: true
});
stripe.setTimeout(3000);
stripe.setAppInfo({
    name: 'my-wordpress-plugin'
});
stripe.setHost('host', 'port', 'protocol');
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var params, opts, customer, product, charge, cusEmail, btId, created, r, maybeCoupon, d, created, _a, _b, customer_1, id, e_1_1, cusList, aThousandCustomers, nothing, err_1, declineCode, declineCode;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                params = {
                    description: 'test'
                };
                opts = {
                    apiVersion: '2020-03-02'
                };
                return [4 /*yield*/, stripe.customers.create(params, opts)];
            case 1:
                customer = _d.sent();
                // Check no opts:
                return [4 /*yield*/, stripe.customers.create(params)];
            case 2:
                // Check no opts:
                _d.sent();
                return [4 /*yield*/, stripe.products.retrieve('prod_123', opts)];
            case 3:
                product = _d.sent();
                return [4 /*yield*/, stripe.products.retrieve('prod_123', { expand: [] }, opts)];
            case 4:
                product = _d.sent();
                return [4 /*yield*/, stripe.charges.retrieve('ch_123', {
                        expand: ['customer']
                    })];
            case 5:
                charge = _d.sent();
                // Ignore null case.
                if (!charge.customer)
                    throw Error('guard');
                cusEmail = charge.customer.email;
                btId = charge.balance_transaction;
                // Check you can deal with deleted:
                if (typeof charge.customer !== 'string' &&
                    // Not sure why `!charge.customer.deleted` doesn't work, it seems to in a playground:
                    // https://www.typescriptlang.org/play/index.html#code/JYOwLgpgTgZghgYwgAgGIHt3IN4ChnJwBcyAzmFKAOYDc+yADpQgNYA2AnieZSLfXABGiFtwrVkAH2QgArmzZSZsgLaDodAmA4MIJAOQxM+zcgAmENhEhmA-CQBu6YGboBfXKEixEKACKW1hBmGFh4Wjp6yIbGphZWNiQUshDuuLjausgAsnAc6qHIALxomEoBCcGh6RYIbHBQKAjoIOTIAB4kufkQ1Z4wyAAUAITtAHTxQWYAlDj0za1ghGK8VMUdY3C4Hri19Y3IC21cpVjSFVOF0jwS0nIK6cADgxzIAGRvyJkQ6AOvw0USvobnx9O9PsMOBNAjZZuFDi02sQyOI+OsoVsPEA
                    // Might be a complexity limit with our resources: https://github.com/microsoft/TypeScript/pull/30779/files#diff-c3ed224e4daa84352f7f1abcd23e8ccaR13219
                    !('deleted' in charge.customer)) {
                    created = charge.customer.created;
                }
                r = Math.random() - 0.5;
                return [4 /*yield*/, (r
                        ? stripe.coupons.retrieve('25_off')
                        : stripe.coupons.del('25_off'))];
            case 6:
                maybeCoupon = _d.sent();
                if (maybeCoupon.deleted) {
                    d = maybeCoupon.deleted;
                }
                else {
                    created = maybeCoupon.created;
                }
                _d.label = 7;
            case 7:
                _d.trys.push([7, 12, 13, 18]);
                _a = __asyncValues(stripe.customers.list());
                _d.label = 8;
            case 8: return [4 /*yield*/, _a.next()];
            case 9:
                if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 11];
                customer_1 = _b.value;
                id = customer_1.id;
                if (id === 'hi') {
                    return [3 /*break*/, 11];
                }
                _d.label = 10;
            case 10: return [3 /*break*/, 8];
            case 11: return [3 /*break*/, 18];
            case 12:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 18];
            case 13:
                _d.trys.push([13, , 16, 17]);
                if (!(_b && !_b.done && (_c = _a["return"]))) return [3 /*break*/, 15];
                return [4 /*yield*/, _c.call(_a)];
            case 14:
                _d.sent();
                _d.label = 15;
            case 15: return [3 /*break*/, 17];
            case 16:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 17: return [7 /*endfinally*/];
            case 18: return [4 /*yield*/, stripe.customers.list()];
            case 19:
                cusList = _d.sent();
                return [4 /*yield*/, stripe.customers
                        .list()
                        .autoPagingToArray({ limit: 1000 })];
            case 20:
                aThousandCustomers = _d.sent();
                return [4 /*yield*/, stripe.customers
                        .list()
                        .autoPagingEach(function (customer) {
                        if (customer.id === 'one') {
                            return false;
                        }
                        if (customer.id === 'two') {
                            return Promise.resolve(false);
                        }
                        if (customer.id === 'three') {
                            return Promise.resolve();
                        }
                        return undefined;
                    })];
            case 21:
                nothing = _d.sent();
                _d.label = 22;
            case 22:
                _d.trys.push([22, 24, , 25]);
                return [4 /*yield*/, stripe.paymentIntents.create({ amount: 100, currency: 'USD' })];
            case 23:
                _d.sent();
                return [3 /*break*/, 25];
            case 24:
                err_1 = _d.sent();
                if (err_1 instanceof stripe.errors.StripeCardError) {
                    declineCode = err_1.decline_code;
                }
                if (err_1 instanceof stripe_1["default"].errors.StripeCardError) {
                    declineCode = err_1.decline_code;
                }
                return [3 /*break*/, 25];
            case 25: return [2 /*return*/];
        }
    });
}); })();
var stripeCardError = stripe_1["default"].errors.generate({
    type: 'card_error',
    code: 'card_declined',
    charge: 'ch_123'
});
var stripeResource = stripe_1["default"].StripeResource;
