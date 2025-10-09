import { Veiculos } from "./veiculos";
import { Entrada } from "./tudocerto";
import { Saida } from "./tudocerto";
import { estacionamento } from "./tudocerto";


let marquinha : string ;
let corzinha : string  ;
let plaquinha : string ;



let perguntaInicial : string = prompt("você está entrando ou saindo ?")!;

while(perguntaInicial!="sair"){

  perguntaInicial  = prompt("você está entrando ou saindo ?")!;

 

while(perguntaInicial!="entrando"&&perguntaInicial!="saindo"&&perguntaInicial!="sair"){
 alert ("resposta incorreta!");
perguntaInicial = prompt("você está entrando ou saindo ?")!;
}

if(perguntaInicial=="entrando"){

marquinha = prompt("digite a marca do seu carro")!;
corzinha = prompt("digite a cor do seu carro")!;
plaquinha = prompt("digite com cuidado a placa do seu carro")!; 

let novo = new Veiculos (marquinha,corzinha,plaquinha);

let primeiro = new Entrada(novo);

estacionamento.push(primeiro);

}else{

let placao : string = prompt("digite corretamente a placa do seu carro, por favor")!;
let segundo = new Saida(placao);
alert(segundo.finalizacao());
}

}

console.log("oi")














