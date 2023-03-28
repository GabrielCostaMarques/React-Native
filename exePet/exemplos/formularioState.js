import React from "react";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { Button, View, Text, ImageBackground } from "react-native";

import imgCheck from './assets/check.jpg';

class CheckpointFomulario extends React.Component{
    constructor(props){
        super(props);
        this.state={materia:"Hybrid",numCheck:"#1",nota:"5,0", lista:[]} //lista foi declarada para guardar os objetos digitados no textinput nela
    }


    render(){
    //Vinculando o State com os textInput
    // OnChangeText, esse atributo serve para atualizar o textInput sempre que o usuario digitar algo
    // o parâmetro txt vai receber oq for atualizado no OnChangeText, por isso ele precisa ser passado
    
    const listaVisual=[]
    
    for (let i = 0; i < this.state.lista.length; i++) { //for para percorrer os objetos da lista
        const obj=this.state.lista[i]; //passando a lista de objetos para uma variável
        const elementoVisual= //criando uma variável para a view da lista que vai aparecer

        //a key serve para cada elemento printado ter uma chave unica, entao o "i" sempre vai aumentar de um em um por causa do for
        <View key={"key"+i} style={{backgroundColor:"green"}}> 
            <Text>Materia: {obj.materia}</Text>
            <Text>Checkpoint #: {obj.numCheck}</Text>
            <Text>Nota: {obj.nota}</Text>
        </View>;

        listaVisual.push(elementoVisual);

            };
        return( 
            <View style={{flex:1}}>
                <Text>Nome da matéria</Text>
                <TextInput value={this.state.materia} onChangeText={(txt)=>{
                    this.setState({materia:txt})
                }}/> 
                <Text>Número do CheckPoint</Text>
                <TextInput value={this.state.numCheck} onChangeText={(txt)=>{
                    this.setState({numCheck:txt})
                }}/>
                <Text>Nota Obtida</Text>
                <TextInput value={this.state.nota}onChangeText={(txt)=>{
                    this.setState({nota:txt})
                }}/> 
                <Button title="Salvar" onPress={()=>{
                    const obj={ materia: this.state.materia, 
                                numCheck: this.state.numCheck, 
                                nota: this.state.nota};
                    this.setState({lista:[...this.state.lista,obj]}) //tres pontos serve para a lista nao apagar os outros dados que foram inseridos na lista
                }}/>
                <ScrollView style={{flex:1}}>{listaVisual}</ScrollView>
                
            </View>//imprimindo a lista com o conteudo que foi criado

        )
    }
}

export default ()=>
    <View style={{flex:1}}>
        <ImageBackground style={{flex:1}} source={imgCheck} resizeMode="cover">

        </ImageBackground>
        <View style={{flex:1}}>
        <CheckpointFomulario/>
        </View>
    </View>