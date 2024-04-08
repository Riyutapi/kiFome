import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    menuBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        margin: 30,
        gap: 20,
        
    },
    menuCircle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        height: 74,
        width: 74,
        borderRadius: 50,
        paddingTop: 5,
    }
})

export default styles;