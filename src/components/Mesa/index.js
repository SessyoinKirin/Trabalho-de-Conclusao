/*
 * @Author: SessyoinChen
 * @Date: 2023-04-11 09:40:11
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-22 11:18:14
 * @FilePath: \Trabalho-de-Conclusao\src\components\Mesa\index.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../../estiloGeral';
import GlobalContext from '../contexto';

function Mesa({ navigation }) {
    const { state } = React.useContext(GlobalContext)//mostra mesa

    return (

        <View style={styles.mesaContainer}>
            <ImageBackground source={require('../../../assets/fundo1-escuro.jpg')} style={styles.imgFundo1}>
                <View style={styles.mesas}>
                    {
                        state.map(item => <MesaUnidade key={item.id} index={item.id} lista={item.lista} navigation={navigation} />)
                    }

                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Los Hermanos')} style={styles.mesaAdicionar}>
                    <Text style={styles.mesaLetra}>Logout</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

function MesaUnidade({ index, lista, navigation }) {
    const { state, dispatch } = React.useContext(GlobalContext)

    console.log(index+1, 'lista de item = ' + lista.length);
    const mesaStyle = state[index]?.enabled ? lista.length == 0 ? styles.mesaDesocupada : styles.mesaOcupada : [styles.mesaItem, styles.mesaItemDisabled];
    const mesaTexto = state[index]?.enabled ? styles.mesaTexto : [styles.mesaTexto, styles.mesaTextoDisabled];
    return (
        <TouchableOpacity style={mesaStyle} onPress={() => navigation.navigate('Carrinho', { mesaIndex: index + 1 })} disabled={!state[index].enabled}>
            <Text style={mesaTexto}>{index + 1}</Text>
        </TouchableOpacity>
    );
}

export default Mesa