import React from "react";
import styles from "./styles";
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';


export function Cadastro () {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style = {styles.circulo4}></View>
            <View style = {styles.circulo3}></View>

            <TouchableOpacity style={styles.superiorEsquerdo}>
                <BackButton top={80} left={-180} color="#F2F2EC" onPress={() => navigation.goBack()}/>
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

                <TouchableOpacity style={styles.botao} onPress={() => {
                    navigation.navigate('login')}}>
                    <Text style={styles.botaoText}>Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
