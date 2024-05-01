import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#afb398',
        justifyContent: 'center',
        alignItems: 'center',
    },

    circulo3: {
        position: 'absolute',
        width: 730,
        height: 730,
        borderRadius: 365,
        top: 280,
        right: -80,
        backgroundColor: '#DF6127',
    },

    circulo4: {
        position: 'absolute',
        width: 730,
        height: 730,
        borderRadius: 365,
        top: 275,
        right: -83,
        backgroundColor: '#ffffff',
    },

    image: {
        width: 161,
        height: 163,
    },

    form: {
        width: '70%',
        alignItems: 'center',
        marginBottom: 30,
    },

    boxes: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 380,
        width: '100%',
        height: 55,
        backgroundColor: '#ffffff',
        marginVertical: 6,
        borderRadius: 55,
        borderWidth: 2,
        borderColor: 'rgba(2, 2, 2, 0.849)',
        paddingHorizontal: 10,
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

    tituloText: {
        paddingTop: 110,
        fontSize: 35,
        color: 'rgba(255, 255, 255, 0.849)',
    },

    mensagem: {
      alignItems: 'Center',
      color: 'rgba(255, 255, 255, 0.849)',
    },

    mensagemText: {
        fontSize: 16,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 0.849)',
        textAlign:'center',
        padding: 35,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '45%',
        height: '20%',
        borderRadius: 10,
        alignItems: 'center',
    },
    fecharButton: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        zIndex: 100,
    },
    fecharText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
    },

});

export default styles;