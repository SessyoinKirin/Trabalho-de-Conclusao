/*
 * @Author: SessyoinChen
 * @Date: 2023-03-29 09:43:59
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-04-25 13:15:47
 * @FilePath: \Trabalho-de-Conclusao\estiloGeral.js
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
        paddingLeft: 30,
    },
    logininput: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
        fontSize: 25,
        alignSelf: 'center',
    },
    loginbtnEntrar: {
        borderRadius: 50,
        alignSelf: 'center',
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
        marginTop: 40,
        paddingLeft: 40,

    },

    // detalhe

    carrinhoTexto: {
        padding: 2,
        margin: 5,
        fontSize: 20,
        color: '#fff',
    },
    carrinhoPreco: {
        fontSize: 25,

    },

    // cardapio

    cardapioColunas: {
        flex: 1,
        // flex: 5.5,
        flexDirection: 'column',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
        // cor de fundo
        
        backgroundColor: '#3c3c3c',
    },
    cardapioTexto: {
        padding: 2,
        margin: 2,
        fontSize: 20,
        color: '#fff',
    },
    cardapioItem: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        // cor de item
        backgroundColor: '#1c1c1c',
        marginVertical: 5,
        margin: 5,
        justifyContent: 'center',
    },
    cardapioImg: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    cardapioDescBtn: {
        flexDirection: 'column',
        paddingRight: 10,
        paddingBottom: 10,
    },
    cardapioBotaoAdd: {
        backgroundColor: '#f23005',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginLeft:3,
        marginRight:3,
        alignItems: 'center',
    },
    cardapioTitulo: {
        justifyContent: 'center',
    },
    cardapioAdd: {
        fontSize: 17,
        fontWeight: 'bold',
        // color: '#fff',
    },
    cardapioContador: {
        flexDirection: 'row',
    },
    cardapioBotaoCount: {
        backgroundColor: '#5cb85c',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    cardapioSinal:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardapioInput: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 15,
        fontSize: 25,
        alignSelf: 'center',
    },

    //Mesa
    mesaContainer: {
        flex: 1,
    },
    mesas: {
        flex: 5.5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // cor de fundo
        backgroundColor: '#3c3c3c',
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
        fontWeight: 'bold',
        color: '#fff',
    },
    mesaAdicionar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#1c1c1c',
        backgroundColor: '#2c2c2c',
    },
    mesaLetra: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 2,
    },

    //Carrinho
    carMain: {
        flex: 5,
        backgroundColor: '#3c3c3c',
    },
    carAdicionar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#1c1c1c',
        backgroundColor: '#2c2c2c',

    },
    carLetra: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    carFlexend: {
        alignContent: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    carrinhoRotape: {
        backgroundColor: '#1c1c1c',
    },
    carBotoesInfo: {
        backgroundColor: '#5bc0de',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    carBotoesSuccess: {
        backgroundColor: '#5cb85c',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    carTextoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    carBorderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    carTexto: {
        padding: 2,
        margin: 5,
        fontSize: 20,
        color: '#fff',
    },
    carPreco: {
        fontSize: 17,
        fontWeight: 'bold',

    },

    //ADM
    admBotao: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#1c1c1c',
        backgroundColor: '#2c2c2c',
    },
    admTexto: {
        padding: 2,
        margin: 5,
        fontSize: 20,
        color: '#fff',
    },
});

export default styles
