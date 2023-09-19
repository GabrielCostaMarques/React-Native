import React, {useContext, useState}from 'react'
import { View,Text,TextInput, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios'

import { Contexto } from './contexto';

const api=axios.create({
    baseURL: "#"
}) 

const Login=()=>{
    const contexto = useContext(Contexto)
    const [email, setEmail] = useState("")  
    const [senha, setSenha] = useState("")
    
    return(
        <View style={{flex:1}}>
        <Text>Login</Text>
        <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput placeholder='Email' value={senha} onChangeText={setSenha}/>
        <Button title='Salvar' onPress={()=>{
            const obj ={email,senha}
            contexto.salvar(obj)}}/>
    </View>    
    )
}

const {Navigator, Screen} = createBottomTabNavigator();

const Principal =()=>{
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name = "Tela Principal" component={Principal}/>
                <Screen name = "Listagem" component={Listagem}/>
            </Navigator>
        </NavigationContainer>
    )
}


export default function App(){

    const [lista, setLista]=useState([])

    const salvar =(obj)=>{
        api.post("/restaurante.json",obj)
        .then(()=>{
            lerDados();
            alert("Dados Gravados");})
        .catch((err)=>{alert("Erro ao salvar dados"+ err)})
    }

    const lerDados=()=>{
        api.get("/restaurante.json")
        .then((resposta)=>{
            const listaNova=[]
            for(const chave in resposta.data){
                const obj=resposta.data[chave]
                listaNova.push(obj)
            }
            setLista(listaNova)
        })
        .catch((err)=>{alert("Erro ao ler a lista"+err)})
    }

    return(
        <Contexto.Provider value={{
            salvar,
            lerDados,
        lista}
        }>
        <View style={{flex:1}}>
            <Principal/>
        </View>
        </Contexto.Provider>
    )
}