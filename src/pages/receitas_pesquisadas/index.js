import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import PerfilComponent from "../../components/Perfil";
import BackButton from "../../components/BackButton";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export function Receitas() {
    const navigation = useNavigation();
    const filterOp = [
        { label: 'Avaliação', value: 'option1' },
        { label: 'Tempo de preparo', value: 'option2' },
        { label: 'Favoritos', value: 'option3' },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                   <BackButton top={-15} left={10} color="#F2F2EC" onPress={() => navigation.goBack()}/>
                </TouchableOpacity>

                <PerfilComponent color={"#f2f2ec"} left={-80}/>
            </View>

            <View style={styles.pickerContainer}>
                <Picker style={styles.picker}>
                    {filterOp.map((option) => (
                        <Picker.Item style={{fontSize: 10, color: '#3E4411'}} key={option.value} label={option.label} value={option.value} />
                    ))}
                </Picker>
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
                <Text style={{fontSize: 12, color: '#3E4411', fontWeight: '700'}}>DISPONÍVEL EM SUA GELADEIRA</Text>
                <Text style={{fontSize: 11, color: '#3E4411', fontWeight: '400'}}>Selecione a receita desejada:</Text>
            </View>

            <View style={styles.receitaLista}>
                <View style={styles.receitaUnid}>
                    <Image source={require('../../Assets/omelete.png')}/>
                    <View style={{display: 'flex', flexDirection: 'column', gap: 10}}>
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

            <View style={[styles.receitaLista, {opacity: .6}]}>
                <View style={[styles.receitaUnid, {marginLeft: -10}]}>
                    <Image source={require('../../Assets/omelete2.png')}/>
                </View>
                <Text style={{color: '#DF6127', fontSize: 9, fontWeight: '600'}}>OMELETE VANGUARDISTA</Text>
                <View style={[styles.avaliacaoBox, {borderBottomWidth: 0, borderBottomColor: '#3E4411',}]}>
                    <View style={styles.avaliacaoUnit}>
                        <Image style={{height: 15, width: 15}} source={require('../../Assets/Hat.png')}/>
                        <Text style={{color: '#3E4411', fontSize: 10, fontWeight: '700'}}>4,8</Text>
                    </View>
                    <View style={styles.avaliacaoUnit}>
                        <View style={[styles.orangeCircle, {height: 15, width: 15}]}>
                            <Image source={require('../../Assets/whiteClock.png')}/>
                        </View>
                        <Text style={{color: '#3E4411', fontSize: 10, fontWeight: '700'}}>7 Min.</Text>
                    </View>
                    <View style={styles.avaliacaoUnit}>
                        <View style={[styles.orangeCircle, {height: 15, width: 15}]}>
                            <Image source={require('../../Assets/Bag.png')}/>
                        </View>
                        <Text style={{color: '#3E4411', fontSize: 10, fontWeight: '700'}}>4</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}