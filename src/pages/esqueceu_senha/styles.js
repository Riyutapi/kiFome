import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#afb398',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        padding: 140,
        paddingTop: 15,
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

    titulo: {
        alignItems: 'center',
    },

    tituloText: {
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
        padding: 50,
    },

    botao: {
        width: '60%',
        height: 50,
        backgroundColor: 'rgb(222, 96, 38)',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 32,
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
    }

});

export default styles;