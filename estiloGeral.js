/*
 * @Author: SessyoinChen
 * @Date: 2023-03-29 09:43:59
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-29 09:53:55
 * @FilePath: \6Semestre\TrabalhoDeConclusao\estiloGeral.js
 * @Description: 
 * 
 */

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    // login

    loginformContext: {
        width: '100%',
        height: '90%',
        bottom: 0,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 30,
    },
    loginform: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    loginformLabel: {
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20,
    },
    logininput: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    loginbtnEntrar: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#f23005',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    logintxtEntrar: {
        fontSize: 20,
        color: '#3c3c3c',
    },
    loginboxTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    logintextTitle: {
        color: '#f23045',
        fontSize: 30,
        fontWeight: 'bold',
    },

    // detalhe

    detalheTexto: {
        padding: 2,
        margin: 2,
        fontSize: 20,
    },
    detalhePreco: {
        fontSize: 25,

    },

    // cardapio

    cardapioColunas: {
        flex: 1
    },
    cardapioTexto: {
        padding: 2,
        margin: 2,
        fontSize: 20,
    }
});

export default styles
