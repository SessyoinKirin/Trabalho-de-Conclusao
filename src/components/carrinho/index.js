/*
 * @Author: SessyoinChen
 * @Date: 2023-03-27 14:14:46
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-25 17:18:38
 * @FilePath: \Trabalho-de-Conclusao\src\components\carrinho\index.js
 * @Description: 
 * 
 */
import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../../../estiloGeral";

export default function Carrinho({ route, navigation }) {


    const { mesaIndex, item, count } = route.params
    const [currentMesaIndex, setCurrentMesaIndex] = useState(mesaIndex)
    // console.log(route.params, 'parametro')
    const [lista, setLista] = useState([]);

    useMemo(() => {
      if (item) {
        setLista(prevState => [...prevState, item]);
        console.log(mesaIndex,'index da mesa', currentMesaIndex, 'curretn')
      }
    }, [item]);


    useMemo(() => {
        navigation.setOptions({
            headerTitle: `Mesa ${currentMesaIndex}`,
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
        console.log(currentMesaIndex, 'currente', mesaIndex, 'mesaindex')
    }, [currentMesaIndex]);

function ListItem({item}){
    return<View style={styles.cardapioItem}>
    <View style={{ flex: 2 }}><Image src={item.thumbnail} alt="" style={[styles.cardapioImg, { width: 100, height: 100 }]} /></View>

    <View style={[styles.cardapioDescBtn, { flex: 5 }]}>
      <View style={[styles.cardapioTitulo, { flex: 3 }]}>
        <Text style={styles.cardapioTexto}>{item.title}</Text>
      </View>
      <View style={[styles.cardapioContador, { flex: 3 }]}>
        
        
      </View>
    </View>


  </View>
}
    // setLista(...[], item)
    return (
        <View style={styles.container}>
            <View style={[styles.carMain, styles.carBorderBottom]}>
                <TouchableOpacity onPress={() => navigation.navigate('Cardapio')} style={styles.carAdicionar}>
                    <Text style={styles.carLetra}>Adicionar</Text>
                </TouchableOpacity>
                <View style={{ flex: 5.5 }}>
                    
                    <FlatList
                        data={lista}
                        renderItem={({ item }) => <ListItem item={item} />}
                        keyExtractor={(item) => item.id}
                    />
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
