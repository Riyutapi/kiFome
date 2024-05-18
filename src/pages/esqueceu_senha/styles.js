import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#afb398',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        padding: windowHeight * 0.13, 
        paddingTop: windowHeight * 0.1, 
    },

    image: {
        width: windowWidth * 0.35, 
        height: windowWidth * 0.35, 
    },


    circulo3: {
        position: 'absolute',
        width: windowWidth * 1.8,
        height: windowWidth * 1.8,
        borderRadius: windowWidth * 0.9,
        top: windowHeight * 0.35, 
        left: -windowWidth * 0.55, 
        backgroundColor: '#DF6127',
    },

    circulo4: {
        position: 'absolute',
        width: windowWidth * 1.8,
        height: windowWidth * 1.8, 
        borderRadius: windowWidth * 0.9, 
        top: windowHeight * 0.34, 
        left: -windowWidth * 0.55, 
        backgroundColor: '#ffffff',
    },

    form: {
        width: '70%',
        alignItems: 'center',
    },

    boxes: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: windowWidth * 0.95, 
        width: '100%',
        height: windowHeight * 0.07,
        backgroundColor: '#ffffff',
        marginVertical: windowHeight * 0.02, 
        borderRadius: windowHeight * 0.05, 
        borderWidth: 2,
        borderColor: 'rgba(2, 2, 2, 0.849)',
        paddingHorizontal: windowWidth * 0.03, 
    },

    input: {
        flex: 1,
        height: windowHeight * 0.060, 
        backgroundColor: '#ffffff',
        fontSize: windowWidth * 0.04, 
        borderRadius: windowHeight * 0.05, 
        paddingVertical: 0,
        paddingHorizontal: windowWidth * 0.04, 
        color: '#030303',
    },

    titulo: {
        alignItems: 'center',
    },

    tituloText: {
        paddingTop: windowHeight * 0.04,
        fontSize: 35,
        color: 'rgba(255, 255, 255, 0.849)',
    },

    mensagem: { 
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },

    mensagemText: {
        fontSize: windowHeight * 0.021,
        fontWeight: '700',
        color: 'rgba(255, 255, 255, 0.849)',
        marginHorizontal: windowWidth * 0.1, 
        paddingVertical: windowHeight * 0.06,
    },

});

export default styles;