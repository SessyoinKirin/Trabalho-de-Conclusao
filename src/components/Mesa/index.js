import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../../estiloGeral';

function Mesa({ navigation }) {
    const [mesa, setMesa] = React.useState([1, 2, 3, 4, 5, 6, 7])
  
    return (
  
      <View style={styles.mesaContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Los Hermanos')} style={styles.mesaAdicionar}>
                    <Text style={styles.mesaLetra}>Logout</Text>
                </TouchableOpacity>
        <View style={styles.mesas}>
        {
          mesa.map(index => <TouchableOpacity key={index} style={styles.mesaItem} onPress={() => navigation.navigate('Carrinho', {index:index})}>
            <Text style={styles.mesaTexto}>{index}</Text>
          </TouchableOpacity>)
        }
      </View>
      </View>
    );
  }

  export default Mesa