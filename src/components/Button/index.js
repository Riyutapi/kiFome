import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';


export default function But() {
    const navigation = useNavigation();

    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('receita_pesquisa')}}>
                <Text style={styles.textButton}>Buscar</Text>
            </TouchableOpacity>
        </View>
    )
}