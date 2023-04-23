/*
 * @Author: SessyoinChen
 * @Date: 2023-03-29 10:03:05
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-23 14:58:43
 * @FilePath: \Trabalho-de-Conclusao\src\components\cardapio\index.js
 * @Description: 
 * 
 */

import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import styles from '../../../estiloGeral';
import Contador from './contador';
import { TextInput } from 'react-native';
import { useState } from 'react';

export default function Cardapio({ navigation }) {

  const [data, setData] = React.useState([])
  const [filtro, setFiltro]= React.useState("")
  // const [count, setCount] = React.useState(1)

  React.useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLB/search?q=celular').then(res => {
      // console.log(res.data.results)
      setData(res.data.results)
    })
  }, [])

  // console.log(data)

  const getItemList = React.useMemo(() => {
    if (!filtro) {
      return data;
    }
    return data.filter(
      (item) =>
      filtro && item.title && item.title.toUpperCase().includes(filtro.toUpperCase() || '')



    );
  }, [data, filtro]);
  
  

  return (
    <View style={styles.cardapioColunas}>
      <TextInput style={styles.logininput} value={filtro} onChange={(evt)=>{
        // console.log(filtro, 'filtro')
        setFiltro(evt.nativeEvent.text)
      }}/>
      {
        getItemList.length > 0 ? getItemList.map(item => <View key={item.id} style={styles.cardapioItem}>
          <View style={{ flex: 2 }}><Image src={item.thumbnail} alt="" style={[styles.cardapioImg, { width: 100, height: 100 }]} /></View>

          <View style={[styles.cardapioDescBtn, { flex: 5 }]}>
            <View style={[styles.cardapioTitulo, { flex: 3 }]}>
              <Text style={styles.cardapioTexto}>{item.title}</Text>
            </View>
            <View style={[styles.cardapioContador, { flex: 3 }]}>
              
              <Contador item={item} navigation={navigation}/>
            </View>
          </View>


        </View>):null
      }
    </View>
  )
}

