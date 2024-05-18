import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#d1d3c1',
        height: '100%',
    },

    header: {
        marginHorizontal: windowWidth * 0.05,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: windowWidth * 0.25, 
        paddingTop: windowHeight * 0.01
    },

    input: {
        width: windowWidth * 0.8, 
        backgroundColor: '#fff',
        height: windowHeight * 0.04, 
        fontSize: windowHeight * 0.02, 
        fontWeight: '500',
        color: '#AFB297',
        borderWidth: 2,
        borderRadius: windowWidth * 0.03, 
        paddingLeft: windowWidth * 0.05, 
    },

    buscar: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: windowHeight * 0.01, 
        marginTop: windowHeight * 0.02, 
        paddingTop: windowHeight * 0.12, 
    },

    categoria: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: windowHeight * 0.01, 
        paddingTop: windowHeight * 0.09, 
    },

    circulo: {
        position: 'absolute',
        width: windowWidth * 1.3, 
        height: windowHeight * 0.50, 
        borderRadius: windowWidth * 0.7, 
        top: windowHeight * 0.25, 
        backgroundColor: '#f2f2ed',
    },

    but: {
        paddingVertical: windowHeight * 0.11, 
    },
});

export default styles;
