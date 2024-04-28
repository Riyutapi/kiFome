import React from "react";
import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton";
import { useNavigation } from '@react-navigation/native';


export function Esqueceu() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <BackButton top={40} left={-170} onPress={() => navigation.goBack()}/>
            <View style = {styles.circulo4}/>
            <View style = {styles.circulo3}/>

            <View style = {styles.logo}>
                <Image style = {styles.image} source={require("../../../assets/icon.png")} />
            </View>

            <View style = {styles.titulo}>
                    <Text style = {styles.tituloText}>Recuperar Senha</Text>
            </View>

            <View style = {styles.mensagem}>
                    <Text style = {styles.mensagemText}>Nos informe o seu E-mail para que possamos te mandar a solicitação!</Text>
            </View>

            <View style = {styles.form}>

                <View style = {styles.boxes}>
                    <TextInput style = {styles.input} placeholder = "E-mail" />
                </View>

                <TouchableOpacity style = {styles.botao}>
                    <Text style = {styles.botaoText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};