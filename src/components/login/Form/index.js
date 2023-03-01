/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 10:39:23
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-01 11:05:41
 * @FilePath: \6Semestre\TrabalhoDeConclusao\src\components\login\Form\index.js
 * @Description: 
 * 
 */
import React, {useState} from "react";
import {View, Text, TextInput, Touchable, TouchableOpacity} from "react-native";
import styles from "./style";


export default function Form(){

const [login, setLogin] = useState(null)
const [password, setPassword] = useState(null)
const [messeageLogin, setMesseageLogin] = useState("Preencher o que está pedindo")
const [textButton, setTextButton] = useState("Entrar")


// function validationImc(){
//     if(weight != null && height != null){
//         imcCalculator()
//         setHeight(null)
//         setWeight(null)
//         setMesseageImc("Seu imc é igual: ")
//         setTextButton("Calcular novamente")
//         return
//     }
//     setImc(null)
//         setTextButton("Calcular")
//         setMesseageImc("Preencha o que pediu")
// }

// function gerarDados(){

// }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Login:</Text>
                <TextInput 
                onChangeText={setLogin}
                value={login}
                
                style={styles.input}
                keyboardType="email-address"/>
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
            >
                <Text style={styles.txtEntrar}>{textButton}</Text>
            </TouchableOpacity>
            </View>
            
            
            
        </View>
    );
}