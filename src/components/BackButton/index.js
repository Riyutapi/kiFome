import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import styles from "./style";

export default function BackButton({top, left, color, onPress}) {
    return(
        <View>
            <TouchableOpacity onPress={onPress} style={[styles.button, {marginTop: top, marginLeft: left, backgroundColor: color}]}>
                <Image style={styles.img} source={require('../../Assets/Back.png')}/>
            </TouchableOpacity>
        </View>
    )
}