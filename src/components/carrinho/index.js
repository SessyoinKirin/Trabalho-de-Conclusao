/*
 * @Author: SessyoinChen
 * @Date: 2023-03-27 14:14:46
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-13 15:23:17
 * @FilePath: \Trabalho-de-Conclusao\src\components\carrinho\index.js
 * @Description: 
 * 
 */
import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../../../estiloGeral";

export default function Carrinho({ route, navigation }) {

    // const {index} = route.params

    const { item } = route.params
    console.log(route.params, 'parametro')
    // const [lista, setLista] = React.useState([item])

    const index = useMemo(()=>{
        const mesa = route.params.index
        navigation.setOptions({
            headerTitle: `Mesa ${mesa}`,
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          });
          console.log(mesa, 'index')
    },[index])
    // setLista(...[], item)
    return (
        <View style={styles.container}>
            <View style={[styles.carMain, styles.carBorderBottom]}>
                <TouchableOpacity onPress={() => navigation.navigate('Cardapio')} style={styles.carAdicionar}>
                    <Text style={styles.carLetra}>Adicionar</Text>
                </TouchableOpacity>
                <View style={{ flex: 5.5 }}>
                    {/* {
                        lista.map(lista => <View key={lista.id} style={styles.cardapioItem}>
                            <View style={{ flex: 2 }}><Image src={lista.thumbnail} alt="" style={[styles.cardapioImg, { width: 100, height: 100 }]} /></View>

                            <View style={[styles.cardapioDescBtn, { flex: 5 }]}>
                                <View style={[styles.cardapioTitulo, { flex: 3 }]}>
                                    <Text style={styles.cardapioTexto}>{lista.category_id}</Text>
                                </View>

                            </View>


                        </View>)
                    } */}
                    {
                        console.log(item)
                    }{
                        console.log(route.params, 'parametro')
                    }
                    {/* <Text style={styles.cardapioTexto}>{item}</Text> */}
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

