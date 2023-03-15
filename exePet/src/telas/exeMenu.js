import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  Dimensions, 
  ImageBackground,
  SafeAreaView, 
  TextInput, 
  TouchableOpacity,
  StatusBar } from 'react-native';


const width = Dimensions.get('screen').width;

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle='auto'/>

      <View style={styles.topo}>
        <ImageBackground
          style={styles.imagem} 
          source ={require('../exePet/assets/pets.png')}>
          <Text style={styles.textoTitulo}>PETS</Text>
        </ImageBackground>
      </View>

      <View>
        <TextInput style={styles.input} placeholder="Nome do Pet"/>
        <TextInput style={styles.input} placeholder="Raça"/>
        <TextInput style={styles.input} placeholder="Peso"/>
        <TextInput style={styles.input} placeholder="Nascimento"/>
      </View>
      <TouchableOpacity onPressIn={()=>{alert("Seu cão foi cadastrado")}}>
        <View style={styles.botao}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  topo:{
    alignItems:"center",
    backgroundColor:"black"
  },

  imagem: {
    width:"100%",
    height:950/1268*width
  },

  textoTitulo:{
    color:"orange",
    fontSize:54,
    fontWeight:"bold",
    backgroundColor:'rgba(116, 112, 112, 0.5)',
    textShadowColor:"white",
    textShadowRadius:10,
    textAlign:"center"
  },

  input: {
    borderBottomColor: "gray", 
    borderBottomWidth: 1.5, color: "gray",
    fontSize: 20,
    padding: 10,
    marginTop:55,
    
  },

  botao: {
    position:"absolute",
    backgroundColor:"#0096ff",
    marginTop:"10%",
    marginLeft:"32%",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    borderRadius:5,
  },

  textoBotao:{
    color:"white",
    fontWeight:"bold"
  }
});
