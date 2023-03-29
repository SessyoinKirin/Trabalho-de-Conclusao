import React, { useState } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity, StyleSheet, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../../../estiloGeral";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Carrinho({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={[estilo.main, estilo.borderBottom]}>

            </View>
            <View >
                
                <Text style={styles.detalheTexto}>Valor total:</Text>
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
                
                {/* <Button title="finalizar" style={[estilo.botoes, {width:'50%'}]}></Button> */}
            </View>
        </View>
    )
}
const estilo = StyleSheet.create({
    main: {
        flex: 5,
        backgroundColor: 'gray'
    },
    flexend: {
        alignContent:'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    secon: {
        flex: 1,
    },
    botoesInfo: {
        backgroundColor: '#5bc0de',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    botoesSuccess:{
        backgroundColor:'#5cb85c',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:20,
      },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      },

})