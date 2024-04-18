import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function BackButton({top, left, color, onPress}) {
    return(
        <View>
            <TouchableOpacity style={[styles.button, {marginTop: top, marginLeft: left, backgroundColor: color}]} onPress={onPress ? onPress : () => {}}>
                <Image style={styles.img} source={require('../../Assets/Back.png')}/>
            </TouchableOpacity>
        </View>
    )
}
