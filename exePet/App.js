import React from "react";
import { Text, View, Button, ImageBackground, TextInput, ScrollView, } from "react-native";

import ImgCarro from "./assets/car-sale.jpg";

class FormularioCarro extends React.Component{
    constructor(props){
        super(props)
        this.state={modelo:"", marca:"",preco:"",lista:[]}
    }
    render(){
        const listaVisual=[]

        this.state.lista.forEach(i => {
            const obj= this.state.lista[i]
            const elementoVisual=

            <View>
                <Text>Modelo: {obj.modelo}</Text>
                <Text>Modelo: {obj.marca}</Text>
                <Text>Modelo: {obj.preco}</Text>
            </View>

            listaVisual.push(elementoVisual)
        });

        return(

            <View>
                <Text>Modelo do carro</Text>
                <TextInput value={this.state.modelo}onChangeText={(txt)=>{
                    this.setState({modelo:txt})
                }}/>
                <Text>Marca do carro</Text>
                <TextInput value={this.state.marca} onChangeText={(txt)=>{
                    this.setState({marca:txt})
                }}></TextInput>
                <Text>Preço do Carro</Text>
                <TextInput value={this.state.preco} onChangeText={(txt)=>{
                    this.setState({preco:txt})
                }}></TextInput>

                <Button title="Salvar" onPress={()=>{
                    const obj={modelo:this.state.modelo,
                                marca: this.state.marca,
                                preco: this.state.preco}
                    this.setState({lista:[...this.state.lista,obj]})
                }}></Button> 
                {listaVisual}
            </View>

           
        )
    }
}


export default ()=>
    <View style={{flex:1}}>

        <View style={{flex:1}}>
            <ImageBackground style={{flex:1}}source={ImgCarro} resizeMode="cover"></ImageBackground>
        </View>
        <Text>Formulario de Carros</Text>
        <View style={{flex:1}}>
        <FormularioCarro/>
        </View> 
    </View>
    
