/*
 * @Author: SessyoinChen
 * @Date: 2023-03-29 09:43:59
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-17 09:43:38
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
    imgFundo1: {
        flex: 1,
        resizeMode: 'center',
    },

    loginContainer: {
        backgroundColor: "#1c1c1c",
        paddingTop: 0,
    },
    loginformContext: {
        //width: '100%',
        //height: '90%',
        //bottom: 0,
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 10,
        //opacity: 0.5,
        //borderTopLeftRadius: 20,
        //borderTopRightRadius: 20,
        margin: 30,
    },
    loginform: {
        width: '100%',
        height: 'auto',
        marginTop: 10,
        padding: 10,
        zIndex: 1,
    },
    loginformLabel: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 22,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 5,
    },
    logininput: {
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#e4e4e4',
        height: 45,
        margin: 12,
        paddingLeft: 10,
        fontSize: 25,
        alignSelf: 'center',
    },
    loginbtnEntrar: {
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#f23005',
        paddingTop: 15,
        paddingBottom: 17,
        marginLeft: 12,
        marginTop: 40,
    },
    logintxtEntrar: {
        fontSize: 25,
        color: 'white',
        fontWeight: '600',
    },
    loginboxTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        textAlign: 'center',
    },
    logintextTitle: {
        color: '#f23045',
        fontSize: 40,
        paddingTop: 50,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    loginError: {
        color: '#fff',
        fontSize: 25,
        marginTop: 40,
        alignSelf: 'center',
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
        textAlign: 'center',
    },
    cardapioItem: {
        width: '100%',
        height: 120,
        flexDirection: 'row',

        // cor de item
        backgroundColor: '#1c1c1c',
        marginVertical: 5,
        marginBottom: 10,
        marginRight: 20,
        justifyContent: 'center',
        borderRadius: 10, // Adicionar um raio de borda para suavizar as bordas
        shadowColor: '#000', // Adicionar uma sombra
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardapioImg: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
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
        marginLeft: 3,
        marginRight: 3,
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
    cardapioSinal: {
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
    cardapioItemDesativado: {
        opacity: 0.5,
    },
    cardapioBotaoAddDesativado: {
        backgroundColor: 'gray',
    },

    //Mesa
    mesaContainer: {
        flex: 1,
        backgroundColor: '#3c3c3c',
    },
    mesas: {
        flex: 5.5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // cor de fundo
        padding: 10,
    },
    mesaItem: {
        width: '30%',
        height: 100,
        // cor de item
        // aspectRatio: 1,
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        elevation: 10,
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
    mesaTextoDisabled: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000',
    },
    mesaAdicionar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#2c2c2c',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: ['#1c1c1c', '#0c0c0c'],
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
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
        margin: 10,
        backgroundColor: '#2c2c2c',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: ['#1c1c1c', '#0c0c0c'],
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#1c1c1c',
        backgroundColor: '#2c2c2c',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    admTexto: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    mesaItemDisabled:{
        width: '30%',
        height: 100,
        // cor de item
        // aspectRatio: 1,
        backgroundColor: 'gray',
        borderRadius: 10,
        elevation: 10,
        marginVertical: 5,
        margin: 5,
        justifyContent: 'center',
    },

    //Modal
    modalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: '#BFBFBF',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 400,
        width: 300,
    },
    modalText: {
        marginBottom: 15,
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
    },
    modalInput: {
        height: 200,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        paddingTop: 20,
        fontSize: 20,
    },
    modalButton: {
        backgroundColor: "#5bc0de",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        width: '60%',
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }

});

export default styles
