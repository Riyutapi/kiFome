import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const login = () => {
    return (
        <View style={styles.container}>
        
            <View style = {styles.circulo4}></View>
            <View style = {styles.circulo3}></View>
            <View style={styles.logo}>
                <Image style={styles.image} source={require("../../../assets/icon.png")} />
            </View>


            <View style={styles.form}>
                <View style={styles.boxes}>
                        <TextInput style={styles.input} placeholder="Login" require />
                </View>

                <View style={styles.boxes}>
                        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} require />
                </View>

                <TouchableOpacity style={styles.recuperarSenha}>
                    <Text style={styles.recuperarSenhaText}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoText}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.novaConta}>
                    <Text style={styles.novaContaText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default login;