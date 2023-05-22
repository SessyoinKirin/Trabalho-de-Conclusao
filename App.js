/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-21 21:37:05
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
  { id: 0, enabled: true, lista: [] },
  { id: 1, enabled: true, lista: [] },
  { id: 2, enabled: true, lista: [] },
  { id: 3, enabled: true, lista: [] },
  { id: 4, enabled: true, lista: [] },
  { id: 5, enabled: true, lista: [] },
  { id: 6, enabled: true, lista: [] },
  { id: 7, enabled: true, lista: [] },
  { id: 8, enabled: true, lista: [] },
  { id: 9, enabled: true, lista: [] },
  { id: 10, enabled: true, lista: [] },
  { id: 11, enabled: true, lista: [] },
];//mesa
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

      case 'addLista':
        const { itemId, newItem } = action.payload;
        return prevState.map(item => {
          if (item.id === itemId) {
            const itemExistente = item.lista.find(listItem => listItem.nome === newItem.nome);
      
            if (itemExistente) {
              // O item já existe na lista, apenas incrementar o count
              const listaAtualizada = item.lista.map(listItem => {
                if (listItem.nome === newItem.nome) {
                  return { ...listItem, count: listItem.count + newItem.count };
                }
                return listItem;
              });
      
              return { ...item, lista: listaAtualizada };
            } else {
              // O item não existe na lista, adicionar como um novo item
              return { ...item, lista: [...item.lista, newItem] };
            }
          }
          return item;
        });
      
    case 'desativaRemocao':
      const { index } = action.payload;
      return prevState.map(item => {
        if (item.id === index) {
          const updatedLista = item.lista.map(listaItem => {
            if (listaItem.removerDesativado) {
              return listaItem;
            } else {
              console.log(listaItem, 'listaitem')
              return { ...listaItem, removerDesativado: true };
            }
          });
          return { ...item, lista: updatedLista };
        }
        return item;
      });

    case 'removeItem':
      const { id, mesa } = action.payload;
      return prevState.map(item => {
        if (item.id === mesa && !item.removerDesativado) {
          return {
            ...item,
            lista: item.lista.filter(item => item.data !== id),
          };
        }
        return item;
      });

    case 'Increase':
      const { mesaIdforIncrea, itemIdforIncrea } = action.payload;
      return prevState.map((mesa) => {
        if (mesa.id === mesaIdforIncrea) {
          const listaAtualizada = mesa.lista.map((item) => {
            if (item.id === itemIdforIncrea) {
              return { ...item, count: item.count + 1 }
            }
            return item
          })
          return { ...mesa, lista: listaAtualizada }
        }
        return mesa
      })

    case 'Decrease':
      const { mesaIdforDecrea, itemIdforDecrea } = action.payload;
      return prevState.map((mesa) => {
        if (mesa.id === mesaIdforDecrea) {
          const listaAtualizada = mesa.lista.map((item) => {
            if (item.id === itemIdforDecrea) {
              if (item.count === 1) {
                // Remova o item da lista
                return false;
              } else {
                // Decrementa o count do item
                return { ...item, count: item.count - 1 };
              }
            }
            return item;
          }).filter(Boolean); // Remova os itens falsos da lista
          return { ...mesa, lista: listaAtualizada };
        }
        return mesa;
      });


    case 'esvazea':
      const { mesaID } = action.payload;
      console.log(mesaID, 'currente')
      return prevState.map(item => {
        if (item.id === mesaID) {
          return {
            ...item,
            lista: [],
          };
        }
        return item;
      })



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

