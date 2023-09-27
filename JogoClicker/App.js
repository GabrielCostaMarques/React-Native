import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Pizza from './assets/favicon.png'


const estadoInicial ={
  contador:0
}

const funcaoReducer=(state,{type,payload})=>{
  //const {type,payload}=action

  if(type==="UPDATE"){
    return{...state, contador:state.contador+payload.valor}
  }
  return state;
}

export default function App() {

  const [estado, dispatcher]=useReducer(funcaoReducer,estadoInicial)
  return (
    <View style={{flex:1}}>
      <Text>Pizzas {estado.contador}</Text>
      <TouchableOpacity onPress={()=>{
        dispatcher({type:"UPDATE",payload:{valor:1}})
      }}
      >
        <Image source={Pizza} style={{with:50,height:50}}/>
      </TouchableOpacity>
    </View>

  )

};
