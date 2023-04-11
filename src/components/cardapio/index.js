/*
 * @Author: SessyoinChen
 * @Date: 2023-03-29 10:03:05
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-11 14:14:04
 * @FilePath: \Trabalho-de-Conclusao\src\components\cardapio\index.js
 * @Description: 
 * 
 */

import * as React from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import styles from '../../../estiloGeral';

export default function Cardapio({ navigation }) {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('https://api.mercadolibre.com/sites/MLB/search?q=celular').then(res => {
      // console.log(res.data.results)
        setData(res.data.results)
    })
}, [])

  return (
    <View style={styles.cardapioColunas}>
      {
         data.map(item => <View key={item.id}  style={styles.cardapioItem}>
          <TouchableOpacity>
              <Image src={item.thumbnail} alt="" style={{width:50, height:50}}/>
              <Text numberOfLines={2} style={styles.cardapioTexto}>{item.title}</Text>
          </TouchableOpacity>
      </View>)
      }
    </View>
  )
}

