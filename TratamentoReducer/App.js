import { StatusBar } from "expo-status-bar";
import { createContext, useContext, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from "axios";

import { string, object, number } from "yup";

const Contexto = createContext({
  gravar: (obj) => {},
  editar: () => {},
  apagar: () => {},
  lista: [],
});

const api = axios.create({
  baseURL: "https://atividademobile-f78d8-default-rtdb.firebaseio.com",
});

const schema = object({
  nome: string("Precisa ser um nome Válido").min(3, "mínimo 3 caracteres"),
  quantidade: number("Campo do tipo numérico").required("Campo obrigatório"),
  preco: string("String").required("Campo obrigatório"),
});


const Login = () => {
  const contexto = useContext(Contexto);

  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [nomeErr, setNomeErr] = useState("");
  const [quantidadeErr, setQuantidadeErr] = useState("");
  const [precoErr, setPrecoErr] = useState("");

  const handleSalvar = () => {
    setNomeErr("");
    setQuantidadeErr("");
    setPrecoErr("");

    schema
      .validate({ nome, quantidade, preco }, { abortEarly: false })
      .then(() => {
        contexto.gravar({ nome, quantidade, preco });
      })
      .catch((erro) => {
        erro.inner.forEach((error) => {
          if (error.path === "nome") {
            setNomeErr(error.message);
          } else if (error.path === "quantidade") {
            setQuantidadeErr(error.message);
          } else if (error.path === "preco") {
            setPrecoErr(error.message);
          }
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text>Atividade 38</Text>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
      <Text style={{ fontSize: 15, color: "red", fontWeight: "bold" }}>
        {nomeErr}
      </Text>
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <Text style={{ fontSize: 15, color: "red", fontWeight: "bold" }}>
        {quantidadeErr}
      </Text>
      <TextInput placeholder="Preco" value={preco} onChangeText={setPreco} />
      <Text style={{ fontSize: 15, color: "red", fontWeight: "bold" }}>
        {precoErr}
      </Text>
      <Button title="Salvar" onPress={() => handleSalvar()} />
      <Button
        title="Apagar"
        onPress={() => {
          contexto.apagar({ nome, quantidade, preco });
        }}
      />
    </View>
  );
};


const Listagem=({item})=>{
  return(
    <View style={{borderWidth:3, padding:10,marginBottom:20}}>
      <Text style={{fontSize:16, fontWeight:"bold"}}>Nome: {item.nome}</Text>
      <Text style={{fontSize:16, fontWeight:"bold"}}>Quantidade: {item.quantidade}</Text>
      <Text style={{fontSize:16, fontWeight:"bold"}}>Preço: {item.preco}</Text>
    </View>
  )
}

export default function App() {
  const [lista, setLista] = useState([{}]);

  const gravar = (obj) => {
    api
      .post("/produtos.json", obj)
      .then(() => {
        return carregar();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const carregar = async () => {
    api.get("/produtos.json")

    .then((resposta)=>{
      const listaNova=[]
      for(const chave in resposta.data){
          const obj=resposta.data[chave]
          obj.id=chave;
          listaNova.push(obj)
      }
      setLista(listaNova)
    })
    .catch((err)=>{alert("Erro ao ler a lista"+err)})
  };
  

  const apagar = () => {
    api.delete("/produtos.json");
  };
  const editar = () => {};

  return (
    <Contexto.Provider value={{ carregar, gravar, apagar, editar, lista }}>
      <Login />
      <FlatList data={lista} renderItem={Listagem} keyExtractor={item=>item.id}/>
    </Contexto.Provider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
