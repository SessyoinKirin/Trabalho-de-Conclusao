/*
 * @Author: SessyoinChen
 * @Date: 2023-05-20 21:17:51
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-23 16:10:22
 * @FilePath: \Trabalho-de-Conclusao\src\components\adm\index.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert } from 'react-native';
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
        alert('bom dia companhia')
       
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
          <TouchableOpacity style={styles.admBotao} onPress={()=>{
            axios
            .post('https://testapi--carlos-alber317.repl.co/mesas')
            .then((res) => {
              Alert.alert('Mesa adicionado com sucesso!')
              const novaLista = [res.data]
              dispatch({
                type:'postMesa',
                payload: novaLista
              })
              console.log('Mesa adicionada com sucesso!', res.data);
            })
            .catch((error) => {
              console.error('Erro ao adicionar mesa:', error);
            });

          }}>
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
