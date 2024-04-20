import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Categorias() {
    return(

    <View style={styles.catBox}>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, opacity: .6}}>
            <View style={[styles.categoria, {width: 30, height: 30}]}>
            <Image source={require('../../Assets/Doce.png')}/>
            </View>
            <Text style={{fontSize: 7, color: '#3E4411', fontWeight: '700'}}>Doce</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
            <View style={styles.categoria}>
            <Image source={require('../../Assets/catBolo.png')}/>
            </View>
            <Text style={{fontSize: 8, color: '#3E4411', fontWeight: '700'}}>Brunch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
            <View style={styles.categoria}>
            <Image source={require('../../Assets/Almoco.png')}/>
            </View>
            <Text style={{fontSize: 8, color: '#3E4411', fontWeight: '700'}}>Almoço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
            <View style={styles.categoria}>
            <Image source={require('../../Assets/Manha.png')}/>
            </View>
            <Text style={{fontSize: 8, color: '#3E4411', fontWeight: '700'}}>Manha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
            <View style={styles.categoria}>
            <Image source={require('../../Assets/Jantar.png')}/>
            </View>
            <Text style={{fontSize: 8, color: '#3E4411', fontWeight: '700'}}>Jantar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, opacity: .6}}>
            <View style={[styles.categoria, {width: 30, height: 30}]}>
            <Image source={require('../../Assets/Fruta.png')}/>
            </View>
            <Text style={{fontSize: 7, color: '#3E4411', fontWeight: '700'}}>Fruta</Text>
        </TouchableOpacity>
    </View>

    )
}