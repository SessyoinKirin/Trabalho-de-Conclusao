/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 09:34:09
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-17 14:19:19
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

function App() {
  return (
    // <View style={styles.container}>
    //   <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='click' onPress={() => navigation.navigate('login')}></Button>
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
