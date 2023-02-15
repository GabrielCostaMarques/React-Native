import React from 'react';
import { Image, Text, StyleSheet, Dimensions, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width; /*Dimensions serve para pegar exatamente o tamanho da tela*/

export default function Cesta(){
    return<>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da Cesta</Text>


    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}></Image>
            <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazendo direto para sua cozinha</Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
    </View>    
    </>
}
/*foi feito uma conta com os tamanho da imagem, (propriedades)*/
const estilos = StyleSheet.create({
   topo :{
    width: "100%",
    height: 578/768*width, 
    fontFamily: "Montserrat"
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

   fazenda:{
    flexDirection:"row", 
    paddingVertical:12,
   },

   imagemFazenda:{
        width: 32,
        height:32
   },

   nome:{
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight:"bold",
   },

   nomeFazenda :{
    fontSize: 16,
    lineHeight: 26,
    marginLeft:12
   },

   descricao:{
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26
   },

   preco:{
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight:42,
    marginTop:8
   },

});