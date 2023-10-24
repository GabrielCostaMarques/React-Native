import { StatusBar } from 'expo-status-bar';
import { createContext, useContext, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios'

const Contexto = createContext({
  gravar:(obj)=>{},
  editar:()=>{},
  apagar:()=>{},
  lista:[]

})

const api = axios.create({baseURL:"https://atividademobile-f78d8-default-rtdb.firebaseio.com"})


  const Login =()=>{
    const contexto = useContext(Contexto)
    
    const [nome, setNome]=useState("");
    const [quantidade, setQuantidade]=useState("");
    const [preco, setPreco]=useState("");
    
    const objeto = {nome,quantidade,preco} 
    return(
  
  <View style={styles.container}>
    <Text>Atividade 38</Text>
    <TextInput placeholder='Nome' value={nome} onChangeText={setNome}/>
    <TextInput placeholder='Quantidade' value={quantidade} onChangeText={setQuantidade}/>
    <TextInput placeholder='Preco' value={preco} onChangeText={setPreco}/>
    <Button title='Salvar' onPress={()=>{
   contexto.gravar(objeto)
    
    }}/>
    <Button title='Apagar' onPress={()=>{
   contexto.apagar(objeto)
    
    }}/>
</View>)
  
  }
export default function App() {

  
  const [lista, setLista]=useState("")


  const gravar= (obj)=>{
    api.post("/produtos", obj)
    .then(()=>{
      carregar();
    })
    .catch((err)=>{
      alert(err)
    })
  }

  const carregar = async () => {
    api.get("/produtos.json")
      .then((resposta) => {
        console.log("Função carregar");
        const listaNova = [];
        Object.keys(resposta.data).forEach((chave) => {
          const obj = resposta.data[chave];
          obj.id = chave;
          listaNova.push(obj);
        });
        console.log("Dados carregados com Sucesso");
      })
      .catch((error) => {
        console.error("Erro ao carregar dados:", error);
      });
  };
  

  const apagar=()=>{
  api.delete("/produtos")

  }
  const editar=()=>{}

  return (

  <Contexto.Provider 
    value={{carregar,
     gravar,
      apagar,
      editar}}> 

    <Login/>
      
  </Contexto.Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});