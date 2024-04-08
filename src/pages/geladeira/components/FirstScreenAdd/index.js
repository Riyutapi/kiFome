import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import  Perfil  from '../Perfil';
import Coin from '../Coin';
import Menu from '../Menu';
import styles from "./style";
import But from '../Button';
import BackButton from '../BackButton';

export default function FirstScreenAdd() {
    return (
      <View style={styles.mainBox}>
        <View style={styles.header}>
        <Perfil/>
        <Coin/>
        </View>
        <View style={styles.mainCircle}>
            <BackButton/>
            <TextInput style={styles.input} placeholder='Quais ingredientes voce tem em casa?'/>
            <View style={styles.ingredientBox}>
            <ScrollView style={styles.scroll}>
                <View style={styles.ingredient}>
                    <View style={styles.ingredientLeft}>
                    <Image style={styles.img} source={require('../../Assets/avocado.png')}/>
                        <Text style={styles.text}>Abacate</Text>
                    </View>
                    <View style={styles.ingredientRight}>
                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity> 
                    </View>
                </View>

                <View style={styles.ingredient}>
                    <View style={styles.ingredientLeft}>
                         <Image style={styles.img} source={require('../../Assets/pumpkin.png')}/>
                        <Text style={styles.text}>Abobora</Text>
                    </View>
                    <View style={styles.ingredientRight}>
                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity> 
                    </View>
                </View>

                <View style={styles.ingredient}>
                    <View style={styles.ingredientLeft}>
                         <Image style={styles.img} source={require('../../Assets/açaí.png')}/>
                        <Text style={styles.text}>Açaí</Text>
                    </View>
                    <View style={styles.ingredientRight}>
                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity> 
                    </View>
                </View>

                <View style={styles.ingredient}>
                    <View style={styles.ingredientLeft}>
                         <Image style={styles.img} source={require('../../Assets/sugar.png')}/>
                        <Text style={styles.text}>Açúcar</Text>
                    </View>
                    <View style={styles.ingredientRight}>
                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity> 
                    </View>
                </View>

                <View style={styles.ingredient}>
                    <View style={styles.ingredientLeft}>
                         <Image style={styles.img} source={require('../../Assets/garlic.png')}/>
                        <Text style={styles.text}>Alho</Text>
                    </View>
                    <View style={styles.ingredientRight}>
                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity> 
                    </View>
                </View>

                <View style={styles.ingredient}>
                    <View style={styles.ingredientLeft}>
                         <Image style={styles.img} source={require('../../Assets/lettuce.png')}/>
                        <Text style={styles.text}>Alface</Text>
                    </View>
                    <View style={styles.ingredientRight}>
                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity> 
                    </View>
                </View>

                <View style={styles.ingredient}>
                    <View style={styles.ingredientLeft}>
                         <Image style={styles.img} source={require('../../Assets/Egg.png')}/>
                        <Text style={styles.text}>Ovo</Text>
                    </View>
                    <View style={styles.ingredientRight}>
                        <TouchableOpacity style={styles.checkBox}></TouchableOpacity> 
                    </View>
                </View>
                </ScrollView>
            </View>

        </View>
        <View style={styles.footer}>  
            <But/>
            <Menu/>
        </View>
      </View>
    );
  }
  