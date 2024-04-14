import React from "react";
import { View,  Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export default function Menu({top}) {
    const navigation = useNavigation();

    return (
        <View style={[styles.menuBox, {marginTop: top}]}>
            <TouchableOpacity style={styles.menuCircle} onPress={() => {
                navigation.navigate('geladeira')
            }}>
                <Image source={require('../../Assets/Freezer.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCircle} onPress={() => {
                navigation.navigate('buscar')
            }}>
                <Image source={require('../../Assets/Book.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCircle} onPress={() => {
                navigation.navigate('favorito')
            }}>
                <Image source={require('../../Assets/Heart.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCircle} onPress={() => {
                navigation.navigate('escrever')
            }}>
                <Image source={require('../../Assets/Pen.png')}/>
            </TouchableOpacity>
        </View>
    )
}