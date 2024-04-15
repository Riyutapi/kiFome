import { View, Text, StyleSheet } from 'react-native'

export function Favoritos(){
    return(
        <View style={styles.container}>
            <Text>Suas Receitas Favoritas</Text>
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