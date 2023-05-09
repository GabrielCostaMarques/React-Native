import React from 'react';
import {Text,View, StyleSheet,ImageBackground,Image} from 'react-native';
import imagemTask from './assets/tasklist.png'
import imagemCircle from './assets/circle.png'
import imagemCheck from './assets/check.png'


const Tasklista=()=>{
  return(
    <View style={estilos.container}>
        <View style={estilos.header}>
            <ImageBackground source={imagemTask} style={estilos.imagem}>
            <Text style={estilos.titulo}>HOJE</Text>
            <Text style={estilos.subTitulo}>qua, 20 de maio</Text>
            </ImageBackground>  
        </View>

        <View style={estilos.lista}>

                <View style={estilos.tarefas}>                    
                    <Image source={imagemCheck} style={estilos.imagemListaCheck}/>
                    <View>            
                        <Text style={estilos.tituloLista}>Assistir aulas na Faculdade</Text> 
                        <Text>Qua, 20 de Maio</Text>
                    </View> 
                </View>      
                
                <View style={estilos.tarefas}>                    
                    <Image source={imagemCircle} style={estilos.imagemListaCircle}/>
                    <View>            
                        <Text>Estudar React Native</Text> 
                        <Text>Qua, 20 de Maio</Text>
                    </View> 
                </View>
                
                <View style={estilos.tarefas}>                    
                    <Image source={imagemCheck} style={estilos.imagemListaCheck}/>
                    <View>            
                        <Text style={estilos.tituloLista}>Fazer as atividades de casa</Text> 
                        <Text>Qua, 20 de Maio</Text>
                    </View> 
                </View>
                
                <View style={estilos.tarefas}>                    
                    <Image source={imagemCheck} style={estilos.imagemListaCheck}/>
                    <View>            
                        <Text style={estilos.tituloLista}>Mandar e-mail para o chefe</Text> 
                        <Text>Qua, 20 de Maio</Text>
                    </View> 
                </View>
                
                <View style={estilos.tarefas}>                    
                    <Image source={imagemCheck} style={estilos.imagemListaCheck}/>
                    <View>            
                        <Text style={estilos.tituloLista}>Preparar almoço</Text> 
                        <Text>Qua, 20 de Maio</Text>
                    </View> 
                </View>
        </View>

    </View>
  )
}

export default Tasklista


const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"lightgray"
  },

  header:{
    flex:3,
  },

  titulo:{
    backgroundColor:'rgba(116, 112, 112, 0.4)',
    paddingVertical:15,
    paddingHorizontal:50,
    fontSize:30,
    fontWeight:'bold' ,
    color:'white'
  },

  subTitulo:{
    backgroundColor:'rgba(116, 112, 112, 0.4)',
    fontSize:15,
    marginTop:10,
    paddingHorizontal:80,
    color:'white'
  },

  tituloLista:{
    textDecorationLine: 'line-through',
    fontWeight:500
  },

  tarefas:{
    flexDirection:'row',
    padding:30,
    borderBottomWidth:3,
    borderColor:'black',

  },

  lista:{   
    flex:7, 
    margin:20,
    
  },

  imagemListaCircle:{
    width:20,
    height:20,
    marginRight:25,
    marginTop:10
  },

  imagemListaCheck:{
    width:20,
    height:20,
    marginRight:25,
    marginTop:10
  },

  imagem:{
    height:"100%",
    width:"auto",
    justifyContent:'center',
    alignItems:'center'

  }
})