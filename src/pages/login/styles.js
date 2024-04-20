import { StyleSheet} from "react-native";

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

    novaContaText: {
        fontSize: 14.5,
        fontWeight: '600',
        color: '#ffffff',
        paddingTop:10,
        paddingBottom: 70,
    },
});

export default styles;