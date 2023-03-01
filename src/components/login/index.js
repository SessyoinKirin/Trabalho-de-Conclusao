/*
 * @Author: SessyoinChen
 * @Date: 2023-03-01 10:30:41
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-01 10:57:59
 * @FilePath: \6Semestre\TrabalhoDeConclusao\src\components\login\index.js
 * @Description: 
 * 
 */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "./Title";
import Form from "./Form";

export default function Login() {
    return (
        <View style={styles.container}>
            <Title />
            <Form />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2c2c2c",
        paddingTop: 80,
    },
});