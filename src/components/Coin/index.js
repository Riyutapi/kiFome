import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Coin() {
    const [coinModal, setCoinModal] = React.useState(false)
    const { height: screenHeight } = Dimensions.get('window');
    const { width: screenWidth } = Dimensions.get('window');
    
    return(
        <View>
            {coinModal ? 
            <View style={[styles.modalOpenBack, {width: screenWidth + 20, height: screenHeight + 50}]}>
               
                <View style={styles.modalOpen}>
                    <TouchableOpacity onPress={() => setCoinModal(false)} style={styles.closeModal}><Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>X</Text></TouchableOpacity>
                </View>
            </View> 
            :  
            <TouchableOpacity onPress={() => setCoinModal(true)} style={styles.coinBox}>
                <Image style={styles.imageCoin} source={require('../../Assets/coin.png')}/>
                <Text style={styles.coinText}>00000</Text>
            </TouchableOpacity>
            
            }
        </View>
        
    )
}
