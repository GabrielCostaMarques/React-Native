import React, { useState, useContext, useEffect } from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity,FlatList} from "react-native";
//import MapView, {Marker} from 'react-native-maps'
import axios from "axios";
import {Entypo as Icon} from "@expo/vector-icons"
import { Contexto } from "./contexto";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import ImgMain from "./assets/WalpaperMain.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const contexto = useContext(Contexto);
  return (
    <View style={estilos.container}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={estilos.imagemCafe}
          source={ImgMain}
        ></ImageBackground>
      </View>
      <View style={estilos.login}>
        <Text style={estilos.textoLogin}>Login</Text>
        <Text>Preencha seus dados para continuar</Text>
      </View>

      <View>
        <Text style={estilos.textoDefinicao}>EMAIL</Text>
        <TextInput 
        style={estilos.input} 
        placeholder="email"
        value={email} 
        onChangeText={setEmail}/>

        <Text style={estilos.textoDefinicao}>PASSWORD</Text>

        <TextInput 
        style={estilos.input}
        placeholder="senha"
        value={password} 
        onChangeText={setPassword}/>

      </View>

      <View styel={estilos.cadastro}>
        <TouchableOpacity
          onPress={() => {
            contexto.signUp(email, password)
          }}
        >
          <View>
            <Text style={estilos.botaoCadastrar}>Cadastrar</Text>
          </View>
        </TouchableOpacity>

        <Text style={estilos.signUp}>Signup!</Text>
      </View>
    </View>
  );
};

const Cadastro = () => {
  const [nome, setNome] = useState("")
  const [endereco, setEndereço] = useState("")
  const [tipo, setTipo] = useState("")
  const [classificação, setClassificacao] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [decricao, setDescricao] = useState("")

  const contexto = useContext(Contexto)

  return (
    <View>
      <View>
        <Text>Detalhes do Restaurante</Text>
      </View>
      <View>
        <TextInput style={estilos.input} placeholder="Nome do Restaurante" value={nome} onChangeText={setNome} />
        <TextInput style={estilos.input} placeholder="Endereço" value={endereco} onChangeText={setEndereço} />
        <TextInput  style={estilos.input} placeholder="Tipo de Comida" value={tipo} onChangeText={setTipo} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput style={estilos.input} placeholder="Classificação" value={classificação} onChangeText={setClassificacao} />
        <TextInput style={estilos.input} placeholder="Latitude" value={latitude} onChangeText={setLatitude} />
        <TextInput style={estilos.input} placeholder="Longitude" value={longitude} onChangeText={setLongitude} />
      </View>
      <View>
        <TextInput style={estilos.input} placeholder="Descrição" value={decricao} onChangeText={setDescricao} />

        <TouchableOpacity
          onPress={() => {
            const obj = { nome, endereco, tipo, classificação, latitude, longitude }
            contexto.salvar(obj);
          }}
        >
          <View>
            <Text style={estilos.botaoCadastrar}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const Item = (props) => {
  return (
    <View style={{ flex: 1 }} key={props.index}>
      <Text>{props.item.nome}</Text>
      <Text>{props.item.tipo}</Text>
      <Icon name="trash" size={25} onPress={()=>{props.onApagar(props.item)}}/>
    </View>
  )
}

const Listagem = () => {
  const contexto = useContext(Contexto)

  return (
    <View style={{ flex: 1 }}>
      <Text>Listagem</Text>
      <FlatList data={contexto.lista} renderItem={(flatProps)=><Item {...flatProps} onApagar={contexto.apagar} />} />
    </View>
  )
}
const Mapa = () => {
  const contexto = useContext(Contexto)
  return (
    <View>
      <Text>Mapa</Text>
      {/* <MapView style={{flex:1}}
        initialRegion={{
          latitude:-23.545297195741348,
          longitude:-46.64351000502243,
          latitudeDelta:0.08,
          longitudeDelta:0.08,
        }}>

          {contexto.lista.map((item, indice)=>{
            return(

              <Marker key={indice} coordinate={{
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.longitude),}}
              title={item.nome}
              description={item.tipo}
              />
            )
          })}
          </MapView> */}
    </View>
  )
}


const BotomTab = createBottomTabNavigator();

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <BotomTab.Navigator>
          <BotomTab.Screen name="Cadastro" component={Cadastro} />
          <BotomTab.Screen name="Listagem" component={Listagem} />
          <BotomTab.Screen name="Mapa" component={Mapa}/>
        </BotomTab.Navigator>
      </NavigationContainer>
    </View>

  )
}

const API_KEY = "AIzaSyDwM3KBE2WK9NQ_58OEJAL86CHos2yxD2E";

const apiLogin = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1"
})

const api = axios.create({
  baseURL:"https://databs-b6b35-default-rtdb.firebaseio.com"
})

export default function App() {
  const [token, setToken] = useState(null);
  const [lista, setLista] = useState([])


  const signUp = (email, password) => { 
    apiLogin.post( "/accounts:signUp?key=" + API_KEY, 
        {email, password, returnSecureToken: true} )
    .then( (resposta)=> {
      setToken(resposta.data.idToken);
    })
    .catch( (err) => {alert("Erro ao fazer o registro " + err)})
  }

  const salvar = (obj) => {
    api.post("/restaurantes.json",obj)
    .then((resposta)=>{
      alert("Objeto Gravado") 
      lerDados();})
    .catch((err)=>{alert("Erro ao Gravar"+err)})
  }

  const lerDados=()=>{
    api.get("/restaurantes.json")
    .then((resposta)=>{
      const listaNova=[]
      for(const chave in resposta.data){
        const obj = resposta.data[chave];
        obj.id=chave;
        listaNova.push(obj)
      }
      setLista(listaNova)
    })

    .catch((err)=>{alert("Erro ao ler dados"+ err)})
  }

  useEffect(()=>{
    lerDados();
  },[])


  const apagar=(obj)=>{
    api.delete("/restaurantes/"+obj.id+".json")
    .then((resposta)=>{
      alert("Objeto Apagado") 
      lerDados();})
    .catch((err)=>{alert("Erro ao Apagar"+err)})
  }
  
  return (
    <Contexto.Provider value={{
      lista,
      salvar,
      lerDados,
      apagar,
      signUp
    }}>
      <View style={estilos.container}>
        {token ? <Main/> :<Login/>}
      </View>
    </Contexto.Provider>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#efe4e1",
    flex: 2,
    justifyContent: "center",
  },

  imagemCafe: {
    flex: 3,
    height: 200,
    width: 500,
  },

  titulo: {
    fontSize: 40,
    justifyContent: "center",
    backgroundColor: "rgba(116, 112, 112, 0.4)",
    borderRadius: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    margin: 40,
    marginHorizontal: 20,
  },

  login: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  cadastro: {
    margin: 40,
  },

  textoLogin: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 8,
  },

  textoDefinicao: {
    marginBottom: 5,
    marginLeft: "15%",
    marginRight: "15%",
  },

  input: {
    backgroundColor: "#cac3c1",
    borderRadius: 20,
    paddingVertical: 14,
    marginBottom: 10,
    paddingHorizontal: 20,
    marginLeft: "14%",
    marginRight: "14%",
  },

  botaoCadastrar: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#ffd8a9",
    borderRadius: 9,
    paddingVertical: 14,
    marginTop: 20,
    paddingHorizontal: 20,
    marginLeft: "14%",
    marginRight: "14%",
  },

  signUp: {
    textAlign: "center",
    marginTop: 50,
  },
});
