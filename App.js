/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-27 13:07:25
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

function App() {
  return (
    // <View style={styles.container}>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cardápio" component={HomeScreen} />
        <Stack.Screen name="Los Hermanos" component={Login} />
        <Stack.Screen name="Detalhe" component={Detail} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Cardápio
function HomeScreen({ navigation }) {
  const [data, setData] = React.useState([])
  const [dados, setDados] = React.useState([])


  React.useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLB/search?q=celular').then(res => {
      console.log(res.data.results)
      setData(res.data.results.slice(0, 25))
      setDados(res.data.results.slice(-25))
    })
  }, [])

  return (

    <View style={styles.container}>
      <View style={styles.colunas}>
        {
          data.map(item => <View key={item.id} >
            <TouchableOpacity style={styles.elemento} onPress={()=>navigation.navigate('Detalhe')}>
              <img src={item.thumbnail} alt="" className='p-2' />
              <Text style={styles.texto} numberOfLines={2} >{item.title}</Text>
            </TouchableOpacity>
          </View>)
        }
      </View>
      <View style={styles.colunas}>
        {
          dados.map(item => <View key={item.id} >
            <TouchableOpacity style={styles.elemento}>
              <img src={item.thumbnail} alt="" className='p-2' />
              <Text style={styles.texto} numberOfLines={2} >{item.title}</Text>
            </TouchableOpacity>
          </View>)
        }
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex:1,
    // maxWidth: Dimensions.get('window')
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colunas: {
    flex: 1
  },
  texto: {
    padding: 2,
    margin: 2,
    fontSize: 20,
  }
});
