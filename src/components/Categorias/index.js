import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";

export default function Categorias() {
    const Categor = [
        {Nome: 'Doce', Img:  require('../../Assets/Doce.png'), Wid: 45, Hei: 45},
        {Nome: 'Brunch', Img:  require('../../Assets/catBolo.png'), Wid: 45, Hei: 45},
        {Nome: 'Almoço', Img:  require('../../Assets/Almoco.png'), Wid: 45, Hei: 45},
        {Nome: 'Manhã', Img:  require('../../Assets/Manha.png'), Wid: 45, Hei: 45},
        {Nome: 'Jantar', Img:  require('../../Assets/Jantar.png'), Wid: 45, Hei: 45},
        {Nome: 'Fruta', Img: require('../../Assets/Fruta.png'), Wid: 45, Hei: 45},
        {Nome: 'Doce', Img:  require('../../Assets/Doce.png'), Wid: 45, Hei: 45},
        {Nome: 'Brunch', Img:  require('../../Assets/catBolo.png'), Wid: 45, Hei: 45},
        {Nome: 'Almoço', Img:  require('../../Assets/Almoco.png'), Wid: 45, Hei: 45},
        {Nome: 'Manhã', Img:  require('../../Assets/Manha.png'), Wid: 45, Hei: 45},
        {Nome: 'Jantar', Img:  require('../../Assets/Jantar.png'), Wid: 45, Hei: 45},
        {Nome: 'Fruta', Img: require('../../Assets/Fruta.png'), Wid: 45, Hei: 45},
    ]

    return(
        <View style={styles.catBox}>
            <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                {Categor.map((item, index) => (
                    <TouchableOpacity key={index} style={[styles.catContainer, {marginRight: 10}]}>
                        <View style={[styles.categoria, {width: item.Wid, height: item.Hei}]}>
                            <Image source={item.Img}/>
                        </View>
                        <Text style={{fontSize: 7, color: '#3E4411', fontWeight: '700'}}>{item.Nome}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}
