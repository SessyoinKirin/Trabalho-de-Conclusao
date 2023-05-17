/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-17 09:48:42
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
import Mesa from './src/components/Mesa';
import Carrinho from './src/components/carrinho';
import Cardapio from './src/components/cardapio';
import Adm from './src/components/adm';
import DesabilitarMesa from './src/components/desabilitaMesa';
import GlobalContext from './src/components/contexto';

import styles from './estiloGeral';

const initialState = [
  { id: 0, enabled: true },
  { id: 1, enabled: true },
  { id: 2, enabled: true },
  { id: 3, enabled: true },
  { id: 4, enabled: true },
  { id: 5, enabled: true },
  { id: 6, enabled: true },
  { id: 7, enabled: true },
  { id: 8, enabled: true },
  { id: 9, enabled: true },
  { id: 10, enabled: true },
];
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'mudeEstado':
      const updatedState = prevState.map(item => {
        if (item.id === action.payload) {
          return { ...item, enabled: !item.enabled };
        }
        return item;
      });
      return updatedState;
    default:
      return prevState;

  }

};


function App({ navigation }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
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
            title: 'Mesas',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerLeft: null,

          }} />

          <Stack.Screen name="Carrinho" component={Carrinho} options={({ route }) => ({
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


          <Stack.Screen name="Cardapio" component={Cardapio} options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
          }} />

          <Stack.Screen name="ADM" component={Adm} options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
          }} />

          <Stack.Screen name="Desabilitar/Habilitar" component={DesabilitarMesa} options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
          }} />

        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}

function Redirecionar({ navigation }) {
  navigation.navigate('Mesa')
}




const Stack = createNativeStackNavigator();

export default App;

