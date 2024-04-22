import React from "react";
import styles from "./styles";
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import But from '../../components/Button';


export function Cadastro () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style = {styles.circulo4}></View>
            <View style = {styles.circulo3}></View>

            <TouchableOpacity style={styles.superiorEsquerdo}>
                <BackButton top={1} left={-170} onPress={() => navigation.goBack()}/>
            </TouchableOpacity>

            <View style={styles.logo}>
                <Image style={styles.image} source={require("../../../assets/icon.png")} />
            </View>

            <View style={styles.form}>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Login" />
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="E-mail" />
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true} />
                </View>

                <View style = {styles.But}>
                    <But texto={'CRIAR'} onPress={() => navigation.navigate('login')}/>
                </View>
            </View>
        </View>
    );
};
