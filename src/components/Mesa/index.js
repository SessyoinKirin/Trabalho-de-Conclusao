/*
 * @Author: SessyoinChen
 * @Date: 2023-04-11 09:40:11
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-03 14:30:29
 * @FilePath: \Trabalho-de-Conclusao\src\components\Mesa\index.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../../estiloGeral';

function Mesa({ navigation }) {
    const [mesa, setMesa] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    return (

        <View style={styles.mesaContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Los Hermanos')} style={styles.mesaAdicionar}>
                <Text style={styles.mesaLetra}>Logout</Text>
            </TouchableOpacity>
            <View style={styles.mesas}>
                {
                    mesa.map(index => <MesaUnidade key={index} index={index} navigation={navigation} />)
                }
            
            </View>
        </View>
    );
}

function MesaUnidade({index, navigation}){
    return (
        <TouchableOpacity style={styles.mesaItem} onPress={() => navigation.navigate('Carrinho', { mesaIndex: index })}>
            <Text style={styles.mesaTexto}>{index}</Text>
        </TouchableOpacity>
    );
}

export default Mesa