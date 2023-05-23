/*
 * @Author: SessyoinChen
 * @Date: 2023-04-11 09:40:11
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-23 16:08:05
 * @FilePath: \Trabalho-de-Conclusao\src\components\Mesa\index.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native';
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
                    {/* <FlatList data={state}
                        renderItem={({ item }) => <MesaUnidade index={item.id} lista={item.lista} navigation={navigation}
                        />}
                        keyExtractor={(item)=>item.id}
                        
                    /> */}
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

    console.log(lista.length, 'lista de item');

    const mesaStyle = state[index]?.enabled ? !lista.length > 0 ? styles.mesaDesocupada : styles.mesaOcupada : [styles.mesaItem, styles.mesaItemDisabled];


    const mesaTexto = state[index]?.enabled ? styles.mesaTexto : [styles.mesaTexto, styles.mesaTextoDisabled];
    return (
        <TouchableOpacity style={mesaStyle} onPress={() => navigation.navigate('Carrinho', { mesaIndex: index })} disabled={!state[index].enabled}>
            <Text style={mesaTexto}>{index + 1}</Text>
        </TouchableOpacity>
    );
}

export default Mesa