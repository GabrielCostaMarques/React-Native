import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';

import ImgMain from './assets/WalpaperMain.png'


const Login = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.login}>
        <Text style={estilos.textoLogin}>Login</Text>
        <Text>Preencha seus dados para continuar</Text>
      </View>

      <View>
        <Text style={estilos.textoDefinicao}>EMAIL</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite seu E-mail" />

        <Text style={estilos.textoDefinicao}>PASSWORD</Text>

        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder="Digite sua senha" />
      </View>

      <View styel={estilos.cadastro}>
        <TouchableOpacity onPressIn={() => { alert("Seus dados foram cadastrados!") }}>

          <View>
            <Text style={estilos.botaoCadastrar}>Cadastrar</Text>
          </View>

        </TouchableOpacity>

        <Text style={estilos.signUp}>Signup!</Text>
      </View>
    </View>
  )
}

const Cadastro = () => {
  return (
    <View>
      <View>
        <Text>Detalhes do Restaurante</Text>
      </View>
      <View>
        <TextInput placeholder='Nome do Restaurante' />
        <TextInput placeholder='Endereço' />
        <TextInput placeholder='Tipo de Comida' />
      </View>
      <View>
        <Text>Classificação</Text>
      </View>
      <View>
        <TextInput placeholder='Latitude' />
        <TextInput placeholder='Longitude' />
      </View>
      <View>
        <TextInput placeholder='Descrição' />

        <TouchableOpacity onPressIn={() => { alert("Seus dados foram cadastrados!") }}>
          <View>
            <Text style={estilos.botaoCadastrar}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={estilos.imagemCafe}
          source={ImgMain}>
        </ImageBackground>
      </View>
      <View>
        <Login />
      </View>
    </View>
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
    width: 500

  },

  titulo: {
    fontSize: 40,
    justifyContent: "center",
    backgroundColor: 'rgba(116, 112, 112, 0.4)',
    borderRadius: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    margin: 40,
    marginHorizontal: 20
  },

  login: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  cadastro: {
    margin: 40
  },

  textoLogin: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 8

  },

  textoDefinicao: {
    marginBottom: 5,
    marginLeft: "15%",
    marginRight: "15%"
  },

  input: {
    backgroundColor: "#cac3c1",
    borderRadius: 20,
    paddingVertical: 14,
    marginBottom: 10,
    paddingHorizontal: 20,
    marginLeft: "14%",
    marginRight: "14%"
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
    marginRight: "14%"
  },

  signUp: {
    textAlign: "center",
    marginTop: 50
  }
});