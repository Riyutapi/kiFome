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
        justifyContent: "space-between",
        borderRadius: 400,
        height: 700,
        width: 700,
        marginTop: -80,
        zIndex: 1,
    },
    clearTextButton: {
        color: '#AFB297',
        fontSize: 12,
        textDecorationLine: "underline",
        marginTop: 250,
    },
    ingredientsBox: {
        maxHeight: 250,
        width: 280,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
    },
    scroll:{
        display: 'flex',
        flexGrow: 1,
    },
    ingredientMiniBox: {
        height: 48,
        width: 250,
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
        marginTop: 10,
    },
    ingredientMiniBoxLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'flex-start',
        maxHeight: 50,
        minWidth: 100,
    },
    img: {
       width: 40,
       Height: 30,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    ingredientMiniBoxRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 80,
        alignItems: 'center'
    },
    ingredientDecInc: {
        height: 20,
        width: 20,
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    ingredientDecIncText: {
        fontSize: 12,
        fontWeight: '600',
    },
    ingredientQuant:{
        height: 25,
        width: 25,
        borderRadius: 10,
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ingredientQuantText: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
        width: 54,
        backgroundColor: "#AFB297",
        borderRadius: 50,
        marginBottom: 40,
    },
    addTextButton: {
        fontSize: 31,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 5,
    },
});

export default styles;