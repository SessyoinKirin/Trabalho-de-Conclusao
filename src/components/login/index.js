/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 10:30:41
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-17 14:32:01
 * @FilePath: \6Semestre\TrabalhoDeConclusao\src\components\login\index.js
 * @Description: 
 * 
 */
import React, { useState } from "react";
import { View, Text, TextInput, Touchable, TouchableOpacity, StyleSheet } from "react-native";
import styles from './estilos/loginCss'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Login({ navigation }) {
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [messeageLogin, setMesseageLogin] = useState("Preencher o que está pedindo")
    const [textButton, setTextButton] = useState("Entrar")

    return (
        <View style={estilo.container}>
            <View style={styles.boxTitle}>
                <Text style={styles.textTitle}>Los Hermanos</Text>
            </View>
            <View style={styles.formContext}>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Login:</Text>
                    <TextInput
                        onChangeText={setLogin}
                        value={login}

                        style={styles.input}
                        keyboardType="email-address" />
                    <Text style={styles.formLabel}>Senha:</Text>
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        style={styles.input}
                        keyboardType="visible-password"></TextInput>
                    <TouchableOpacity
                        style={
                            styles.btnEntrar
                        }
                        onPress={() => navigation.navigate('Cardápio')}
                    >
                        <Text style={styles.txtEntrar}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2c2c2c",
        paddingTop: 80,
    },
});