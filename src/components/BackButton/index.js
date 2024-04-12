import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function BackButton({ top, left, color }) {
    return(
        <View>
            <TouchableOpacity style={[styles.button, {marginTop: top, marginLeft: left, backgroundColor: color}]}>
                <Image style={styles.img} source={require('../../Assets/Back.png')}/>
            </TouchableOpacity>
        </View>
    )
}
