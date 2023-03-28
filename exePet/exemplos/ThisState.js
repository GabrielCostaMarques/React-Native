import React from "react";
import { Button, View, Text } from "react-native";

class Incrementador extends React.Component{ //usamos a classe para declarar o construtor e o this.state

    constructor(props){
        super(props); //obrigado para invocar a classe superior

        this.state={numero:1200} //state é um objeto de estado, ou seja, o react nao vai aceitar apenas o construtor passando um objeto this.numero, ele precisa saber do estado da variavel
                                //por isso que usamos o this.state e passamos os objetos que queremos
    }

    render(){
        return(
            <View style={{flex:1, marginTop:50}}>
                <Text>Número: {this.state.numero}</Text>
                <Button title="Incrementar" onPress={()=>{
                    this.setState({numero:this.state.numero+5}) //nesse método ele da um set no state e pega o valor antigo do numero e soma mais um
                }}/>
                <Button title="Decrementar" onPress={()=>{
                    this.setState({numero: this.state.numero -1})
                }}/>

            </View>
        )
    }
}

export default Incrementador; //implementa a classe para ser visualizada