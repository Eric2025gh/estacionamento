import { Veiculos } from "./veiculos";

export let estacionamento : Entrada[] = [];

export class Entrada{

dataDeEntrada : Date;
veiculo : Veiculos;

constructor(v:Veiculos){
this.dataDeEntrada = (new Date);
this.veiculo = v;
}
}

export class Saida{

dataDeSaida: Date;
placa : string;

constructor(p:string){
this.dataDeSaida = new Date;
this.placa = p;
}

finalizacao():string{

let localizacao, i : number; localizacao = 0;
for(i=0;i<estacionamento.length;i++){
    if(this.placa == estacionamento[i].veiculo.placa){// possível erro aqui
        localizacao = i;
    }
}

let tempo : number;
tempo = this.dataDeSaida.getTime() - (estacionamento[localizacao].dataDeEntrada).getTime();
tempo = tempo / (1000 * 60 * 60);
let valorPagar : number = tempo * 5;
 
estacionamento.splice(localizacao,1);
return `TOTAL DE HORAS ESTACIONADO: ${tempo} \n VALOR A SER PAGO PARA RETIRAR O CARRO: ${valorPagar}`;
}

}

