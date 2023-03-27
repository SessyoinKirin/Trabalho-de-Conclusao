import React, { useState } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity, StyleSheet, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./estilos/detalheCss";

export default function Detail({ route, navigation }){
    const {item} = route.params
    return(
        <View style={styles.container}>
            <img src={item.thumbnail} alt="" className='p-2' />
            <Text numberOfLines={2} style={styles.texto}>{item.title}</Text>
            <Text style={styles.preco}>R$: {item.price}</Text>
            <Button title="ordenar" onPress={() => navigation.navigate('Carrinho')}></Button>
        </View>
    )
}

