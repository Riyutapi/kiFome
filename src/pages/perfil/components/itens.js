import { View, Text, Image, StyleSheet } from "react-native";

export default function Item({ espaço1, espaço2, imagem, texto }) {
    return(
        <View style={[styles.retanguloItem, { paddingLeft: espaço1 }]}>
            <Image source={imagem} />
            <Text style={[styles.text, { paddingLeft: espaço2 }]}>{texto}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    retanguloItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 8,
    },
    text: {
        marginLeft: 10,
        color: '#3E4411',
        fontSize: 25,
    },
});
