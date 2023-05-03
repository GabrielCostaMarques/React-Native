import React from 'react';
import {Text,View, StyleSheet, TextInput} from 'react-native';
import {AntDesign, FontAwesome } from '@expo/vector-icons';


const estilos = StyleSheet.create({
  item:{
    backgroundColor:"beige",
    borderBottomWidth:3,
    borderBottomColor:"gray"
  },
  itemEspaco :{
    paddingVertical:15,
    paddingHorizontal:10
  },

  titulo:{
    fontWeight:"bold",
    fontSize: 16
  },

  texto:{
    color:"gray",
  },

  iconeEditar:{
    position:"absolute",
    right: 50,
    top:17
    
  },

  iconeApagar:{
  position:"absolute",
  right: 8,
  bottom:24
  }
});


const Lista =()=> {
  return (
    <View>
      <View style={[estilos.item, estilos.itemEspaco]}>
        <Text style={estilos.titulo}>Rex</Text>
        <Text style={estilos.texto}>Pincher - 1.2Kg - 07/05/2015</Text>
        <FontAwesome style={estilos.iconeApagar} name="trash" size={32}/>
        <FontAwesome style={estilos.iconeEditar} name="edit" size={32}/>
      </View>
    </View>
  )
}

export default Lista