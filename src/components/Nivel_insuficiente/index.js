import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default function ModalUpeMais({ visible, closeModal }) {

    return (
        <Modal visible={visible} animationType="fade" transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <Text style={[styles.fecharText, { color: '#DF6127' }]}>Nível Insuficiente</Text>
                <Text style={{ textAlign: 'justify'}}>Desculpe, parece que seu nível de usuário ainda é baixo para acessar essa função. Para desbloquear continue interagindo com o aplicativo e ganhando experiência. Explore mais receitas, compartilhe suas próprias criações e interaja com a comunidade para aumentar seu nível. Estamos ansiosos para ver você progredir e aproveitar ao máximo o KiFome!</Text>
                   <TouchableOpacity style={styles.fecharButton} onPress={closeModal}>
                        <Text style={styles.fecharText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
} 

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '90%',
        height: '30%',
        padding: 20,
        borderRadius: 10,
    },
    fecharButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
        zIndex: 100,
    },
    fecharText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
    },
});
