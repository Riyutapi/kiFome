import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Adicionar({ color, onPress }) {
    const handlePress = onPress || (() => {});

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.addButton2, { backgroundColor: color }]}>
            <Text style={styles.addTextButton}>+</Text>
        </TouchableOpacity>

    );
}
