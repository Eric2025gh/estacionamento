"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculos_1 = require("./veiculos");
const entradaSaida_1 = require("./entradaSaida");
let novo = new veiculos_1.Veiculos("t", "vermelho", '112df');
let primeiro = new entradaSaida_1.EntradaSaida();
primeiro.entradaDeVeiculo(novo);
alert(primeiro.estacionamento);
