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
        padding: windowHeight * 0.15, 
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

    recuperarSenhaText: {
        fontSize: windowWidth * 0.035,
        fontWeight: '600',
        color: '#ffffff',
    },

    botao: {
        width: '60%',
        height: windowHeight * 0.07, 
        backgroundColor: 'rgb(222, 96, 38)',
        borderRadius: windowHeight * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#571c00e5',
        shadowOffset: {
            width: 0,
            height: windowHeight * 0.01, 
        },
        shadowOpacity: 0.25,
        shadowRadius: windowWidth * 0.
    },

    novaContaText: {
        fontSize: 14.5,
        fontWeight: '600',
        color: '#ffffff',
        paddingTop:10,
        paddingBottom: 35,
    },

});

export default styles;