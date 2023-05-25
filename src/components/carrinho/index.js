/*
 * @Author: SessyoinChen
 * @Date: 2023-03-27 14:14:46
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-05-22 11:27:52
 * @FilePath: \Trabalho-de-Conclusao\src\components\carrinho\index.js
 * @Description: 
 * 
 */
import React, { useMemo, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, Image, FlatList, Alert, TextInput, Button } from "react-native";
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
            headerTitle: `Mesa ${currentMesaIndex + 1} `,
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
        if (currentMesaIndex !== mesaIndex) {
            navigation.setOptions({
                headerTitle: `Mesa ${currentMesaIndex +1}`,
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
        const valorParcial = useMemo(() => {
            const itemPrice = Number(item.preco);
            const itemCount = Number(item.count);
            const parcial = itemPrice * itemCount;

            return parcial.toFixed(2);
        }, [item.preco, item.count]);


        const [showModal, setShowModal] = React.useState(false)

        return (
            <View style={[styles.cardapioItem]}>

                <View style={{ flexDirection: 'row', flex: 4.5 }}>
                    {
                        showModal && (
                            <Modal animationType="slide" transparent={true}>

                                <View style={styles.modalCenteredView}>
                                    <View style={styles.modalViewConfirmacao}>
                                        <Text style={styles.modalText}>Deseja mesmo remover o item da mesa?</Text>

                                        <View style={[styles.carrinhoModalBotoes, { flexDirection: 'row', }]}>
                                            <TouchableOpacity onPress={() => {
                                                dispatch({
                                                    type: 'Decrease',
                                                    payload: { mesaIdforDecrea: currentMesaIndex, itemIdforDecrea: item.id }
                                                })
                                            }} style={styles.carrinhoModalBtnSim}>
                                                <Text style={styles.carrinhoBotaoTexto}>Sim</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => setShowModal(false)} style={styles.carrinhoModalBtnNao}>
                                                <Text style={styles.carrinhoBotaoTexto}>Não</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            </Modal>
                        )
                    }


                    {/* imagem */}
                    <View style={{ flex: 2 }}>
                        <Image src={item.img} alt="Foto do produto" style={[styles.cardapioImg, { width: 100, height: 100 }]} />
                    </View>

                    <View style={[styles.cardapioDescBtn, { flex: 5, backgroundColor: '', flexDirection: 'column' }]}>
                        {/* Nome e botão de remover */}
                        <View style={[styles.cardapioTitulo, { flex: 2, marginTop: 12, marginLeft: 3 }]}>
                            <Text style={styles.cardapioTexto} numberOfLines={1}>{item.nome}</Text>
                            <TouchableOpacity onPress={() => removerItem(item.data)} style={[styles.carrinhoBotaoRemover, item.removerDesativado && styles.cardapioBotaoAddDesativado, { flex: 3 }]} disabled={item.removerDesativado}>
                                <Text style={[styles.cardapioAdd, item.removerDesativado && styles.cardapioItemDesativado]}>x</Text>
                            </TouchableOpacity>
                        </View>


                        {/* Contador e preço unitário */}
                        <View style={[styles.cardapioContador]}>
                            <View style={{ flexDirection: 'row', flex: 1, }}>
                                <TouchableOpacity
                                    disabled={item.removerDesativado}
                                    onPress={() => {
                                        if (item.count === 1) {
                                            setShowModal(true)
                                        } else {
                                            dispatch({
                                                type: 'Decrease',
                                                payload: { mesaIdforDecrea: currentMesaIndex, itemIdforDecrea: item.id }
                                            })
                                        }
                                    }}
                                    style={[styles.cardapioBotaoCountMenos, item.removerDesativado && styles.cardapioItemDesativado, { flex: 1 }]}
                                >
                                    <Text style={[styles.cardapioSinal, item.removerDesativado && styles.cardapioItemDesativado]}>-</Text>
                                </TouchableOpacity>


                                <Text style={[styles.cardapioQuantidade, item.removerDesativado && styles.cardapioItemDesativado]}>{item.count}</Text>

                                <TouchableOpacity
                                    disabled={item.removerDesativado}
                                    onPress={() => {
                                        dispatch({
                                            type: 'Increase',
                                            payload: { mesaIdforIncrea: currentMesaIndex, itemIdforIncrea: item.id }
                                        })
                                    }}
                                    style={[styles.cardapioBotaoCountMais, item.removerDesativado && styles.cardapioItemDesativado, { flex: 1 }]}
                                >
                                    <Text style={[styles.cardapioSinal, item.removerDesativado && styles.cardapioItemDesativado]}>+</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.cardapioTituloPrecoUnitario} numberOfLines={1}>{item.preco.toLocaleString('pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL',
                                })
                            }
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', flex: 1.5, justifyContent: 'space-between', margin: 5 }}>
                    <Text style={styles.cardapioTexto} numberOfLines={1}>Valor Parcial:</Text>
                    <Text style={[styles.cardapioTexto, { fontStyle: 'italic' }]} numberOfLines={1}>R$ {valorParcial.toLocaleString('pt-BR',
                        {
                            style: 'currency',
                            currency: 'BRL',
                        })
                    }
                    </Text>
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
                        renderItem={({ item }) => <ListItem item={item} />}
                        keyExtractor={(item) => item.data}
                    />
                </View>

            </View>
            <View style={styles.carrinhoRotape}>
                {state[currentMesaIndex].lista.length > 0 ? (
                    <>
                        <Text style={styles.carTexto}>Total: R$ {valorTotal.toLocaleString('pt-BR',
                            {
                                style: 'currency',
                                currency: 'BRL',
                            })}</Text>
                        <View style={styles.carFlexend}>
                            <View style={{ width: '50%', height: '100%' }}>
                                <TouchableOpacity
                                    style={styles.carBotoesSuccess}
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
                                        <View style={styles.modalViewEnviar}>
                                            <Text style={styles.modalText}>Alguma observação?(opicional)</Text>
                                            <TextInput value={observacao} onChange={(evt) => {
                                                // console.log(evt.nativeEvent.text, 'observacao')
                                                setObservacao(evt.nativeEvent.text)
                                            }} style={styles.modalInput} multiline={true} numberOfLines={6} />
                                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, }}>
                                                {/* <TouchableOpacity onPress={() => setShowModal(false)} style={styles.modalButtonSemComplemento}>
                                                    <Text style={styles.carrinhoModalBtnNaoText}>Sem observação</Text>
                                                </TouchableOpacity> */}
                                                <TouchableOpacity onPress={() => {
                                                    handleEnviar()
                                                    toggleRemoverDesativado()
                                                }} style={styles.modalButtonEnviar}>
                                                    <Text style={styles.modalButtonText}>Enviar</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                            <View style={{ width: '50%', height: '100%' }}>
                                <TouchableOpacity style={styles.carBotoesLaranja} onPress={() => {
                                    dispatch({
                                        type: 'esvazea',
                                        payload: { mesaID: currentMesaIndex }
                                    })
                                }}>
                                    <Text style={styles.carTextoBotao}>Fechar Conta</Text>
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