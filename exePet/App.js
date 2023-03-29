import React from "react";
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity,ScrollView } from "react-native";

import imgCafe from "./assets/coffee.png";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={user:"",senha:"",lista:[]}
    }
    render(){
        const listaVisual=[]
    
        for (let i = 0; i < this.state.lista.length; i++) {
            const obj=this.state.lista[i]; 
            const elementoVisual= 
    

            <View key={"key"+i} style={{backgroundColor:"lightyellow"}}> 
                <Text>Usuário: {obj.user}</Text>
                <Text>Senha: {obj.senha}</Text>
            </View>;
    
            listaVisual.push(elementoVisual);
    
                };
        return(
            <View style={estilos.container}>
            <View style={estilos.login}>
                <Text style={estilos.textoLogin}>Login</Text>
                <Text>Faça o login para continuar</Text>
            </View>

            <View>
                <Text style={estilos.textoDefinicao}>EMAIL</Text>
                <TextInput 
                style={estilos.input}
                placeholder="Digite seu E-mail"
                value={this.state.user}onChangeText={(txt)=>{this.setState({user: txt})}}/>

                <Text style={estilos.textoDefinicao}>PASSWORD</Text>
                <TextInput 
                style={estilos.input} 
                secureTextEntry={true} 
                placeholder="Digite sua senha"
                value={this.state.senha}onChangeText={(txt)=>{this.setState({senha: txt})}}
                />
            </View>

            <View styel={estilos.cadastro}>
                <TouchableOpacity onPress={()=>{
                    alert("Seus dados foram cadastrados")
                    const obj={user: this.state.user, senha: this.state.senha};
                    this.setState({lista:[...this.state.lista,obj]})}}>
                    <View>
                        <Text style={estilos.botaoCadastrar}>Cadastrar</Text>
                    </View>
                </TouchableOpacity>
                <Text style={estilos.signUp}>Signup!</Text>
            </View>
            <ScrollView style={{flex:1}}>{listaVisual}</ScrollView>
        </View>
        )
    }
}

export default ()=> {   
    return(

    <View style={{flex:1, flexDirection:"column"}}>
        <View style ={{flex:1}}>
            <ImageBackground 
            style={estilos.imagemCafe}
            source={imgCafe}>
                <Text style={estilos.titulo}>Cafézinho</Text>
            </ImageBackground>
        </View>
        <View style={{flex:2}}>
            <Login/>
        </View>
    </View>
    )
}

const estilos = StyleSheet.create({

    container:{
        backgroundColor:"#ffbd4b",
        flex:2,
        justifyContent:"center",
    },


    imagemCafe:{
    flex:1,
    height:"100%"
    
    },

    titulo:{
        fontSize:40,
        justifyContent:"center",
        backgroundColor:'rgba(116, 112, 112, 0.4)',
        borderRadius:25,
        fontWeight:"bold",
        textAlign:"center",
        padding:10,
        margin:40,
        marginHorizontal:20
    },

    login:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:10
    },

    cadastro:{
        margin:40
    },

    textoLogin:{
        fontSize:50,
        fontWeight:"bold",
        marginBottom:8

    },

    textoDefinicao:{
        marginBottom:5,
        marginLeft:"15%",
        marginRight:"15%"
    },

    input:{
        backgroundColor:"white",
        borderRadius:20,
        paddingVertical:14,
        marginBottom:10,
        paddingHorizontal:20,
        marginLeft:"14%",
        marginRight:"14%"
    },

    botaoCadastrar:{
        color:"white",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center",
        backgroundColor:"black",
        borderRadius:9,
        paddingVertical:14,
        marginTop:20,
        paddingHorizontal:20,
        marginLeft:"14%",
        marginRight:"14%"
    },

    signUp:{
        textAlign:"center",
        marginTop:50
    }
});
