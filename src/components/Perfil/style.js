import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    backGround: {
        zIndex: 0,
        position: 'absolute',
        height: 400,
        width: 430, 
        backgroundColor: "#d1d3c1",
        borderRadius: 0+100+150+0,
        marginTop: -275,
        marginLeft: -80,
    },
    perfilBox: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "flex-end",
        padding: 20,
    },
    leftTitle: {
        display: "flex",
        flexDirection: "column",
        zIndex: 100,
    },
    category:{
        display: "flex",
        alignSelf: "flex-end",
        fontSize: 12,
    },
    nameBox: {
        display: "flex",
        flexDirection: "column",
        fontWeight: "bold",
        fontSize: 12,
    },
    Level: {
        color: "red",
    },
    imgBox: {
        display: "flex",
        height: 48,
        width: 48,
        color: "#fff",
        borderColor: "grey",
        borderWidth: 3,
        borderRadius: 50,
        zIndex: 100,
    },
    img: {
        width: '100%',
        height: '100%',
    },
})

export default styles;