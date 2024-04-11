import { View, Text, StyleSheet, Image } from 'react-native';

export function Perfil() {
    return (
        <View style={styles.container}>
            <View style={styles.rectangleContainer}>
                <View style={[styles.innerRectangle, { paddingLeft: 24 }]}>
                    <Image source={require("./assets/dados.png")} />
                    <Text style={[styles.text, { paddingLeft: 4 }]}>Meus dados</Text>
                </View>
                <View style={[styles.innerRectangle, { paddingLeft: 20 }]}>
                    <Image source={require("./assets/notificacao.png")} />
                    <Text style={[styles.text, { paddingLeft: 3 }]}>Notificações</Text>
                </View>
                <View style={[styles.innerRectangle, { paddingLeft: 15 }]}>
                    <Image source={require("./assets/ajuda.png")} />
                    <Text style={styles.text}>Central de Ajuda</Text>
                </View>
                <View style={styles.innerRectangle}>
                    <Image source={require("./assets/termo.png")} />
                    <Text style={[styles.text, { paddingLeft: 5 }]}>Termo de Uso</Text>
                </View>
                <View style={[styles.innerRectangle, { paddingLeft: 25 }]}>
                    <Image source={require("./assets/sobre.png")} />
                    <Text style={[styles.text, { paddingLeft: 11 }]}>Sobre o App</Text>
                </View>
            </View>

            <View style={styles.versionContainer}>
                <Text style={styles.versionText}>V.001</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D1D3C1",
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectangleContainer: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
    },
    innerRectangle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    text: {
        marginLeft: 10,
        color: '#3E4411',
        fontSize: 25,
    },
    versionContainer: {
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
