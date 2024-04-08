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
    addButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
        width: 54,
        backgroundColor: "#AFB297",
        borderRadius: 50,
        marginTop: 20,
    },
    addTextButton: {
        fontSize: 31,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 5,
    },
    miniCircle: {
        height: 17,
        width: 17,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 50,
    },
    bigCircle: {
        height: 23,
        width: 23,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 80,
    },
    addIngredient:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 66,
        width: 198,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 14,
        color: "#AFB297",
        marginTop: 150,
        marginLeft: 160,
        padding: 10,
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 15,
        fontWeight: '500',
    }
});

export default styles;