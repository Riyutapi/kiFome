import React, {useState} from 'react';
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Versao from '../../components/versao'
import But from '../../components/Button';
import { useEmail, useSenha } from '../../services/usuario'


export function Login () {

    const navigation = useNavigation();
    const email = useEmail();
    const senha = useSenha();
    const [emailDigitado, setEmailDigitado] = useState('');
    const [senhaDigitado, setSenhaDigitado] = useState('');
    const [aviso, setAviso] = useState(false);
    const [aviso2, setAviso2] = useState(false);

    const verificar = () => {
        if (emailDigitado === '' && senhaDigitado === ''){
            navigation.navigate('menu');
        }
        
        if (emailDigitado !== email) {
            setAviso(true);
        } else if (senhaDigitado !== senha) {
            setAviso2(true);
        } else {
            setEmailDigitado('');
            setSenhaDigitado('');
            navigation.navigate('menu');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.circulo4}></View>
            <View style={styles.circulo3}></View>
            <View style={styles.logo}>
                <Image style={styles.image} source={require("../../../assets/icon.png")} />
            </View>

            <View style={styles.form}>
                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="E-mail" require 
                        value={emailDigitado}
                        onChangeText={(text) => {
                            const newText = text.replace(/[^a-zA-Z0-9_.\-@]/g, '');
                            setEmailDigitado(newText);
                            setAviso(false);
                            setAviso2(false);
                        }}/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} require
                        value={senhaDigitado}
                        onChangeText={(text) => {
                            const newText = text.replace(/\s/g, '');
                            setSenhaDigitado(newText);
                            setAviso(false);
                            setAviso2(false);
                        }}/>
                </View>

                <TouchableOpacity style={styles.recuperarSenha}onPress={() => {
                    navigation.navigate('esqueceu')}}>
                    <Text style={styles.recuperarSenhaText}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                {aviso && <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold'}}>E-mail não encontrado</Text>}
                {aviso2 && <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold'}}>Senha Incorreta</Text>}

                <But texto={'ENTRAR'} onPress={verificar}/>

                <TouchableOpacity style={styles.novaConta} onPress={() => {
                    navigation.navigate('cadastro')}}>
                    <Text style={styles.novaContaText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
            <Versao/>
        </View>
    );
};
