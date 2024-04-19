import { View, Text, StyleSheet } from 'react-native'

export function Esqueceu(){
    return(
        <View style={styles.container}>
            <Text>Esqueceu a Senha</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: "#D1D3C1",
    justifyContent: 'center',
    alignItems: 'center',
    },
})