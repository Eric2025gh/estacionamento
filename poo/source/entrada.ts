import { Veiculos } from "./veiculos";

export class Entrada{

dataDeEntrada : Date;
veiculo : Veiculos;

constructor(v:Veiculos){
this.dataDeEntrada = (new Date);
this.veiculo = v;
}
}