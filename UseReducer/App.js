import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const estadoInicial ={
  contador:0
}

const funcaoReducer=(state,{type,payload})=>{
  //const {type,payload}=action

  if(type==="INCREMENTAR"){
    return{...state, contador:state.contador+payload.valor}
  }
  return state;
}

export default function App() {

  const [estado, dispatcher]=useReducer(funcaoReducer,estadoInicial)
  return (
    <View>
      <Text>Contador {estado.contador}</Text>
      <Button title='Incrementar' onPress={()=>{
        dispatcher({type:"INCREMENTAR",payload:{valor:5}})
      }}/>
    </View>

  )

};
