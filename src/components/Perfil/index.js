import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Perfil() {
    return (
        <View>
            <Text style={styles.backGround}></Text>
            <View style={styles.perfilBox}>
                <View style={styles.leftTitle}>
                    <Text style={styles.nameBox}>
                        <Text>Diego Freire - </Text>
                        <Text style={styles.Level}>Nivel 01</Text>
                    </Text>
                        <Text style={styles.category}>Auxiliar de Cozinha</Text>
                </View>
                <Text style={styles.imgBox}></Text>
            </View>
        </View>
    );
}