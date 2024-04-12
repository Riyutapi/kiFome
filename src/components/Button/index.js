import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import styles from "./style";

export default function But() {
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Buscar</Text>
            </TouchableOpacity>
        </View>
    )
}