import React from "react";
import { Text, View, Button, ImageBackground, TextInput } from "react-native";

import ImgCarro from "./assets/car-sale.jpg";

class FormularioCarro extends React.Component{
    constructor(props){
        super(props)
        this.state={modelo:"", marca:"",preco:"",lista:[]}
    }
    render(){
        return(
            <View>
                <Text>Modelo do carro</Text>
                <TextInput placeholder="Digite o modelo" value={this.state.modelo}onChangeText={(txt)=>{
                    this.setState({modelo:txt})
                }}/>
                <Text>Marca do carro</Text>
                <TextInput placeholder="Digite a marca" value={this.state.marca} onChangeText={(txt)=>{
                    this.setState({marca:txt})
                }}></TextInput>
                <Text>Preço do Carro</Text>
                <TextInput placeholder="Digite o preço" value={this.state.preco} onChangeText={(txt)=>{
                    this.setState({preco:txt})
                }}></TextInput>

                <Button title="Salvar" onPress={()=>{
                    const obj={modelo:this.state.modelo,
                                marca: this.state.marca,
                                preco: this.state.preco}
                    this.setState({...this.state.lista,obj})
                }}></Button>
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
    
