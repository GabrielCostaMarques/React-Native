<<<<<<< HEAD
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

class Botao extends Component {
  render() {
    const {
      title = 'Cadastrar',
      padding = 10,
      margin = 10,
      borderWidth = 10,
      borderColor = 'black',
      shadow = true,
      shadowTexto = false,
      onPress,
    } = this.props;

    return (
        <SafeAreaView>
            <StatusBar/>
            <TouchableOpacity style={[styles.botao,{ padding, margin, borderWidth, borderColor, shadow },]}onPress={onPress}>
                <Text style={[styles.botaoText,{ textShadowRadius: shadowTexto ? 2 : 0 },]}>
                {title}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>  
      
    );
  }
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'red',
  },
  botaoText: {
    fontSize: 20,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
  },
});

export default Botao;
=======
import React from 'react';
import { View, SafeAreaView, StatusBar} from 'react-native';
import Lista from "./src/telas/exe.Lista";

export default function App(){
   return(
    <View>    
        <StatusBar/>
        <View>
            <Lista/>         
        </View>
    </View>





    ) 
}    
>>>>>>> 65b5e0aec7082abb7a7fcebe9f338a6254c9e198

