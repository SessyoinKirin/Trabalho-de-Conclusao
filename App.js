/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-09 22:20:41
 * @FilePath: \6Semestre\TCCFinal\Trabalho-de-Conclusao\App.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/login';
import Detail from './src/components/detalhes';

import Carrinho from './src/components/carrinho';
import Cardapio from './src/components/cardapio';


import styles from './estiloGeral';



function App({navigation}) {
  return (
    // <View style={styles.container}>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
        <Stack.Screen name="Los Hermanos" component={Login} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="Mesa" component={Mesa} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }} />

        <Stack.Screen name="Carrinho" component={Carrinho} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          // headerRight: ({ navigation }) => {
          //   const redirecionar = () => {
          //     navigation.navigate('Cardapio')
          //   }
          
          //   return (
          //     <TouchableOpacity onPress={redirecionar}>
          //       <Image source={require('./assets/img/addinversa.png')} style={{ width: 30, height: 30 }} />
          //     </TouchableOpacity>
          //   )
          // }
          
        }} />
        <Stack.Screen name="Detalhe" component={Detail} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }} />
        
        <Stack.Screen name="Cardapio" component={Cardapio} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Redirecionar({navigation}){
  navigation.navigate('Mesa')
}


// Mesa
function Mesa({ navigation }) {
  const [mesa, setMesa] = React.useState([1, 2, 3, 4, 5, 6, 7])

  return (

    <View style={styles.mesaContainer}>
      {
        mesa.map(index => <TouchableOpacity key={index} style={styles.mesaItem} onPress={() => navigation.navigate('Carrinho')}>
          <Text style={styles.mesaTexto}>{index}</Text>
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
    flex:1,
    // maxWidth: Dimensions.get('window')
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor:'#3c3c3c',
  },
  item: {
    width: '30%',
    height: 100,
    backgroundColor: '#1c1c1c',
    marginVertical: 5,
    margin: 5,
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight:'bold',
    color:'#fff',
  }
});
