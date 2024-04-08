import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    backGround: {
        zIndex: 0,
        position: 'absolute',
        height: 400,
        width: 430, 
        backgroundColor: "#d1d3c1",
        borderRadius: 5+100+150+0,
        marginTop: -250,
        marginLeft: -40,
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
        height: 80,
        width: 80,
        color: "#fff",
        borderColor: "grey",
        borderWidth: 3,
        borderRadius: 50,
        zIndex: 100,
    },
})

export default styles;