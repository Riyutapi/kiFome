import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import Carousel from 'react-native-snap-carousel';

export default function Categorias() {
    const Categor = [
        {Nome: 'Doce', Img:  require('../../Assets/Doce.png'), Wid: 45, Hei: 45},
        {Nome: 'Brunch', Img:  require('../../Assets/catBolo.png'), Wid: 45, Hei: 45},
        {Nome: 'Almoço', Img:  require('../../Assets/Almoco.png'), Wid: 45, Hei: 45},
        {Nome: 'ManHã', Img:  require('../../Assets/Manha.png'), Wid: 45, Hei: 45},
        {Nome: 'Jantar', Img:  require('../../Assets/Jantar.png'), Wid: 45, Hei: 45},
        {Nome: 'Fruta', Img: require('../../Assets/Fruta.png'), Wid: 45, Hei: 45},
        {Nome: 'Fruta', Img: require('../../Assets/Fruta.png'), Wid: 45, Hei: 45},
    ]

    return(
        <View style={styles.catBox}>
            <Carousel
                data={Categor}
                renderItem={({item, index}) => (
                    <TouchableOpacity key={index} style={styles.catContainer}>
                         <View style={[styles.categoria, {width: item.Wid, height: item.Hei}]}>
                         <Image source={item.Img}/>
                         </View>
                         <Text style={{fontSize: 7, color: '#3E4411', fontWeight: '700'}}>{item.Nome}</Text>
                     </TouchableOpacity>
                )}
                sliderWidth={300}
                itemWidth={60}
                layout={'default'}
                loop={true}
                autoplay={false}
                autoplayInterval={10000}
            />
        {/* {Categor.map((item, index) => (
           <TouchableOpacity key={index} style={styles.catContainer}>
                <View style={[styles.categoria, {width: item.Wid, height: item.Hei}]}>
                <Image source={item.Img}/>
                </View>
                <Text style={{fontSize: 7, color: '#3E4411', fontWeight: '700'}}>{item.Nome}</Text>
            </TouchableOpacity>
        ))} */}

        {/* <TouchableOpacity style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, opacity: .6}}>
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
        </TouchableOpacity> */}
    </View>


    )
}