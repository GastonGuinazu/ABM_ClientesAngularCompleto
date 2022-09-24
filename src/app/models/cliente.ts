import { Despacho } from "./despacho";

export class Cliente {
    id: string;
    nombre: string;
    telefono: number;
    saldo:number;
    limiteFiado:number;
    tipoDespacho?:Despacho;
    tipoDespachoId:string;
}
