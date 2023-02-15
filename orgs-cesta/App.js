
import React from 'react'
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>  
    {/*SafeAreaView serve para colocar uma margem de espaço no IOS*/}  
      <StatusBar/>
      <Cesta />
      
    </SafeAreaView>
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
