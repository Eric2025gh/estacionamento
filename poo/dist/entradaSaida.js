"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntradaSaida = void 0;
class EntradaSaida {
    constructor(t, v) {
        this.estacionamento = [];
        this.tipo = t;
        this.transporte = v;
        if (t == "entrada") {
            this.dadaDeEntrada = new Date;
        }
        else {
            this.dadaDeSaida = new Date;
        }
    }
    entradaDeVeiculo(veiculo) {
        let entrou = new EntradaSaida("entrada", veiculo);
        this.estacionamento.push(entrou);
    }
}
exports.EntradaSaida = EntradaSaida;
