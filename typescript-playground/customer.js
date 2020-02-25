"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerX = /** @class */ (function () {
    function CustomerX(id) {
        this.id = id;
    }
    CustomerX.prototype.fooBar = function () {
        var _this = this;
        setTimeout(function () {
            console.log('Die ID ist', _this.id);
        }, 2000);
    };
    return CustomerX;
}());
exports.CustomerX = CustomerX;
//# sourceMappingURL=customer.js.map