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
                    <View style={styles.modalOpenContent}>
                        <Text style={styles.modalOpenContentTitles}>KiFomeCoins</Text>
                        <Text style={styles.modalOpenContentText}>A moeda virtual que você pode usar para desbloquear benefícios exclusivos e aproveitar ao máximo sua experiência culinária.</Text>
                        <Text style={styles.modalOpenContentTitles}>Onde usar?</Text>
                            <View style={styles.modalOpenContentTopics}>
                                <Text style={styles.modalOpenContentTopicsT}>● Desbloqueie Receitas Premium</Text>
                                <Text style={styles.modalOpenContentTopicsT}>● Remova Anúncios</Text>
                                <Text style={styles.modalOpenContentTopicsT}>● Participe de Desafios exclusivos.</Text>
                                <Text style={styles.modalOpenContentTopicsT}>● Customize perfil e suas receitas.</Text>
                                <Text style={styles.modalOpenContentTopicsT}>● Uso da IA. de receitas. </Text>
                            </View>
                            
                            <View style={styles.modalOpenContentImages}>
                                <Image source={require('../../Assets/avatarPremium.png')}/>
                                <Image source={require('../../Assets/receitaPremium.png')}/>
                            </View>

                        <Text style={styles.modalOpenContentTitles}>Como Obter?</Text>
                        <Text style={styles.modalOpenContentText}>Consiga gratuitamente ao longo do aplicativo, através de recompensas de login, desafios e receitas bem avaliadas. Ou, se preferir, compre clicando no botão abaixo.</Text>
                            <TouchableOpacity style={styles.modalOpenContentButton}>
                                <Text style={{fontSize: 16, color: '#fff', fontWeight: '800'}}>ADQUIRIR</Text>
                                <Image style={[styles.imageCoin, {position: 'absolute', right: 15, bottom: 3}]} source={require('../../Assets/coin.png')}/>
                            </TouchableOpacity>
                    </View>
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
