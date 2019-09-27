"use strict";
exports.__esModule = true;
var Cuenta = /** @class */ (function () {
    function Cuenta(sald, mov) {
        this.saldo = sald;
        this.movimientos = mov;
    }
    Cuenta.prototype.setSaldo = function (value) {
        this.saldo = value;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setMovimientos = function (value) {
        this.movimientos = value;
    };
    Cuenta.prototype.getMovimiento = function () {
        return this.movimientos;
    };
    Cuenta.prototype.setIngreso = function (monto) {
        this.saldo = this.saldo + monto;
        this.movimientos.push("Ingreso de " + monto + " Bs");
    };
    Cuenta.prototype.setReintegro = function (montoReintegro) {
        this.saldo = this.saldo + montoReintegro;
        this.movimientos.push("Reintegro de " + montoReintegro + " Bs");
    };
    Cuenta.prototype.setTransferencia = function (montoTransferencia) {
        this.saldo = this.saldo - montoTransferencia;
        this.movimientos.push("Transferencia " + montoTransferencia + " Bs");
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
/**
 * pruebas
 */
var cuenta1 = new Cuenta(250, []);
cuenta1.setIngreso(450);
cuenta1.setReintegro(350);
cuenta1.setTransferencia(250);
console.log(cuenta1);
