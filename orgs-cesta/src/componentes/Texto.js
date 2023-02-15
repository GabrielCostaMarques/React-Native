import React from "react";
import { Text, StyleSheet } from "react-native";


//foi criado um componente Texto para refatorar o código, para os textos (<Text>)não perderem seu "style principal" após colocar a fonte
// foi feito uma lista de estilos <Text style={[style, estilos.texto]}>{children}</Text> para o js entender que o Style tem que ser passado primeiro


export default function Texto( {children, style} ){
    return <Text style={[style, estilos.texto]}>{children}</Text>
}

const estilos =StyleSheet.create({

    texto:{
        fontFamily: "MontserratRegular"
    }
})