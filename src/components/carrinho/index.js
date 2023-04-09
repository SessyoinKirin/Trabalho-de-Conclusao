/*
 * @Author: SessyoinChen
 * @Date: 2023-03-27 14:14:46
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-09 14:07:08
 * @FilePath: \6Semestre\TCCFinal\Trabalho-de-Conclusao\src\components\carrinho\index.js
 * @Description: 
 * 
 */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../../../estiloGeral";

export default function Carrinho({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={[estilo.main, estilo.borderBottom]}>
                <TouchableOpacity onPress={() => navigation.navigate('Cardapio')} style={estilo.adicionar}>
                    <Text style={estilo.letra}>Adicionar</Text>
                </TouchableOpacity>
                <View style={{ flex: 5.5 }}>

                </View>

            </View>
            <View style={estilo.carrinhoRotape}>

                <Text style={styles.carrinhoTexto}>Valor total:</Text>
                <View style={estilo.flexend}>
                    <View style={{ width: '50%', height: '100%' }}>
                        <TouchableOpacity style={estilo.botoesInfo}>
                            <Text style={estilo.textoBotao}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', height: '100%' }}>
                        <TouchableOpacity style={estilo.botoesSuccess}>
                            <Text style={estilo.textoBotao}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    main: {
        flex: 5,
        backgroundColor: '#3c3c3c',
    },
    adicionar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#1c1c1c',
        backgroundColor: '#2c2c2c',

    },
    letra: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing:2,
    },
    flexend: {
        alignContent: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    carrinhoRotape: {
        backgroundColor: '#1c1c1c',
    },
    botoesInfo: {
        backgroundColor: '#5bc0de',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    botoesSuccess: {
        backgroundColor: '#5cb85c',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },

})