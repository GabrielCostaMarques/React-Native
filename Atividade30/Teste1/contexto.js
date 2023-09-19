import { createContext } from "react";


const contextoInicial={
    lista:[],
    salvar:(obj)=>{},
    editar:(obj)=>{},
    apagar:(obj)=>{},
    lerDados:()=>{},
    signUp: ( email, password ) => {},

}


const Contexto= createContext(contextoInicial);

export {Contexto};