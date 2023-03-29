/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-29 12:48:55
 * @FilePath: \6Semestre\TrabalhoDeConclusao\App.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './src/components/login';
import Detail from './src/components/detalhes';

import Carrinho from './src/components/carrinho';
import Cardapio from './src/components/cardapio';
// import {BsFillCartCheckFill} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'

function App() {
  return (
    // <View style={styles.container}>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Los Hermanos" component={Login} />
        
        <Stack.Screen name="Carrinho" component={Carrinho} options={({navigation})=>({headerRight:()=>(<TouchableOpacity onPress={()=> navigation.navigate('Cardapio')}>
          <AiOutlinePlusCircle style={{ width: 30, height: 30, marginRight: 10 }}/>
        </TouchableOpacity>)})} />
        <Stack.Screen name="Detalhe" component={Detail} />
        <Stack.Screen name="Mesa" component={Mesa} />
        <Stack.Screen name="Cardapio" component={Cardapio} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Cardápio
function Mesa({ navigation }) {
  const [mesa, setMesa] = React.useState([1, 2, 3, 4, 5, 6, 7])

  return (

    <View style={estilo.container}>
      {
        mesa.map(index => <TouchableOpacity key={index} style={estilo.item} onPress={()=> navigation.navigate('Carrinho', {index})}>
          <Text style={estilo.texto}>{index}</Text>
        </TouchableOpacity>)
      }
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default App;

const estilo = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex:1,
    // maxWidth: Dimensions.get('window')
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '30%',
    height: 100,
    backgroundColor: 'gray',
    marginVertical: 10,
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    textAlign: 'center',
  }
});
