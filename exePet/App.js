import React,{useState} from 'react';
import { Button,Text,TextInput,View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const {Navigator, Screen}=createBottomTabNavigator();

const login=(user,pass)=>{
    AsyncStorage.getItem("USUARIO")
    .then((inf)=>{
      const o = JSON.parse(inf);
      if (dados['email']==user && dados['senha']==pass){
        alert("Usuário logado com Sucesso")
      }else{
        alert("Usuário ou senha incorretos");
      }
    })
    .catch(()=>{})
    let a =2;
  }

const Login=()=>{
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return(
    <View>
      <Text>Java Café</Text>
      <Text>Bebidas</Text>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail}/>
      <Text>Password</Text>
      <TextInput value={senha} onChangeText={setSenha}/>
      <Button title='Login' onPress={()=>{login(email, senha)}}/>
    </View>
  )
}

const Cadastro =(props)=>{

  return(
    <View style={{flex:1}}>
      <Text>Cadastro</Text>
      <Text>Nome da Bebida</Text>
      <TextInput/>
      <Text>Tamanho da bebida</Text>
      <TextInput/>
      <Text>Preço</Text>
      <TextInput/>
  </View>

)

}
const Listagem =(props)=>
<View style={{flex:1}}>
  <Text>
    Listagem
  </Text>
</View>
export default function App(){
  const [lista, setLista]=useState([])

  const inserir =()=>{

  }
  return(
    <NavigationContainer>    
        <View style={{flex:1}}>
          <View>
            <Text>Java cafe e bebidas</Text>
          </View>
          <View style={{flex:1}}>
            <Navigator>
              <Screen name='Cadastro'>
                {()=><Cadastro onInserir={inserir}/>}
              </Screen>
              
              <Screen name='Listagem'>
                {()=><Listagem lista={lista}/>}

              </Screen>

            </Navigator>
          </View>
      </View>
    </NavigationContainer>

  )
}