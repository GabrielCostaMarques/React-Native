import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default class App extends Component {
  state = {
    nome: '',
    destino: '',
    data: '',
    lista: []
  };

  Nome = (string) => {
    this.setState({ nome: string })
  }

  Destino = (string) => {
    this.setState({ destino: string })
  }

  Data = (string) => {
    this.setState({ data: string })
  }

  Cadastro = () => {
    const { nome, destino, data } = this.state;
    const novaPassagem = { nome, destino, data };
    const novaLista = [...this.state.lista, novaPassagem];
    this.setState({ lista: novaLista });
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={styles.txtBold}>Nome do passageiro: </Text>
          <Text style={styles.text}>{item.nome}</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={styles.txtBold}>Destino: </Text>
          <Text style={styles.text}>{item.destino}</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <Text style={styles.txtBold}>Data do Embarque: </Text>
          <Text style={styles.text}>{item.data}</Text>
        </View>
      </View>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://img.olhardigital.com.br/wp-content/uploads/2023/01/Destaque-aviao.jpg' }} style={styles.image} />
          <Text style={styles.title}>Venda de Passagens Aéreas</Text>
          </View>
          <TextInput style={styles.input} placeholder="Nome do passageiro" onChangeText={this.Nome} />
          <TextInput style={styles.input} placeholder="Destino" onChangeText={this.Destino} />
          <TextInput style={styles.input} placeholder="Data de embarque" onChangeText={this.Data} />
          <TouchableOpacity style={styles.button} onPress={this.Cadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <FlatList data={this.state.lista} renderItem={this.renderItem} keyExtractor={(item, index) => index.toString()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  topView: {
    flex: 3,
    backgroundColor: 'rgba(192, 192, 192, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '50%',
    position: 'absolute',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign:'center',
    width:'80%',
    color:'#fff',
    backgroundColor:'#89898999',
    borderRadius:20,
    zIndex:1
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    width: '80%',
    height: 40,
    margin:10,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center'
  },

  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },

  item:{
    flex:1,
    borderRadius:20,
    backgroundColor:'#000',
    width:'100%',
    paddingLeft:20,
    marginTop:10
  },
  txtBold:{
    fontWeight:'bold',
    fontSize:15,
    color:'white'
  },

  text:{
    color:'white'
  }
});