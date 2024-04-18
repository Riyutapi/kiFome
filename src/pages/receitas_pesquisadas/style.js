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
    picker: {
        fontSize: 10,
    },
    pickerContainer:{
        borderRadius: 24,
        borderWidth: 1,
        backgroundColor: '#F2F2EC',
        width: 331,
        height: 20,
        color: '#3E4411',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
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
        marginTop: 20,
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
        marginTop: 30,
        gap: 10,
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
        borderBottomWidth: 1.5,
        borderBottomColor: '#3E4411',
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