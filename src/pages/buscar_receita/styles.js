import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#d1d3c1',
        height: '100%',
    },

    header: {
        top: 5,
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 80,
    },

    input: {
        width: 331,
        backgroundColor: '#fff',
        height: 30,
        fontSize: 13,
        fontWeight: '500',
        color: '#AFB297',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
    },

    buscar:{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        marginTop: 15,
        paddingTop: 90,
    },

    categoria: {
       alignSelf: 'center', 
       display: 'flex', 
       flexDirection: 'column', 
       alignItems: 'center',
       gap: 10, 
       paddingTop: 70,
    },

    circulo: {
        position: 'absolute',
        width: 490,
        height: 370,
        borderRadius: 200,
        top: 200,
        right: -40,
        backgroundColor: '#f2f2ed',
    },

    but:{
        paddingTop: 100,
    },
    
});

export default styles;