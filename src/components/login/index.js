/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 10:30:41
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-06-21 13:03:34
 * @FilePath: \Trabalho-de-Conclusao\src\components\login\index.js
 * @Description: 
 * 
 */
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ImageBackground } from "react-native";
import styles from '../../../estiloGeral'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Login({ navigation }) {
    const [login, setLogin] = useState(null)
    // const [password, setPassword] = useState(null)
    const [messeageLogin, setMesseageLogin] = useState("Preencher o que está pedindo")
    const [textButton, setTextButton] = useState("Entrar")
    const [msgError, setMsgError] = useState("")
    const [password, setPassword] = useState('');


    function logar() {
        // console.log(navigation.navigate)
        // navigation.navigate('Mesa')
        if (login === 'admin' && password === 'admin') {
            navigation.navigate('ADM')
            setLogin(null)
            setPassword(null)
            setMsgError(null)
        } else if (login === 'povao' && password === 'povao') {
            navigation.navigate('Mesa')
            setLogin(null)
            setPassword(null)
            setMsgError(null)
        } else {
            setMsgError('Usuário ou Senha inválida!')
        }
    }


    return (
        <View style={[styles.container, styles.loginContainer]} behavior="padding" keyboardVerticalOffset={50}>
            <ImageBackground source={require('../../../assets/fundo1-escuro.jpg')} style={styles.imgFundo1}>
                <View style={styles.loginboxTitle}>
                    <Text style={styles.logintextTitle}>Los Hermanos Comanda Mobile</Text>
                </View>

                <View style={styles.loginformContext}>
                    <View style={styles.loginform}>

                        <Text style={styles.loginformLabel}>Usuário:</Text>
                        <TextInput
                            onChangeText={setLogin}
                            value={login}
                            style={styles.logininput}
                            keyboardType="email-address" />

                        <Text style={styles.loginformLabel}>Senha:</Text>

                        <TextInput
                            style={styles.logininput}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}
                        />

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
            </ImageBackground >
        </View >
    );
}


