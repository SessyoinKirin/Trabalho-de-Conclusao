/*
 * @Author: SessyoinChen
 * @Date: 2023-04-25 09:10:26
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-25 10:24:00
 * @FilePath: \Trabalho-de-Conclusao\src\components\adm\index.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../../estiloGeral';
import Cardapio from '../cardapio';

export default function Adm({ navigation }) {
    return <View style={[styles.container, {backgroundColor:'#3c3c3c'}]}>

        <View style={{ flex: 1 }}>

        </View>
        <View style={{ flex: 1 }}>

        </View>
        {/* <View style={{ flex: 1, padding:30 }}>
            <TouchableOpacity style={styles.admBotao}>
                <Text style={styles.admTexto}>Remover Mesa</Text>
            </TouchableOpacity>
        </View> */}
        <View style={{ flex: 1, padding:30 }}>
            <TouchableOpacity style={styles.admBotao} onPress={()=>alert('Mesa adicionado com sucesso!')}>
                <Text style={styles.admTexto}>Adicionar Mesa</Text>
            </TouchableOpacity>
        </View>
        
        
        <View style={{ flex: 1, padding:30 }}>
            <TouchableOpacity style={styles.admBotao} onPress={()=>navigation.navigate('Los Hermanos')}>
                <Text style={styles.admTexto}>Logout</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>

        </View>
        <View style={{ flex: 1 }}>

        </View>
    </View>
}