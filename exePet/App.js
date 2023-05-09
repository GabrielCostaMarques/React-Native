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

