/*
 * @Author: SessyoinChen
 * @Date: 2023-03-29 10:03:05
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-12 13:57:42
 * @FilePath: \Trabalho-de-Conclusao\src\components\cardapio\index.js
 * @Description: 
 * 
 */

import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import styles from '../../../estiloGeral';
import Contador from './contador';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Cardapio({ navigation }) {

  const [data, setData] = React.useState([])
  const [filtro, setFiltro] = React.useState("")
  // const [count, setCount] = React.useState(1)

  // React.useEffect(() => {
  //   axios.get('https://api.mercadolibre.com/sites/MLB/search?q=celular').then(res => {
  //     console.log(res)
  //     setData(res.data.results)
  //   })
  // }, [])

  useEffect(() => {
    axios({
      url: "https://testapi--carlos-alber317.repl.co/cardapio",
      method: "get",
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => {
      // console.log(res.data, 'dados')
      setData(res.data)
    })
  }, [])

  // console.log(data)

  const getItemList = React.useMemo(() => {
    if (!filtro) {
      return data;
    }
    return data.filter(
      (item) =>
        filtro && item.nome && item.nome.toUpperCase().includes(filtro.toUpperCase() || '')
    );
  }, [data, filtro]);

  function ListItem({ item, navigation }) {
    return (
      <View key={item.id} style={styles.cardapioItemLista}>

        <View style={{ flex: 2 }}><Image src={item.img} alt="" style={[styles.cardapioImg, { width: 100, height: 100, marginBottom: 10 }]} /></View>

        <View style={[styles.cardapioDescBtn, { flex: 5 }]}>
          <View style={[styles.cardapioTitulo, { flex: 3 }]}>
            <Text style={[styles.cardapioTexto, {margin: 5}]} numberOfLines={1}>{item.nome}</Text>
            <Text style={[styles.cardapioTituloPrecoUnitario, {margin: 5}]} numberOfLines={1}>{item.preco.toLocaleString('pt-BR',
              {
                style: 'currency',
                currency: 'BRL',
              })
            }
            </Text>
          </View>

          <View style={[styles.cardapioContador, { flex: 5 }]}>
            <Contador item={item} navigation={navigation} />
          </View>

        </View>


      </View>
    );
  }

  return (
    <View style={styles.cardapioColunas}>
      <TextInput style={[styles.cardapioInput, { flex: 1 / 12 }]} value={filtro} onChange={(evt) => {
        // console.log(filtro, 'filtro')
        setFiltro(evt.nativeEvent.text)
      }} />
      {/* {
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
      } */}
      <FlatList
        data={getItemList}
        renderItem={({ item }) => <ListItem item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        style={{ flex: 11 / 12 }}
      />
    </View>
  )
}

