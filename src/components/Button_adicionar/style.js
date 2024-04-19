import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    addButton2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
        width: 54,
        borderRadius: 50,
        marginLeft: 165,
        zIndex: 20,
        bottom: 100,
        position: 'absolute',
        elevation: 2,
    },
    addTextButton: {
        fontSize: 31,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 5,
    }
});

export default styles;