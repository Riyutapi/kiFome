import { View, Text, StyleSheet } from "react-native";

export default function Versao() {
    return(
        <View style={styles.inferiorEsquerdo}>
                <Text style={styles.versionText}>V.001</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    inferiorEsquerdo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        margin: 10,
    },
    versionText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 12,
    }
});
