import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  }

  const decrementar = () => {
    setNumero(numero - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CONTADOR: {numero}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementar}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrementar}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000'
  },
  text: {
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 8,
    margin: 12,
  },
  buttonText: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
