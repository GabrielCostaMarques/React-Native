export default()=>
        <View style={{flex:1,marginTop:50}}>
            <Text>Aperte o botão</Text>
            <Button title='Aperte-me' onPress={()=>{ //foi criado uma arrow function dentro do onpress para nao precisar criar uma função fora
                alert("Botão pressionado")
            }}/>  
        </View>

// desse jeito funciona apenas para uma linha de comando, nao poderia ter outras views dentro