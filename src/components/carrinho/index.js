/*
 * @Author: SessyoinChen
 * @Date: 2023-03-27 14:14:46
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-18 10:37:50
 * @FilePath: \Trabalho-de-Conclusao\src\components\carrinho\index.js
 * @Description: 
 * 
 */
import React, { useMemo, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, Image, FlatList, Alert, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../../../estiloGeral";
import GlobalContext from "../contexto";
import moment from "moment/moment";


export default function Carrinho({ route, navigation }) {

    const { state, dispatch } = React.useContext(GlobalContext)
    const { mesaIndex, item, count } = route.params
    const [currentMesaIndex, setCurrentMesaIndex] = useState(mesaIndex)
    // console.log(route.params, 'parametro')
    const [modalVisible, setModalVisible] = React.useState(false);
    const [observacao, setObservacao] = React.useState('');

    useEffect(() => {
        if (item) {
            // setLista(prevState => [...prevState, { ...item, count, removerDesativado: false }]);
            console.log('item adicionado', item)
            dispatch({
                type: 'addLista',
                payload: { itemId: currentMesaIndex, newItem: { ...item, count, removerDesativado: false, data: new Date() } }
            })

        }
    }, [item]);

    

    function toggleRemoverDesativado() {
        dispatch({
            type: 'desativaRemocao',
            payload: { index: currentMesaIndex }
        })

    }

    function toggleModal() {
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: `Mesa ${currentMesaIndex}`,
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
        if (currentMesaIndex !== mesaIndex) {
            navigation.setOptions({
                headerTitle: `Mesa ${currentMesaIndex}`,
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            });
        }
    }, [currentMesaIndex, mesaIndex, navigation]);

    function removerItem(id) {
        console.log('remove', id)
        dispatch({
            type: 'removeItem',
            payload: { id: id, mesa: currentMesaIndex }
        })
    }


    const valorTotal = useMemo(() => {
        const total = state[currentMesaIndex].lista.reduce((acc, cur) => {
            const itemPrice = Number(cur.preco);
            const itemCount = Number(cur.count);

            // console.log(`itemPrice: ${itemPrice}, itemCount: ${itemCount}`);

            return acc + (itemPrice * itemCount);
        }, 0);

        return total.toFixed(2);
    }, [state[currentMesaIndex].lista]);




    function ListItem({ item }) {
        return (
            <View style={styles.cardapioItem}>
                {/* imagem */}
                <View style={{ flex: 2 }}>
                    <Image src={item.img} alt="" style={[styles.cardapioImg, { width: 100, height: 100 }]} />
                </View>
                {/* imagem */}
                <View style={[styles.cardapioDescBtn, { flex: 5 }]}>
                    <View style={[styles.cardapioTitulo, { flex: 3 }]}>
                        <Text style={styles.cardapioTexto} numberOfLines={1}>{item.nome}</Text>
                    </View>
                    <View style={[styles.cardapioContador, { flex: 3, alignItems: 'center' }]}>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.cardapioTexto}>{item.count} x {item.preco}</Text>
                        </View>
                        <TouchableOpacity onPress={() => removerItem(item.data)} style={[styles.cardapioBotaoAdd, item.removerDesativado && styles.cardapioBotaoAddDesativado, { flex: 3 }]} disabled={item.removerDesativado}>
                            <Text style={[styles.cardapioAdd, item.removerDesativado && styles.cardapioItemDesativado]}>Remover</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }

    function handleEnviar() {
        console.log('Mesa: ', currentMesaIndex)
        console.log("Itens do carrinho:")
        state[currentMesaIndex].lista.forEach((item) => {
            if (!item.removerDesativado) {
                console.log(item.nome, ', quantidade: ', item.count)
            }
        });
        console.log("Observação:", observacao)
        toggleModal()
        Alert.alert('Observação e pedido enviado com sucesso!')
        setObservacao('')
    }
    // setLista(...[], item)
    return (
        <View style={styles.container}>
            <View style={[styles.carMain, styles.carBorderBottom]}>
                <TouchableOpacity onPress={() => navigation.navigate('Cardapio')} style={styles.carAdicionar}>
                    <Text style={styles.carLetra}>Adicionar</Text>
                </TouchableOpacity>
                <View style={{ flex: 5.5 }}>
                    <FlatList
                        data={state[currentMesaIndex].lista}
                        renderItem={({ item }) => <ListItem item={item}/>}
                        keyExtractor={(item) => item.data }
                    />
                </View>

            </View>
            <View style={styles.carrinhoRotape}>
                {state[currentMesaIndex].lista.length > 0 ? (
                    <>
                        <Text style={styles.carTexto}>Valor total: {valorTotal}</Text>
                        <View style={styles.carFlexend}>
                            <View style={{ width: '50%', height: '100%' }}>
                                <TouchableOpacity
                                    style={styles.carBotoesInfo}
                                    onPress={() => {

                                        toggleModal()
                                    }}
                                >
                                    <Text style={styles.carTextoBotao}>Enviar</Text>
                                </TouchableOpacity>
                                <Modal animationType="slide" transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {

                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <View style={styles.modalCenteredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>Alguma observação?</Text>
                                            <TextInput value={observacao} onChange={(evt) => {
                                                // console.log(evt.nativeEvent.text, 'observacao')
                                                setObservacao(evt.nativeEvent.text)
                                            }} style={styles.modalInput} multiline={true} numberOfLines={6} />
                                            <TouchableOpacity onPress={() => {
                                                handleEnviar()
                                                toggleRemoverDesativado()
                                            }} style={styles.modalButton}>
                                                <Text style={styles.modalButtonText}>Enviar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                            <View style={{ width: '50%', height: '100%' }}>
                                <TouchableOpacity style={styles.carBotoesSuccess} onPress={() => {
                                    dispatch({
                                        type: 'esvazea',
                                        payload: {mesaID: currentMesaIndex}
                                    })
                                }}>
                                    <Text style={styles.carTextoBotao}>Finalizar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                ) : (
                    <Text style={[styles.cardapioTexto, { alignSelf: 'center', padding: 10 }]}>Nenhum item encontrado.</Text>
                )}
            </View>


        </View>
    )
}