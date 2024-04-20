import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Itens({opaco, texto, imagem}) {
    const pequeno = opaco ? true : false;

    return(

    <TouchableOpacity style={[{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 },
            pequeno ? { opacity: 0.6 } : null ]}>
        <View style={[styles.categoria, pequeno ? { width: 30, height: 30} : null]}>
            <Image source={imagem} />
        </View>
        <Text style={{ fontSize: pequeno ? 7 : 8, color: '#3E4411', fontWeight: '700' }}>{texto}</Text>
    </TouchableOpacity>
    
    )
}