import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function Coin() {
    return(
        <View style={styles.coinBox}>
            <Image style={styles.imageCoin} source={require('../../Assets/coin.png')}/>
            <Text>00000</Text>
        </View>
    )
}
