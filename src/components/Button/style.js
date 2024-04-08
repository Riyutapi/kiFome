import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 48,
        backgroundColor: "#df6127",
        borderRadius: 50,
        textAlign: "center",
    },
    textButton: {
        color:"#fff",
        fontSize: 16,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 5,
    }
})

export default styles;