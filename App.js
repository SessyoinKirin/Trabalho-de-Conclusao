/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-11 11:26:19
 * @FilePath: \Trabalho-de-Conclusao\App.js
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
import Mesa from './src/components/Mesa';
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
          title:'Mesas',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerLeft: null, 
          
        }} />

        <Stack.Screen name="Carrinho" component={Carrinho} options={({route})=>({
          title: `Mesa ${route.params.index}`,
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
          
        })} />
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




const Stack = createNativeStackNavigator();

export default App;

