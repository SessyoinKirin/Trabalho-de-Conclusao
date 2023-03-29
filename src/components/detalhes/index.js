/*
 * @Author: SessyoinChen
 * @Date: 2023-03-27 12:04:50
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-29 09:56:10
 * @FilePath: \6Semestre\TrabalhoDeConclusao\src\components\detalhes\index.js
 * @Description: 
 * 
 */
import React, { useState } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity, StyleSheet, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../../../estiloGeral";

export default function Detail({ route, navigation }){
    const {item} = route.params
    return(
        <View style={styles.container}>
            <img src={item.thumbnail} alt="" className='p-2' />
            <Text numberOfLines={2} style={styles.detalheTexto}>{item.title}</Text>
            <Text style={styles.detalhePreco}>R$: {item.price}</Text>
            <Button title="ordenar" onPress={() => navigation.navigate('Carrinho')}></Button>
        </View>
    )
}

