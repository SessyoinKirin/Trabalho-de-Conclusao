/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-26 13:31:16
 * @FilePath: \6Semestre\TrabalhoDeConclusao\App.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './src/components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'

function App() {
  return (
    // <View style={styles.container}>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Los Hermanos" component={Login} />
        <Stack.Screen name="Cardápio" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Página inicial
function HomeScreen({ navigation }) {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLB/search?q=celular').then(res => {
      console.log(res.data.results)
      setData(res.data.results)
    })
  }, [])
  return (
    
    <View>
      {
        data.map(item => <div key={item.id}>
          <h4>{item.title}</h4>
          <img src={item.thumbnail} alt="" />
        </div>)
      }
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
