import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        backgroundColor: '#d1d3c1',
        height: 100 + '%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        margin: 15
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
    receitaUnid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginLeft: 65,
    },
    orangeCircle:{
        height:20,
        width: 20,
        backgroundColor: '#DF6127',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    receitaLista:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        gap: 10,
        width: 100 + '%',
    },
    receitaUnidRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    comentBox: {
        width: 16,
        height: 11,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avaliacaoBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingBottom: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: '#3E4411',
    },
    avaliacaoUnit: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    addButton2: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
        width: 54,
        backgroundColor: "#DF6127",
        borderRadius: 50,
        marginTop: 420,
        marginLeft: 165,
        zIndex: 20,
    },
    addTextButton: {
        fontSize: 31,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 5,
    }

});

export default styles;