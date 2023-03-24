import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "../interfaces/imporimivel.js";

export function imprimir(...objetos: Array<Imprimivel>){
  for( let objeto of objetos){
      console.log(objeto.paraTexto());
  }
}