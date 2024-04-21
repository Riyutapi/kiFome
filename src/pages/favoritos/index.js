import React from "react";
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import styles from "./style";
import Coin from "../../components/Coin";
import PerfilComponent from "../../components/Perfil";
import { useNavigation } from '@react-navigation/native';
import Categorias from "../../components/Categorias";

export function Favoritos() {
    const navigation = useNavigation();
    const [search, setSearch] = React.useState('')

    const handleSearch = (text) => {
        setSearch(text);
      }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Coin/>
                <PerfilComponent color={"#f2f2ec"} left={-80}/>
            </View>

            <View style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 15,}}>
                <Text style={{fontSize: 12, fontWeight: '700', color: '#3E4411'}}>SUAS RECEITAS FAVORITAS</Text>
                <TextInput style={styles.input} value={search} onChangeText={handleSearch} placeholder='Buscar'/>
            </View>

            <Categorias/>

            <View style={styles.catTitle}>
                <Text style={{fontSize: 11, color: '#3E4411', fontWeight: '400'}}>Selecione a receita desejada:</Text>
            </View>


            <View style={styles.receitaLista}>
                <TouchableOpacity style={styles.receitaUnid} onPress={() => {
                    navigation.navigate('receita')}}>

                    <Image source={require('../../Assets/omelete.png')}/>
                    <View style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                    <View style={[styles.imgHeartBox]}>
                        <Image style={[styles.imgHeart, {height: 18, width: 18}]} source={require(`../../Assets/orangeHeart.png`)}/>   
                    </View>
                        <View style={styles.receitaUnidRight}>
                            <View style={styles.orangeCircle}>
                                <Image source={require('../../Assets/littleHeart.png')}/>
                            </View>
                            <Text style={{fontSize: 15, fontWeight: '700', color: '#3E4411'}}>93</Text>
                        </View>
                        <View style={styles.receitaUnidRight}>
                            <View style={styles.orangeCircle}>
                                <View style={styles.comentBox}>
                                    <Image style={{height: 5, width: 8}} source={require('../../Assets/Order.png')}/>
                                </View>
                            </View>
                            <Text style={{fontSize: 15, fontWeight: '700', color: '#3E4411'}}>52</Text>
                        </View>
                    </View>

                </TouchableOpacity>

                <Text style={{color: '#DF6127', fontSize: 12, fontWeight: '600'}}>OMELETE TRADICIONAL</Text>
                <View style={styles.avaliacaoBox}>
                    <View style={styles.avaliacaoUnit}>
                        <Image source={require('../../Assets/Hat.png')}/>
                        <Text style={{color: '#3E4411', fontSize: 15, fontWeight: '700'}}>5,0</Text>
                    </View>
                    <View style={styles.avaliacaoUnit}>
                        <View style={styles.orangeCircle}>
                            <Image source={require('../../Assets/whiteClock.png')}/>
                        </View>
                        <Text style={{color: '#3E4411', fontSize: 15, fontWeight: '700'}}>5 Min.</Text>
                    </View>
                    <View style={styles.avaliacaoUnit}>
                        <View style={styles.orangeCircle}>
                            <Image source={require('../../Assets/Bag.png')}/>
                        </View>
                        <Text style={{color: '#3E4411', fontSize: 15, fontWeight: '700'}}>3</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}