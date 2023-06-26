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
        color: '#FF3701',
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
    carrinhoBotaoRemover: {
        //backgroundColor: '#F23005',
        backgroundColor: '#FC0000',
        position: 'absolute',
        width: 40,
        height: 35,
        top: 0,
        right: 10,
        paddingVertical: 2,
        paddingHorizontal: 15,
        borderRadius: 5,
        // marginTop: 5,
        // marginLeft: 120,
        // marginRight: 3,
        alignItems: 'flex-end',
    },

    // Editado por Marcel 21-05-23

    cardapioTitulo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    cardapioValorParcial: {
        justifyContent: 'space-between',
    },
    cardapioTexto: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        marginHorizontal: 5,
    },
    cardapioTituloPrecoUnitario: {
        padding: 2,
        margin: 2,
        fontSize: 25,
        color: 'gray',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    cardapioAdd: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    //

    cardapioContador: {
        flexDirection: 'row',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },

    cardapioQuantidade: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        margin: 0,
        flex: 1,
    },

    cardapioBotaoCountMais: {
        backgroundColor: '#00B1BC',
        //  padding: 5,
        borderRadius: 5,
        //  marginTop: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginRight: 20,
        //   marginLeft: 10,
        //   marginRight: 10,
        // position: 'absolute',
        // top: 17,
        // left: 10,
        // width: 30,
        // height: 30,
        width: 200, 
        height: 30, 
    },

    cardapioBotaoCountMenos: {
        backgroundColor: '#00B1BC',
        //  padding: 5,
        borderRadius: 5,
        //  marginTop: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 10,
        //   marginLeft: 10,
        //   marginRight: 10,
        // position: 'absolute',
        // top: 17,
        // left: 10,
        // width: 30,
        // height: 30,
        width: 200, 
        height: 30, 
    },

    cardapioBotaoCount: {
        //  padding: 5,
        borderRadius: 5,
        // marginTop: 10,
        marginHorizontal: 10,
        // width: '10%',
        alignItems: 'center',
        alignSelf: 'center',
    },

    cardapioSinal: {
        fontSize: 21,
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
        // color: 'white',
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
        flexDirection: 'column',
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

    // editado por marcel 18-05-23

    mesaOcupada: {
        width: '30%',
        height: 100,
        // cor de item
        // aspectRatio: 1,
        backgroundColor: 'orange',
        borderRadius: 10,
        elevation: 10,
        marginVertical: 5,
        margin: 5,
        justifyContent: 'center',
    },

    mesaDesocupada: {
        width: '30%',
        height: 100,
        // cor de item
        // aspectRatio: 1,
        backgroundColor: 'green',
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
        borderRadius: 15,
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
    carBotoesLaranja: {
        backgroundColor: '#F25A05',
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
        fontSize: 25,
        color: '#fff',
        alignSelf: 'flex-end',
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
        borderColor: 'gray',
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
    mesaItemDisabled: {
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

    // Modal

    // Alterado por Marcel 23-05-23


    modalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    modalViewConfirmacao: {
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
        height: 230,
        width: 300,
    },

    modalViewEnviar: {
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

    carrinhoModalBotoes: {
        flexDirection: 'row',
    },

    carrinhoModalBtnSim: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
        flex: 2,
    },

    carrinhoModalBtnNao: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
        flex: 2,
    },

    carrinhoBotaoTexto: {
        fontSize: 22,
        color: 'white',
        padding: 5,
    },

    modalText: {
        marginBottom: 15,
        fontSize: 20,
        textAlign: "center",
        justifyContent: 'center',
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

    modalButtonEnviar: {
        backgroundColor: "#5bc0de",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: 5,
        // margin: 1,
        width: '50%',
    },

    modalButtonSemComplemento: {
        backgroundColor: "red",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginTop: 10,
        margin: 14,
        width: '60%',
        flex: 2,
    },


    carrinhoModalBtnNaoText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    // cardápio + carrinho

    cardapioColunas: {
        flex: 1,
        // flex: 5.5,
        flexDirection: 'column',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
        // cor de fundo
        backgroundColor: '#3c3c3c',
    },

    cardapioItem: {
        width: '100%',
        height: 160,
        // flexDirection: 'row',
        flex: 5,

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

    cardapioItemLista: {
        width: '100%',
        height: 110,
        flexDirection: 'row',
        flex: 5,
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
        marginBottom: 0,
        borderRadius: 10,
        //marginBottom: 30,
    },

    cardapioDescBtn: {
        // paddingRight: 10,
        // paddingBottom: 10,
        // marginBottom: 30,

    },
    cardapioBotaoAdd: {
        backgroundColor: '#00959F',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },


});

export default styles
