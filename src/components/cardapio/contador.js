/*
 * @Author: SessyoinChen
 * @Date: 2023-04-12 11:59:49
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-13 14:52:24
 * @FilePath: \Trabalho-de-Conclusao\src\components\cardapio\contador.js
 * @Description: 
 * 
 */
import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../../estiloGeral';

export default function Contador({item ,navigation}) {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if(count > 1){
      setCount(count - 1);
    }
  };

  return (
    <>
        <TouchableOpacity
      onPress={handleIncrease}
      style={[styles.cardapioBotaoCount, {flex:1}]}
    >
      <Text style={styles.cardapioSinal}>{'<'}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      // console.log(item)
      navigation.navigate('Carrinho', {item})}} style={[styles.cardapioBotaoAdd, {flex:4}]}>
      <Text style={styles.cardapioAdd}>Adicionar -- {count}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={handleDecrease}
      style={[styles.cardapioBotaoCount, {flex:1}]}
    >
      <Text style={styles.cardapioSinal}>{'>'}</Text>
    </TouchableOpacity>
    </>
  );
}
