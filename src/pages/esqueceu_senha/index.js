import React, {useState} from 'react';
import { TextInput, View, Image, TouchableOpacity, Text, Modal } from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton";
import { useNavigation } from '@react-navigation/native';
import But from '../../components/Button';


export function Esqueceu() {
    const navigation = useNavigation();
    const [emailDigitado, setEmailDigitado] = useState('');
    const [aviso, setAviso] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const validarEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValido = regex.test(emailDigitado);
        if (emailValido) {
            setEmailDigitado('');
            setModalVisible(true)
        } else {
            setAviso(true);
        }
    };

    return (
        <View style={styles.container}>
            <BackButton top={50} left={-170} onPress={() => navigation.goBack()}/>

            <View style = {styles.circulo4}/>
            <View style = {styles.circulo3}/>

            <View style={styles.logo}>
                <Image style={styles.image} source={require("../../../assets/icon.png")} />
            </View>

            <Text style = {styles.tituloText}>Recuperar Senha</Text>

            <View style = {styles.mensagem}>
                <Text style = {styles.mensagemText}>Nos informe o seu E-mail para que possamos te mandar a solicitação!</Text>
            </View>

            <View style = {styles.form}>
                <View style = {styles.boxes}>
                    <TextInput style = {styles.input}
                        placeholder = "E-mail"
                        value={emailDigitado}
                        onChangeText={(text) => {
                            const newText = text.replace(/[^a-zA-Z0-9_.\-@]/g, '');
                            setEmailDigitado(newText);
                            setAviso(false);
                    }}/>
                </View>
            </View>

            {aviso && <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold'}}>E-mail Inválido</Text>}
            <But texto={'ENVIAR'} onPress={validarEmail}/>

            <Modal visible={modalVisible} animationType="fade" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{ textAlign: 'center', fontSize: 15, padding: 15}}>Um e-mail de recuperação de senha foi enviado para o endereço fornecido.</Text>
                        <TouchableOpacity style={styles.fecharButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.fecharText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
}