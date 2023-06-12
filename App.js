/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-06-12 13:28:14
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
import axios from 'axios';
import styles from './estiloGeral';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'inicializar':
      const mesas = [...action.payload]
      // console.log(prevState, 'prevstate')
      // console.log(action.payload, 'payload')
      return mesas;

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
          const itemExistente = item.lista.find(listItem => listItem.nome === newItem.nome && !listItem.removerDesativado);
        
          // console.log(itemExistente, 'se existe item');
          
          if (itemExistente) {
            // O item já existe na lista, apenas incrementar o count do item existente
            
            const listaAtualizada = item.lista.map(listItem => {
              if (listItem.nome === newItem.nome && !listItem.removerDesativado) {
                return { ...listItem, count: listItem.count + newItem.count };
              }
              return listItem;
            });
        
            return { ...item, lista: listaAtualizada };
          } else {
            // O item não existe na lista, adicionar como um novo item
            console.log('item não existe na lista');
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
              // console.log(listaItem, 'listaitem')
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
      const { mesaIdforIncrea, itemDataforIncrea } = action.payload;
      return prevState.map((mesa) => {
        if (mesa.id === mesaIdforIncrea) {
          const listaAtualizada = mesa.lista.map((item) => {
            if (item.data === itemDataforIncrea) {
              return { ...item, count: item.count + 1 }
            }
            return item
          })
          return { ...mesa, lista: listaAtualizada }
        }
        return mesa
      })

    case 'Decrease':
      const { mesaIdforDecrea, itemDataforDecrea } = action.payload;
      return prevState.map((mesa) => {
        if (mesa.id === mesaIdforDecrea) {
          const listaAtualizada = mesa.lista.map((item) => {
            if (item.data === itemDataforDecrea) {
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

    case 'postMesa':
      const novaLista = [...prevState, action.payload];
      return [...prevState, ...novaLista];

    default:
      return prevState;
  }
};


function App({ navigation }) {
  const [state, dispatch] = React.useReducer(reducer, [])
  const [data, setData] = React.useState([]); // Inicializa o estado para armazenar os dados das mesas
  // console.log(state, 'state fora de axios', state.length, 'tamanho de state')
  const [validacao, setValidacao] = React.useState(false)

  React.useEffect(() => {
    axios
      .get('https://testapi--carlos-alber317.repl.co/mesas')
      .then((res) => {
        setData(res.data);
        // console.log(state, 'estado dentro de axiosget')
        const initialState = [...res.data]
        // console.log(initialState, 'initialstate')
        dispatch({
          type: 'inicializar',
          payload: initialState
        })
      })
      .catch((error) => {
        console.error('Erro ao buscar mesas:', error);
      });
  }, [state.length]);
  const initialState = [...data];

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

