import { View, Text, StyleSheet } from 'react-native'
import Menu from '../../components/Menu';

export function Buscar_Receita(){
    return(
        <View style={styles.container}>
            <Text>Buscar Receitas</Text>

            <View style={styles.footer}>  
                <Menu/>
            </View>
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

    footer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }
})