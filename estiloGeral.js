/*
 * @Author: SessyoinChen
 * @Date: 2023-03-29 09:43:59
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-04 15:06:43
 * @FilePath: \6Semestre\TCCFinal\Trabalho-de-Conclusao\estiloGeral.js
 * @Description: 
 * 
 */

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    // login
    loginContainer: {
        backgroundColor: "#1c1c1c",
        paddingTop: 50,
    },
    loginformContext: {
        width: '100%',
        height: '90%',
        bottom: 0,
        backgroundColor: '#2c2c2c',
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
        color: '#fff',
        fontSize: 20,
        paddingLeft: 20,
    },
    logininput: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
        fontSize: 25,
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
        fontSize: 40,
        fontWeight: 'bold',
    },
    loginError: {
        color: '#fff',
        fontSize: 25,
        marginTop:40,
        paddingLeft:40,
        
    },

    // detalhe

    carrinhoTexto: {
        padding: 2,
        margin: 5,
        fontSize: 20,
        color:'#fff',
    },
    carrinhoPreco: {
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
    },

    //Mesa
    mesaContainer: {
        flexDirection: 'row',
        flex:1,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // cor de fundo
        backgroundColor:'#3c3c3c',
      },
      mesaItem: {
        width: '30%',
        height: 100,
        // cor de item
        backgroundColor: '#1c1c1c',
        marginVertical: 5,
        margin: 5,
        justifyContent: 'center',
      },
      mesaTexto: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight:'bold',
        color:'#fff',
      }
});

export default styles
