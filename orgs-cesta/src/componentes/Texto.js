import React from "react";
import { Text, StyleSheet } from "react-native";


//foi criado um componente Texto para refatorar o código, para os textos (<Text>)não perderem seu "style principal" após colocar a fonte
// foi feito uma lista de estilos <Text style={[style, estilos.texto]}>{children}</Text> para o js entender que o Style tem que ser passado primeiro


export default function Texto( {children, style} ){


    //técnica para o código saber quando que vai ser aplicado o textoNegrito 
    let estilo = estilos.texto;

    if (style?.fontWeight ==="bold") { //a "?" serve para o código interpretar "se houver um style ele tem que verificar se está em negrito"
        estilo=estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos =StyleSheet.create({

    texto:{
        fontFamily: "MontserratRegular",
        fontWeight:"normal"
    },
    
    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight:"normal"
    }
})