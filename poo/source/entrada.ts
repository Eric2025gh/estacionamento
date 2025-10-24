import { Veiculos } from "./veiculos";
import { Cliente } from "./cliente";
export class Entrada{

  dataDeEntrada : Date;
  veiculo : Veiculos;
  usuario : Cliente;
    constructor(v:Veiculos, u:Cliente){
      this.dataDeEntrada = (new Date);
      this.veiculo = v;
      this.usuario = u;
    }
}