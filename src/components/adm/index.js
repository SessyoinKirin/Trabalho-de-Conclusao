import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../../estiloGeral';
import GlobalContext from '../contexto';
import axios from 'axios';

export default function Adm({ navigation }) {
  const { state, dispatch } = React.useContext(GlobalContext);

  const adicionarMesa = () => {
    axios
      .post('https://testapi--carlos-alber317.repl.co/mesas')
      .then((res) => {
        console.log('Mesa adicionada com sucesso!', res.data);
      })
      .catch((error) => {
        console.error('Erro ao adicionar mesa:', error);
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/fundo1-escuro.jpg')} style={styles.imgFundo1}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1, padding: 30 }}>
          <TouchableOpacity style={styles.admBotao} onPress={adicionarMesa}>
            <Text style={styles.admTexto}>Adicionar Mesa</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, padding: 30 }}>
          <TouchableOpacity style={styles.admBotao} onPress={() => navigation.navigate('Desabilitar/Habilitar')}>
            <Text style={styles.admTexto}>Desabilitar Mesa</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, padding: 30 }}>
          <TouchableOpacity style={styles.admBotao} onPress={() => navigation.navigate('Los Hermanos')}>
            <Text style={styles.admTexto}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}></View>
      </ImageBackground>
    </View>
  );
}
