import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'

import { Contexto } from './contexto';

const api = axios.create({
  baseURL: "https://atividademobile-f78d8-default-rtdb.firebaseio.com/"
})

const Login = () => {
  const contexto = useContext(Contexto)
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <View style={{ flex: 1 }}>

      <View>Concessónaria de Veículos</View>
      <View>
        <Text></Text>
        <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
        <TextInput placeholder='Senha' value={senha} onChangeText={setSenha} />
        <Button title='Salvar' onPress={() => {
          const obj = { email, senha }
          contexto.salvar(obj)
        }} />
      </View>

    </View>
  )
}

const Listagem = () => {
  <View>
    <Text>Gabriel</Text>
  </View>
}

const { Navigator, Screen } = createStackNavigator();

const Principal = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Tela Principal" component={Login} />
        <Screen name="Listagem" component={Listagem} />
      </Navigator>
    </NavigationContainer>
  )
}


export default function App() {
  const [lista, setLista] = useState([])

  const salvar = (obj) => {
    api.post("/carros.json", obj)
      .then(() => {
        lerDados();
        alert("Dados Gravados");
      })
      .catch((err) => { alert("Erro ao salvar dados" + err) })
  }

  const lerDados = () => {
    api.get("/carros.json")
      .then((resposta) => {
        const listaNova = []
        for (const chave in resposta.data) {
          const obj = resposta.data[chave]
          obj.id = chave;
          listaNova.push(obj)
        }
        setLista(listaNova)
      })
      .catch((err) => { alert("Erro ao ler a lista" + err) })
  }

  useEffect(() => {
    lerDados()
  }, [])

  return (
    <Contexto.Provider value={{
      salvar,
      lerDados,
      lista
    }}>
      <View style={{ flex: 1 }}>
        <Principal />
      </View>
    </Contexto.Provider>
  )
}