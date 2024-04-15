import { View, Text, StyleSheet } from 'react-native'

export function Escrever_Receita(){
    return(
        <View style={styles.container}>
            <Text>Suas Receitas</Text>
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