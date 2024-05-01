import React, { useState } from "react";
import styles from "./styles";
import { View, TextInput, TouchableOpacity, Image, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import But from '../../components/Button';
import { SGLogin, SGEmail, SGSenha } from '../../services/usuario'
import TermoDeUso from "../../components/termo";

export function Cadastro () {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmar, setSenhaConfirmar] = useState('');
    const [aviso, setAviso] = useState(false);
    const [aviso2, setAviso2] = useState(false);
    const [aviso3, setAviso3] = useState(false);
    const [aviso4, setAviso4] = useState(false);
    const [aviso5, setAviso5] = useState(false);

    const validar = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValido = regex.test(email);
       
        if (login === '' || email === '' || senha === '' || senhaConfirmar === '') {
            setAviso(true);
        } else if (emailValido === false) {
            setAviso5(true);
        } else if (login.length < 3) {
            setAviso4(true)
        } else if (senha !== senhaConfirmar) {
            setAviso2(true);
        } else if (senha.length <= 4) {
            setAviso3(true);
        } else {
            setModalVisible(true);
            setAviso(false);
            setAviso2(false);
            setAviso3(false);
            setAviso4(false);
            setAviso5(false);
        }
    }

    const concordo = () => {
        setModalVisible(false);
        SGLogin(login);
        SGEmail(email);
        SGSenha(senha);
        navigation.navigate('login');
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
                        placeholder="Nome de Usuário"
                        value={login}
                        onChangeText={(text) => {
                            const newText = text.replace(/[^a-zA-Z0-9_.\-]/g, '');
                            setLogin(newText);
                            setAviso(false);
                            setAviso2(false);
                            setAviso3(false);
                            setAviso4(false);
                            setAviso5(false);
                        }}/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="E-mail" 
                        value={email}
                        onChangeText={(text) => {
                            const newText = text.replace(/[^a-zA-Z0-9_.\-@]/g, '');
                            setEmail(newText);
                            setAviso(false);
                            setAviso2(false);
                            setAviso3(false);
                            setAviso4(false);
                            setAviso5(false);
                        }}/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} 
                        value={senha}
                        onChangeText={(text) => {
                            const newText = text.replace(/\s/g, '');
                            setSenha(newText);
                            setAviso(false);
                            setAviso2(false);
                            setAviso3(false);
                            setAviso4(false);
                            setAviso5(false);
                        }}/>
                </View>

                <View style={styles.boxes}>
                    <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry={true}
                        value={senhaConfirmar}
                        onChangeText={(text) => {
                            const newText = text.replace(/\s/g, '');
                            setSenhaConfirmar(newText);
                            setAviso(false);
                            setAviso2(false);
                            setAviso3(false);
                            setAviso4(false);
                            setAviso5(false);
                        }}/>
                </View>

                {aviso && <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold'}}>Campo Faltando</Text>}
                {aviso2 && <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold'}}>Senhas Diferentes</Text>}
                {aviso3 && <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold'}}>A Senha deve conter pelo menos 5 caracteres.</Text>}
                {aviso4 && <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold'}}>O nome de usuário menos 3 caracteres.</Text>}
                {aviso5 && <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold'}}>E-mail inválido.</Text>}

                <View style = {styles.But}>
                    <But texto={'CRIAR'} onPress={validar}/>
                </View>

            </View>

            <Modal visible={modalVisible} animationType="fade" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.fecharButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.buttonModalText}>X</Text>
                        </TouchableOpacity>
                        <View style={{margin: 10, marginBottom: 50, marginTop: 35}}>{TermoDeUso()}</View>
                        <TouchableOpacity style={styles.concordoButton} onPress={concordo}>
                            <Text style={styles.buttonModalText}>Concordo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
};
