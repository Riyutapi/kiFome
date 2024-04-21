import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function PerfilComponent({color, left}){
    const navigation = useNavigation();
    
    return (
        <View>
            <Text style={[styles.backGround, {backgroundColor: color, marginLeft: left}]}></Text>
            <TouchableOpacity style={styles.perfilBox} onPress={() => {
                navigation.navigate('perfil')
            }}>
                <View style={styles.leftTitle}>
                    <Text style={styles.nameBox}>
                        <Text>Diego_Freire - </Text>
                        <Text style={styles.Level}>Nível 01</Text>
                    </Text>
                        <Text style={styles.category}>Auxiliar de Cozinha</Text>
                </View>
                <Text style={styles.imgBox}></Text>
            </TouchableOpacity>
        </View>
    );
}
