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
        top: 5,
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 80,
        zIndex: 100,
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
    categoria:{
        height: 45,
        width: 45,
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
        backgroundColor: '#fff'
    },
    imgHeartBox:{
        position: 'absolute',
        marginTop: -65,
        marginLeft: -240,
        height: 32,
        width: 32,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2EC',
        zIndex: 1000,
    },
    catBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    catTitle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
    },
    receitaUnid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginLeft: 50,
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
    },
    avaliacaoUnit: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    }

});

export default styles;