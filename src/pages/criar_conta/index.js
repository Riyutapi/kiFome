import React, { useState } from "react";
import styles from "./styles";
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import But from '../../components/Button';
import { SGLogin, SGEmail, SGSenha } from '../../services/usuario'


export function Cadastro () {
    const navigation = useNavigation();
    const [login, setLogin] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [senhaConfirmar, setSenhaConfirmar] = useState();
    const [aviso, setAviso] = useState(false);
    const [aviso2, setAviso2] = useState(false);
    const [aviso3, setAviso3] = useState(false);

    const validar = () => {
        if (login === '' || email === '' || senha === '' || senhaConfirmar === '') {
            setAviso(true);
            setAviso2(false);
            setAviso3(false);
        } else if (senha.length >= 5 && senhaConfirmar.length >= 5) {
            setAviso(false);
            setAviso2(false);
            setAviso3(true);
        } else if (senha !== senhaConfirmar) {
            setAviso(false);
            setAviso2(true);
            setAviso3(false);
        } else {
            SGSenha(senha)
            setAviso(false);
            setAviso2(false);
            setAviso3(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style = {styles.circulo4}></View>
            <View style = {styles.circulo3}></View>

            <TouchableOpacity style={styles.superiorEsquerdo}>
                <BackButton top={50} left={-170} onPress={() => navigation.goBack()}/>
            </TouchableOpacity>

            <View style={styles.logo}>
                <Image style={styles.image} source={require("../../../assets/icon.png")} />
            </View>

            <View style={styles.form}>

                <View style={styles.boxes}>
                    <TextInput style={styles.input}
                        placeholder="Login"
                        value={login}
                        onChangeText={(text) => {
                            const newText = text.replace(/[^a-zA-Z0-9_.\-]/g, '');
                            SGLogin(newText);
                            setLogin(newText);
                            validar();
                        }}/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="E-mail" 
                        value={email}
                        onChangeText={(text) => {
                            const newText = text.replace(/[^a-zA-Z0-9]/g, '');
                            SGEmail(newText);
                            setEmail(newText);
                            validar();
                        }}/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} 
                        value={senha}
                        onChangeText={(text) => {
                            const newText = text.replace(/\s/g, '');
                            setSenha(newText);
                            validar();
                        }}/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true}
                        value={senhaConfirmar}
                        onChangeText={(text) => {
                            const newText = text.replace(/\s/g, '');
                            setSenhaConfirmar(newText);
                            validar();
                        }}/>
                </View>

                <View style = {styles.But}>
                    <But texto={'CRIAR'} onPress={() => navigation.navigate('login')} disabled={aviso || aviso2 || aviso3}/>
                </View>
                {aviso && <Text style={{ color: 'red', textAlign: 'center'}}>Campo Faltando</Text>}
                {aviso2 && <Text style={{ color: 'red', textAlign: 'center'}}>Senhas Diferentes</Text>}
                {aviso3 && <Text style={{ color: 'red', textAlign: 'center'}}>A Senha deve conter pelo menos 5 caracteres.</Text>}
            </View>
        </View>
    );
};
