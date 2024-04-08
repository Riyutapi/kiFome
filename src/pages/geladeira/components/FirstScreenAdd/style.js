import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        margin: 15,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 80,
        zIndex: 100,
    },
    mainBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 100+"%",
        backgroundColor: "#d1d3c1",
        alignItems: "center"
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    mainCircle: {
        position: "absolute",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 400,
        height: 700,
        width: 700,
        marginTop: -80,
        zIndex: 1,
    },
    input: {
        backgroundColor: '#F2F2EC',
        color: '#D1D3C1',
        fontWeight: '700',
        fontSize: 10,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: "center",
        width: 250,
        height: 35,
        marginTop: 200,
        zIndex: 2
    },
    ingredientBox: {
        width: 250,
        height: 350,
        borderWidth: 2,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: -7,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
    },
    ingredient: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#3E4411',
        width: 90+'%',
        paddingBottom: 10,
        marginTop: 15,
    },
    ingredientLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    ingredientRight: {

    },
    img: {
        width: 45,
        height: 30,
        borderWidth: 1,
    },
    text: {
        color: '#3E4411',
        fontSize: 12,
        fontWeight: '700',
    },
    checkBox: {
        height: 25,
        width: 25,
        borderRadius: 10,
        borderWidth: 2,
    },
});

export default styles;