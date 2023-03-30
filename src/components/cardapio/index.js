/*
 * @Author: SessyoinChen
 * @Date: 2023-03-29 10:03:05
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-30 10:06:46
 * @FilePath: \6Semestre\TrabalhoDeConclusao\src\components\cardapio\index.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Detail from '../detalhes';
import styles from '../../../estiloGeral';
import 'setimmediate';
import SQLite from 'react-native-sqlite-storage';

export default function Cardapio({ navigation }) {
  const [data, setData] = React.useState([])
  const [dados, setDados] = React.useState([])


  // React.useEffect(() => {
  //     axios.get('https://api.mercadolibre.com/sites/MLB/search?q=celular').then(res => {
  //         console.log(res.data.results)
  //         setData(res.data.results.slice(0, 25))
  //         setDados(res.data.results.slice(-25))
  //     })
  // }, [])
  // React.useState(() => {
    
  // }, [])

  const db = SQLite.openDatabase(
    {name: 'LanchoneteDB.db', location: 'default'},
    () => {
      console.log('Banco de dados aberto com sucesso!');
    },
    error => {
      console.log('Erro ao abrir o banco de dados:', error);
    }
  );

  // const db = SQLite.openDatabase({name: 'LanchoneteDB.mdf', createFromLocation: 1});

  return (
    // <View>
    //     <View style={estilo.container}>
    //         <View style={styles.cardapioColunas}>
    //             {
    //                 data.map(item => <View key={item.id} >
    //                     <TouchableOpacity onPress={() => navigation.navigate('Detalhe', { item })}>
    //                         <img src={item.thumbnail} alt="" className='p-2' />
    //                         <Text style={styles.cardapioTexto} numberOfLines={2} >{item.title}</Text>
    //                     </TouchableOpacity>
    //                 </View>)
    //             }
    //         </View>
    //         <View style={styles.cardapioColunas}>
    //             {
    //                 dados.map(item => <View key={item.id} >
    //                     <TouchableOpacity  onPress={() => navigation.navigate('Detalhe', { item })}>
    //                         <img src={item.thumbnail} alt="" className='p-2' />
    //                         <Text style={styles.cardapioTexto} numberOfLines={2} >{item.title}</Text>
    //                     </TouchableOpacity>
    //                 </View>)
    //             }
    //         </View>
    //     </View>
    // </View>
    <View>
      <Text>bom dia</Text>
    </View>
  )
}

const estilo = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
})