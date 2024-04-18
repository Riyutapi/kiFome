import React from "react";
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import styles from "./style";
import Coin from "../../components/Coin";
import PerfilComponent from "../../components/Perfil";

export function Favoritos() {
    const [search, setSearch] = React.useState('')

    const handleSearch = (text) => {
        setSearch(text);
      }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Coin />
                <PerfilComponent color={"#f2f2ec"} left={-80}/>
            </View>

            <View style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
                <Text style={{fontSize: 12, fontWeight: '700', color: '#3E4411'}}>SUAS RECEITAS FAVORITAS</Text>
                <TextInput style={styles.input} value={search} onChangeText={handleSearch} placeholder='Buscar'/>
            </View>


            <View style={styles.catBox}>
                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, opacity: .6}}>
                    <View style={[styles.categoria, {width: 30, height: 30}]}>
                    <Image source={require('../../Assets/Doce.png')}/>
                    </View>
                    <Text style={{fontSize: 7, color: '#3E4411', fontWeight: '700'}}>Doce</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
                    <View style={styles.categoria}>
                    <Image source={require('../../Assets/catBolo.png')}/>
                    </View>
                    <Text style={{fontSize: 8, color: '#3E4411', fontWeight: '700'}}>Brunch</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
                    <View style={styles.categoria}>
                    <Image source={require('../../Assets/Almoco.png')}/>
                    </View>
                    <Text style={{fontSize: 8, color: '#3E4411', fontWeight: '700'}}>Almoço</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
                    <View style={styles.categoria}>
                    <Image source={require('../../Assets/Manha.png')}/>
                    </View>
                    <Text style={{fontSize: 8, color: '#3E4411', fontWeight: '700'}}>Manha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
                    <View style={styles.categoria}>
                    <Image source={require('../../Assets/Jantar.png')}/>
                    </View>
                    <Text style={{fontSize: 8, color: '#3E4411', fontWeight: '700'}}>Jantar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, opacity: .6}}>
                    <View style={[styles.categoria, {width: 30, height: 30}]}>
                    <Image source={require('../../Assets/Fruta.png')}/>
                    </View>
                    <Text style={{fontSize: 7, color: '#3E4411', fontWeight: '700'}}>Fruta</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.catTitle}>
                <Text style={{fontSize: 11, color: '#3E4411', fontWeight: '400'}}>Selecione a receita desejada:</Text>
            </View>


            <View style={styles.receitaLista}>
                <View style={styles.receitaUnid}>

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
                </View>
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