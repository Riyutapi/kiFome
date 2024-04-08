import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import styles from "./style";

export default function BackButton() {
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.img} source={require('../../Assets/Back.png')}/>
            </TouchableOpacity>
        </View>
    )
}