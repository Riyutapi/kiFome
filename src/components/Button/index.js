import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";


export default function But({texto, onPress}) {

    return(
        <View>
            <TouchableOpacity 
                style={[
                    styles.button,
                ]}
                onPress={onPress ? onPress : () => {}}>
                <Text style={styles.textButton}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
}