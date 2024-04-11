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
        marginLeft: 150,
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
        marginLeft: 200,
    },
    bigCircle: {
        height: 23,
        width: 23,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 220,
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
    },

    //Styles Adicionar Ingrediente

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
    backButton: {
        marginTop: 190,
        marginLeft: -60,
        position: 'absolute',
        height: 50,
        width: 50,
        backgroundColor: '#D1D3C1',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonImg: {
        marginTop: 5
    },

    //Seus Ingreidentes

    clearTextButton: {
        color: '#AFB297',
        fontSize: 12,
        textDecorationLine: "underline",
        marginTop: 100,
        marginLeft: 80,
    },
    ingredientsBox: {
        maxHeight: 250,
        minWidth: 280,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        zIndex: 10,
        marginTop: 20,
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
    addButton2: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
        width: 54,
        backgroundColor: "#AFB297",
        borderRadius: 50,
        marginTop: 430,
        marginLeft: 110,
        zIndex: 20,
    },
    addTextButton2: {
        fontSize: 31,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 5,
    },
});

export default styles;