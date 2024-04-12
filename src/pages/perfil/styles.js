import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D1D3C1",
        justifyContent: 'center',
        alignItems: 'center',
    },
    retanguloContainer: {
        width: '75%',
        borderColor: 'black',
        borderWidth: 1,
    },
    superiorEsquerdo: {
        position: 'absolute',
        top: 10,
        left: 0,
        margin: 10,
    },

    //Perfil
    perfil: {
        alignItems: 'center',
    },
    category:{
        paddingBottom: 10,
        fontWeight: "bold"
    },
    Level: {
        color: "red",
        fontWeight: "bold"
    },
    imgBox: {
        marginTop: 90,
        height: 160,
        width: 160,
        borderColor: "grey",
        borderWidth: 3,
        borderRadius: 160,
    },
    imgBoxImage: {
        width: '100%',
        height: '100%',
    },
});

export default styles;