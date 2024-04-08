import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Menu() {
    return (
        <View style={styles.menuBox}>
            <TouchableOpacity style={styles.menuCircle}>
                <Image source={require('../../Assets/Freezer.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCircle}>
                <Image source={require('../../Assets/Book.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCircle}>
                <Image source={require('../../Assets/Heart.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCircle}>
                <Image source={require('../../Assets/Pen.png')}/>
            </TouchableOpacity>
        </View>
    )
}