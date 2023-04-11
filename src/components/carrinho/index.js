/*
 * @Author: SessyoinChen
 * @Date: 2023-03-27 14:14:46
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-11 11:25:44
 * @FilePath: \Trabalho-de-Conclusao\src\components\carrinho\index.js
 * @Description: 
 * 
 */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../../../estiloGeral";

export default function Carrinho({route, navigation }) {

    const {index} = route.params
    return (
        <View style={styles.container}>
            <View style={[styles.carMain, styles.carBorderBottom]}>
                <TouchableOpacity onPress={() => navigation.navigate('Cardapio')} style={styles.carAdicionar}>
                    <Text style={styles.carLetra}>Adicionar</Text>
                </TouchableOpacity>
                <View style={{ flex: 5.5 }}>

                </View>

            </View>
            <View style={styles.carrinhoRotape}>

                <Text style={styles.carTexto}>Valor total:</Text>
                <View style={styles.carFlexend}>
                    <View style={{ width: '50%', height: '100%' }}>
                        <TouchableOpacity style={styles.carBotoesInfo}>
                            <Text style={styles.carTextoBotao}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', height: '100%' }}>
                        <TouchableOpacity style={styles.carBotoesSuccess}>
                            <Text style={styles.carTextoBotao}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

