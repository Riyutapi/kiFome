import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import styles from "./styles";

const Cadastro = () => {
    return (
        <View style={styles.container}>
            <View style = {styles.circulo4} />
            <View style = {styles.circulo3} />

            <View style={styles.logo}>
                <Image style={styles.image} source={require("../../../assets/icon.png")} />
            </View>

            <View style={styles.form}>
                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Login"/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="E-mail"/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true} />
                </View>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoText}>Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cadastro;