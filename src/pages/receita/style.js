import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    
    //Cabeçalho
    modal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#d1d3c1',

    },
    Header: {
        zIndex: 20,
        width: 400,
        display: 'flex',
        alignItems: 'center',
    },
    headerTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 200,
        width: 400,
        zIndex: 1000,
        marginTop: 50,
    },
    imgHeartBox: {
        height: 50,
        width: 50,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2EC',
    },
    imgHeart: {
        height: 26,
        width: 26,
        zIndex: 20,
    },
    imgReceita: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#c9c9cd',
        borderRadius: 10,
        height: 400,
        width: 500,
        marginLeft: -50,
        borderBottomLeftRadius: 210,
        borderBottomRightRadius: 210,
    },
    containerTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 233,
        height: 23,
        marginTop: 329,
        marginLeft: 25,
        gap: 15,
    },
    littleImgBox: {
        zIndex: 2,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    litteImg: {
        height: 20,
        width: 20,
    },

    //Ingredientes
    ingredientBox: {
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        marginRight: 140,
    },
    ingredientChicken:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    ingredientListBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginLeft: 20,
        borderLeftWidth: 1,
        borderLeftColor: '#DF6127',
        justifyContent: 'flex-end',
    },
    ingredientList: {
        paddingLeft: 10,
        fontSize: 12,
    },
    ingredientBeforeModal:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    ingredientBefore:{
        position: 'absolute',
        backgroundColor: '#DF6127',
        height: 7,
        width: 7,
        borderRadius: 50,
        marginLeft: -4,
    },

    // Modo de Preparo
    prepareBox: {
        height: 350,
        width: 450,
        backgroundColor: '#f2f2ec',
        marginTop: 30,
        borderRadius: 300,
        marginLeft: -30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 5,
        alignItems: 'center',
        paddingTop: 20,
    },
    prepareTitle:{
        width: 163,
        height: 22,
        backgroundColor: '#DF6127',
        borderRadius: 24,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '700',
        color: '#fff'
    },
    prepareNumber: {
        width: 78,
        height: 37,
        backgroundColor: '#3E4411',
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
        borderRadius: 24,
        display: 'flex',
        textAlign: 'right',
        paddingRight: 15,
        paddingTop: 2,
        marginLeft: -35,
    },
    prepareTextBox: {
        width: 350,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    //Avaliação
    avaliBox:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: -20,
        marginTop: 20,
        gap: 15,
    },
    prepareAvaliBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        marginLeft: -50,
    },
    prepareText: {
        color: "#3E4411",
        fontSize: 12,
        fontWeight: '400',
        width: 300,
        lineHeight: 15,
    },
    imgPerfil:{
        height: 48,
        width: 48,
        borderRadius: 50,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avaliText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#3E4411',
    },
    avaliacaoBox:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
    },
    comentario: {
        fontSize: 10,
        fontWeight: '400',
        width: 315,
        color: '#3E4411',
        opacity: .5,
        borderBottomColor: '#3E4411',
        borderBottomWidth: 1.5,
        marginBottom: 15,
    },
    avaliacaoChapeu: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
    },

    //Comentario
    comentBox:{
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10,
        justifyContent: 'center',
        gap: 20,
        marginBottom: 10,
    },
    comentHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 40,
    },
    comentHeaderRight:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    comentMidBox:{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
    comentMidRight: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    comentMidName: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    comentMidText:{
        display: 'flex',
        flexDirection: 'row',
    },
    likeDeslikeBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    likeDeslike: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    modalDenunciaBack:{
        position: 'absolute', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', 
        zIndex: 100, 
        top: 0,
        opacity: .9
    },
    modalDenuncia: {
        width: 350,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        paddingTop: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 15,
        width: 250,
    },
    buttonDenuncia:{
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: 'rgb(222, 96, 38)',
    },
    textButtonDenuncia:{
        fontWeight: '700',
        color: '#fff'
    }
});

export default styles;