import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style = {styles.circulo4}></View>
            <View style = {styles.circulo3}></View>
            <View style={styles.logo}>
                <Image style={styles.image} source={require("../assets/logo.png")} />
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

            <View style = {styles.circulo}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#afb398',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        padding: 140,
        paddingTop: 50,
    },

    image: {
        width: 161,
        height: 163,
    },

    circulo4: {
        position: 'absolute',
        width: 730,
        height: 730,
        borderRadius: 365,
        top: 275,
        left: -83,
        backgroundColor: '#ffffff',
    },

    circulo3: {
        position: 'absolute',
        width: 730,
        height: 730,
        borderRadius: 365,
        top: 280,
        left: -80,
        backgroundColor: '#DF6127',
    },

    form: {
        width: '70%',
        alignItems: 'center',
    },

    boxes: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 380,
        width: '100%',
        height: 55,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        borderRadius: 55,
        borderWidth: 2,
        borderColor: 'rgba(2, 2, 2, 0.849)',
        paddingHorizontal: 10,
    },

    icon: {
        // Estilos do ícone
    },

    input: {
        flex: 1,
        height: 51,
        backgroundColor: '#ffffff',
        fontSize: 16,
        borderRadius: 40,
        paddingVertical: 0,
        paddingHorizontal: 20,
        color: '#030303',
    },


    recuperarSenhaText: {
        fontSize: 14.5,
        fontWeight: '600',
        color: '#ffffff',
        paddingBottom: 50,
    },

    botao: {
        width: '60%',
        height: 50,
        backgroundColor: 'rgb(222, 96, 38)',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#571c00e5',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    botaoText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.849)',
    },

    novaContaText: {
        fontSize: 14.5,
        fontWeight: '600',
        color: '#ffffff',
        paddingTop:10,
        paddingBottom: 70,
    },

});

export default Login;