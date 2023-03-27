import React from 'react';
import {ImageBackground, Text,View,Image,StyleSheet} from 'react-native';

import imgTask from './assets/tasklist.png';
import imgFlag from './assets/check.png';
const dataAtual = new Date();

const dia=dataAtual.getDate();
const mes =dataAtual.getMonth(); 
const ano=dataAtual.getFullYear();

const formatado=`${dia}/${mes}/${ano}`
export default()=>
    <View style={{flex:1}}>
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1}} source={imgTask} >
                <Text>Hoje</Text>
                <Text>{formatado}</Text>
            </ImageBackground>
            <View style={styles.lista}>
                <View>
                    <Image source={imgFlag} style={styles.imgFlag}></Image>
                    <Text>Assistir aulas da faculdade</Text>
                </View>
                

                <View>
                    <Image source={imgFlag} style={styles.imgFlag}></Image>
                    <Text>Assistir aulas da faculdade</Text>
                </View>
                <View>
                    <Image source={imgFlag} style={styles.imgFlag}></Image>
                    <Text>Assistir aulas da faculdade</Text>
                </View>
                <View>
                    <Image source={imgFlag} style={styles.imgFlag}></Image>
                    <Text>Assistir aulas da faculdade</Text>
                </View>
            </View>
        </View>
    </View>


const styles =StyleSheet.create({
    lista:{
        flexDirection:"row",
        justifyContent:"s",
        flex:2
    },

    imgFlag:{
       width:30,
       height:30 
    }
})