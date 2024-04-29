import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    imageCoin: {
        display: "flex",
        height: 38,
        width: 38,
        alignSelf: "flex-start",
        marginTop: 10,
    },
    coinBox: {
        display: "flex",
        alignItems: "center",
        gap: 5
    },
    coinText: {
        fontSize: 12,
    },
    modalOpenBack: {
        position: 'absolute', 
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black', 
        zIndex: 100, 
        marginLeft: -38.5, 
        marginTop: -60, 
        opacity: .8
    },
    closeModal: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        top: 0,
        right: 0,
        marginTop: -20,
        marginRight: -20,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        backgroundColor: '#DF6127'
    },
    modalOpen: {
        width: 300,
        height: 400,
        backgroundColor: 'white',
        zIndex: 2,
        borderRadius: 10,
        opacity: 1,
        alignSelf: 'center',
    }
});

export default styles;