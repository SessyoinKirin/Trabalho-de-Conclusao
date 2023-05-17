/*
 * @Author: SessyoinChen
 * @Date: 2023-05-17 09:38:56
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-17 09:39:19
 * @FilePath: \Trabalho-de-Conclusao\src\components\desabilitaMesa\index.js
 * @Description: 
 * 
 */
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../../estiloGeral';
import GlobalContext from '../contexto';

export default function DesabilitarMesa({ navigation }) {
    const { state, dispatch } = React.useContext(GlobalContext)
    return (
        <View style={styles.mesaContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Los Hermanos')} style={styles.mesaAdicionar}>
                <Text style={styles.mesaLetra}>Logout</Text>
            </TouchableOpacity>
            <View style={styles.mesas}>
                {
                    state.map(item => <MesaUnidade key={item.id} index={item.id}/>)
                }

            </View>
        </View>
    )
}

function MesaUnidade({ index}) {
    const {state, dispatch} = React.useContext(GlobalContext)
    // console.log(state, 'estado')
    const mesaStyle = state[index]?.enabled ? styles.mesaItem : [styles.mesaItem, styles.mesaItemDisabled];
    const mesaTexto = state[index]?.enabled ? styles.mesaTexto : [styles.mesaTexto, styles.mesaTextoDisabled];
    return (
        <TouchableOpacity style={mesaStyle} onPress={() => {
            
            dispatch({
                type: "mudeEstado",
                payload: index,
            }),
            Alert.alert('Mesa foi alterado com sucesso!')
        }}>
            <Text style={mesaTexto}>{index}</Text>
        </TouchableOpacity>
    );
}