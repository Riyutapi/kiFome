import React, { useEffect } from 'react';
import { Text, View, TextInput} from 'react-native';
import  PerfilComponent  from '../../components/Perfil';
import Coin from '../../components/Coin';
import styles from "./styles";
import But from '../../components/Button';
import Categorias from "../../components/Categorias";
import BarradePesquisa from '../../components/Barra de Pesquisa';

export function Buscar_Receita(){

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Coin/>
                <PerfilComponent color={"#f2f2ec"} left={-80}/>
            </View>

            <View style={styles.circulo}></View>

            <View style={styles.buscar}>
                <Text style={{fontSize: 12, fontWeight: '700', color: '#3E4411'}}>O QUE SUA FOME ESTÁ PEDINDO?</Text>
            </View>

            <BarradePesquisa></BarradePesquisa>


            <View style={styles.categoria}>
                <Text style={{fontSize: 12, fontWeight: '700', color: '#3E4411'}}>NÃO TEM NADA EM MENTE?</Text>
                <Text style={{fontSize: 10, fontWeight: '700', color: '#3E4411'}}>TENTE UMA CATEGORIA:</Text>
            </View>

            <Categorias/>

            <View style={styles.but}>
                <But texto={'BUSCAR'}></But>
            </View>


            
        </View>
    )
}
