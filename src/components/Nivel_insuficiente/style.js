import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '90%',
        height: '90%',
        padding: 20,
        borderRadius: 10,
    },
    fecharButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 15,
        zIndex: 100,
    },
    fecharText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
    },
});

export default styles;