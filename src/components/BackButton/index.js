import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./style";


export default function BackButton({ top, left, color, onPress }) {
    const buttonColor = color ? "#D1D3C1" : "#F2F2EC";

    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.button,
                    { marginTop: top, marginLeft: left, backgroundColor: buttonColor },
                ]}
                onPress={onPress ? onPress : () => {}}>
                <Image style={styles.img} source={require("../../Assets/Back.png")} />
            </TouchableOpacity>
        </View>
    );
}
