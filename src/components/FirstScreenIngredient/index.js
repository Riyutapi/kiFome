import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from "react-native";
import  Perfil  from '../Perfil';
import Coin from '../Coin';
import Menu from '../Menu';
import But from '../Button';
import styles from './style'

export default function FirstScreenIngredient() {
    return (
        <View style={styles.mainBox}>
        <View style={styles.header}>
        <Perfil/>
        <Coin/>
        </View>
        <View style={styles.mainCircle}>
        <TouchableOpacity>
                <Text style={styles.clearTextButton}>Esvaziar Geladeira</Text>
        </TouchableOpacity>

        <View style={styles.ingredientsBox}>
            <ScrollView style={styles.scroll}>
            <View style={styles.ingredientMiniBox}>
                <View style={styles.ingredientMiniBoxLeft}>
                <Image style={styles.img} source={require('../../Assets/Egg.png')}/>
                    <Text style={styles.text}>Ovo</Text>
                </View>

                <View style={styles.ingredientMiniBoxRight}>
                    <View style={styles.ingredientDecInc}>
                        <TouchableOpacity><Text style={styles.ingredientDecIncText}>-</Text></TouchableOpacity>
                    </View>
                    
                    <View style={styles.ingredientQuant}>
                        <Text style={styles.ingredientQuantText}>2</Text>
                    </View>
                    
                    <View style={styles.ingredientDecInc}>
                        <Text style={styles.ingredientDecIncText}>+</Text>
                    </View>
                </View>
        </View>

        <View style={styles.ingredientMiniBox}>
            <View style={styles.ingredientMiniBoxLeft}>
            <Image style={styles.img} source={require('../../Assets/Cheese.png')}/>
                <Text style={styles.text}>Queijo</Text>
            </View>
            
            <View style={styles.ingredientMiniBoxRight}>
                <View style={styles.ingredientDecInc}>
                    <TouchableOpacity><Text style={styles.ingredientDecIncText}>-</Text></TouchableOpacity>
                </View>
                
                <View style={styles.ingredientQuant}>
                    <Text style={styles.ingredientQuantText}>1</Text>
                </View>
                
                <View style={styles.ingredientDecInc}>
                <TouchableOpacity><Text style={styles.ingredientDecIncText}>+</Text></TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.ingredientMiniBox}>
            <View style={styles.ingredientMiniBoxLeft}>
            <Image style={styles.img} source={require('../../Assets/Ham.png')}/>
                <Text style={styles.text}>Presunto</Text>
            </View>
            
            <View style={styles.ingredientMiniBoxRight}>
                <View style={styles.ingredientDecInc}>
                    <TouchableOpacity><Text style={styles.ingredientDecIncText}>-</Text></TouchableOpacity>
                </View>
                
                <View style={styles.ingredientQuant}>
                    <Text style={styles.ingredientQuantText}>2</Text>
                </View>
                
                <View style={styles.ingredientDecInc}>
                   <TouchableOpacity><Text style={styles.ingredientDecIncText}>+</Text></TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.ingredientMiniBox}>
                <View style={styles.ingredientMiniBoxLeft}>
                <Image style={styles.img} source={require('../../Assets/Egg.png')}/>
                    <Text style={styles.text}>Ovo</Text>
                </View>

                <View style={styles.ingredientMiniBoxRight}>
                    <View style={styles.ingredientDecInc}>
                        <TouchableOpacity><Text style={styles.ingredientDecIncText}>-</Text></TouchableOpacity>
                    </View>
                    
                    <View style={styles.ingredientQuant}>
                        <Text style={styles.ingredientQuantText}>2</Text>
                    </View>
                    
                    <View style={styles.ingredientDecInc}>
                       <TouchableOpacity><Text style={styles.ingredientDecIncText}>+</Text></TouchableOpacity>
                    </View>
                </View>
        </View>

        <View style={styles.ingredientMiniBox}>
                <View style={styles.ingredientMiniBoxLeft}>
                <Image style={styles.img} source={require('../../Assets/Egg.png')}/>
                    <Text style={styles.text}>Ovo</Text>
                </View>

                <View style={styles.ingredientMiniBoxRight}>
                    <View style={styles.ingredientDecInc}>
                        <TouchableOpacity><Text style={styles.ingredientDecIncText}>-</Text></TouchableOpacity>
                    </View>
                    
                    <View style={styles.ingredientQuant}>
                        <Text style={styles.ingredientQuantText}>2</Text>
                    </View>
                    
                    <View style={styles.ingredientDecInc}>
                       <TouchableOpacity><Text style={styles.ingredientDecIncText}>+</Text></TouchableOpacity>
                    </View>
                </View>
        </View>
        </ScrollView>
        </View>

        <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addTextButton}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.footer}>  
            <But/>
            <Menu/>
        </View>
      </View>
    )

}