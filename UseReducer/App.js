import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import ImagemPizza from "./assets/favicon.png"


const estadoInicial ={
  contador:0
}

const funcaoReducer=(state,{type,payload})=>{
  //const {type,payload}=action

  if(type==="INCREMENTAR"){
    return{...state, contador:state.contador+payload.valor}
    ;
  }
  return state;
}

export default function App() {

  const [estado, dispatcher]=useReducer(funcaoReducer,estadoInicial)
  return (
    <View>
      <Text>Contador {estado.contador}</Text>
      <TouchableOpacity onPress={()=>{
        console.log("estado.contador");

        const newValue=()=>{
        let value=1
        if(estado.contador>=100){
          value =5
        }
        if(estado.contador>=1000){
          value=10
        }
        if(estado.contador>=10000){
          value=100
        }
        if(estado.contador>=200000){
          value=200
        }
        return value

        }
        dispatcher({type:"INCREMENTAR",payload:{valor:newValue()}})
      }}>

      <Image source={ImagemPizza}/>

      </TouchableOpacity>

      <Text>TESTE</Text>
    </View>

  )

};
