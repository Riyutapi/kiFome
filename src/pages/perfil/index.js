import styles from "./styles";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../components/BackButton';
import Item from './components/itens'
import Versao from '../../components/versao'
import { useNavigation } from '@react-navigation/native';


export function Perfil({ route }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.perfil}>
                <View style={styles.imgBox}>
                    <Image source={require("../../Assets/imagem_usuario.png")} style={styles.imgBoxImage} resizeMode="cover" />
                </View>
                <Text style={styles.Level}>Nível 01</Text>
                <Text style={styles.category}>Auxiliar de Cozinha</Text>
            </View>
            
            <TouchableOpacity style={styles.superiorEsquerdo}>
                <BackButton top={20} left={0} color="#F2F2EC" onPress={() => navigation.goBack()}/>
            </TouchableOpacity>

            <View style={styles.retanguloContainer}>
                <Item espaço1={24} espaço2={4} imagem={require("./assets/dados.png")} texto="Meus dados" />
                <Item espaço1={20} espaço2={3} imagem={require("./assets/notificacao.png")} texto="Notificações" />
                <Item espaço1={15} espaço2={0} imagem={require("./assets/ajuda.png")} texto="Central de Ajuda" />
                <Item espaço1={8} espaço2={5} imagem={require("./assets/termo.png")} texto="Termo de Uso" />
                <Item espaço1={25} espaço2={11} imagem={require("./assets/sobre.png")} texto="Sobre o App" />
            </View>

            <Versao/>

        </View>
    );
}
