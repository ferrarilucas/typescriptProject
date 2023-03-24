import { Comparavel } from "./comparavel.js";
import { Imprimivel } from "./imporimivel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T>{

}