"use strict";
exports.__esModule = true;
exports.Distribuidora = void 0;
var Distribuidora = /** @class */ (function () {
    function Distribuidora() {
        this.games = [];
    }
    Distribuidora.getInstance = function () {
        if (!this.instance) {
            this.instance = new Distribuidora();
        }
        return Distribuidora.instance;
    };
    Distribuidora.prototype.add = function (games) {
        this.games.push(games);
    };
    Distribuidora.prototype.remove = function (index) {
        this.games.splice(index, 1);
    };
    Distribuidora.prototype.show = function () {
        for (var _i = 0, _a = this.games; _i < _a.length; _i++) {
            var game = _a[_i];
            console.log(game);
        }
    };
    return Distribuidora;
}());
exports.Distribuidora = Distribuidora;
var distribuidora = Distribuidora.getInstance();
