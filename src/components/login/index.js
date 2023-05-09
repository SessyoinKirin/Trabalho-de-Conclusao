/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 10:30:41
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-25 10:22:10
 * @FilePath: \Trabalho-de-Conclusao\src\components\login\index.js
 * @Description: 
 * 
 */
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from "react-native";
import styles from '../../../estiloGeral'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Login({ navigation }) {
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [messeageLogin, setMesseageLogin] = useState("Preencher o que está pedindo")
    const [textButton, setTextButton] = useState("Entrar")
    const [msgError, setMsgError] = useState("")

    function logar() {
        // console.log(navigation.navigate)
        // navigation.navigate('Mesa')
        if(login === 'acnologia' && password === 'acnologia'){
            navigation.navigate('ADM')
            setLogin(null)
            setPassword(null)
            setMsgError(null)
        }else if(login === 'povao' && password === 'povao'){
            navigation.navigate('Mesa')
            setLogin(null)
            setPassword(null)
            setMsgError(null)
        }else{
            setMsgError('E-Mail ou Senha inválida!')
        }
    }

    return (
        <KeyboardAvoidingView style={[styles.container, styles.loginContainer]} behavior="padding" keyboardVerticalOffset={50}>
            <View style={styles.loginboxTitle}>
                <Text style={styles.logintextTitle}>Los Hermanos Comanda Mobile</Text>
            </View>

            <View style={styles.loginformContext}>
                <View style={styles.loginform}>

                    <Text style={styles.loginformLabel}>E-Mail:</Text>
                    <TextInput
                        onChangeText={setLogin}
                        value={login}
                        style={styles.logininput}
                        keyboardType="email-address" />

                    <Text style={styles.loginformLabel}>Senha:</Text>
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        style={styles.logininput}
                        keyboardType="visible-password"></TextInput>
                    <TouchableOpacity
                        style={
                            styles.loginbtnEntrar
                        }
                        onPress={() => { logar() }}
                    >
                        <Text style={styles.logintxtEntrar}>{textButton}</Text>
                    </TouchableOpacity>
                    <Text style={styles.loginError}>{msgError}</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}


