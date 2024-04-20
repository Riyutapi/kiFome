import { StyleSheet} from "react-native";

const styles = StyleSheet.create({

    catBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    categoria:{
        height: 45,
        width: 45,
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
    },
})

export default styles;