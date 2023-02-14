import React from 'react';
import { Image, Text, StyleSheet, Dimensions, View } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width; /*Dimensions serve para pegar exatamente o tamanho da tela*/

export default function Cesta(){
    return<>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da Cesta</Text>


    <View>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <Text>Jenny Jack Farm</Text>
        <Text>Uma cesta com produtos selecionados cuidadosamente da fazendo direto para sua cozinha</Text>
        <Text>R$ 40,00</Text>
    </View>    
    </>
}
/*foi feito uma conta com os tamanho da imagem, (propriedades)*/
const estilos = StyleSheet.create({
   topo :{
    width: "100%",
    height: 578/768*width, 
   },


   titulo:{
    width:"100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 25,
    lineHeight:26,
    color: "White",
    fontWeight: "bold",
    padding: 16,
    marginTop: 25
   },
/*no React-Native ele não aceita a sintaxe do padding: 8 16 igual no css por isso se usa o paddingVertical e Horizontal*/
   cesta:{
    paddingVertical: 8,
    paddingHorizontal: 16,
   },

   nome:{
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight:"bold",

   }
});