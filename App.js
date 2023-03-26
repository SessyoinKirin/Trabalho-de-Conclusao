/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-26 20:16:14
 * @FilePath: \6Semestre\TrabalhoDeConclusao\App.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Login from './src/components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import './node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    // <View style={styles.container}>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cardápio" component={HomeScreen} />
        <Stack.Screen name="Los Hermanos" component={Login} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Cardápio
function HomeScreen({ navigation }) {
  const [data, setData] = React.useState([])
  // const { width } = Dimensions.get('window');
  // const MAX_WIDTH = width;


  React.useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLB/search?q=celular').then(res => {
      console.log(res.data.results)
      setData(res.data.results)
    })
  }, [])
  
  return (

    <View style={styles.container}>
      {
        data.map(item => <div key={item.id}>
          <TouchableOpacity style={styles.elemento}>
            <img src={item.thumbnail} alt="" className='p-2' />
            <Text style={styles.texto} numberOfLines={2} >{item.title}</Text>
          </TouchableOpacity>
        </div>)
      }
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex:1,
    maxWidth: Dimensions.get('window')
  },
  // elemento: {
  //   width: '100%',
  //   height: '100%'
  // },
  texto: {
    padding: 2,
    margin: 2,
    fontSize: 20,
  }
});
