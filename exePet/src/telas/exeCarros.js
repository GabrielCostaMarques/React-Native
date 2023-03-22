import React from 'react';
import {Button, ImageBackground, View, ScrollView, Text, TextInput} from 'react-native';
import imgCarSale from './assets/car-sale.jpg';

// export default function App() { 
//   return (
//     <View>
//     </View>
//   )
// }

// const App = () => 
//   <View>
//   </View>

// export default App;

class VendaCarrosFormulario extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {marca: "", modelo: "",
     preco: "", lista: []} 
  }

  render () { 

    const listaView=[]
    this.state.lista.forEach((o)=>{
      listaView.push(
        <View style={{margin:5,backgroundColor:"#00FF00AA",borderWidth:2}}>
          <Text>{o.marca}</Text>
          <Text>{o.modelo}</Text>
          <Text>{o.preco}</Text>

        </View>
      )
    });

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1,
              backgroundColor: this.props.cor}}>
              <Text>Marca do veículo</Text>
              <TextInput value={this.state.marca}
                  onChangeText={(txt)=>{
                    this.setState({marca: txt})
                  }}/>
              <Text>Modelo</Text>
              <TextInput value={this.state.modelo}
                  onChangeText={(txt)=>{
                    this.setState({modelo: txt})
                  }}/>
              <Text>Preço</Text>
              <TextInput value={this.state.preco}
                  onChangeText={(txt)=>{
                    this.setState({preco: txt})
                  }}/>
              <Button title="Salvar" onPress={
                ()=>{
                  const obj={marca:this.state.marca,
                            modelo:this.state.modelo,
                            preco:this.state.preco}

                  this.setState({lista:[...this.state.lista, obj]})
                }
              }/>
        </View>
        <ScrollView style={{flex: 1, 
              backgroundColor: "lightcyan"}}>
              {listaView}
        </ScrollView>
      </View>
    )
  }
}

export default () => 
  <View style={{flex: 1}}>
    <ImageBackground source={imgCarSale} 
          resizeMode="center"
          style={{flex: 1}}>
      <Text>Venda de carros</Text>
    </ImageBackground>
    <View style={{flex: 3}}>
      <VendaCarrosFormulario cor="white"/>
    </View>
  </View>
