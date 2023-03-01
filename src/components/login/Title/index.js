import React from "react";
import {View, Text, StyleSheet} from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Los Hermanos</Text>
        </View>
    );
}