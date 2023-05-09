import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Contador = () => {
  const [num, setNum] = useState(0);

  const incrementar = () => {
    setNum(num + 1);
  };

  const decrementar = () => {
    setNum(num - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CONTADOR: {num}</Text>
      <View style={styles.botoes}>
        <Button title="Incrementar" onPress={incrementar} />
        <Button title="Decrementar" onPress={decrementar} />
      </View>
    </View>
  );
};
export default Contador;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  texto: {
    fontSize: 30,
    marginBottom: 20,
    color:'white',
    fontWeight:'bold'
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});