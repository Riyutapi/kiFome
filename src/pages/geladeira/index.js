import React, { useEffect } from 'react';
import { ingredients } from '../../../ingredients';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import  PerfilComponent  from '../../components/Perfil';
import Coin from '../../components/Coin';
import styles from "./styles";
import But from '../../components/Button';
import BackButton from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import Adicionar from "../../components/Button_adicionar";


export function Geladeira() {
  const navigation = useNavigation();
  const [add, setAdd] = React.useState('flex')
  const [inferior, setInferior] = React.useState('flex')
  const [ingredientList, setIngredientList] = React.useState('none')
  const [ingredient, setIngrediet] = React.useState('none')
  const [search, setSearch] = React.useState('')
  const [objFreezer, setObjFreezer] = React.useState([]);
  
  const handleClickAdd = () => {
    setAdd('none')
    setInferior('none')
    setIngredientList('flex')
    setIngrediet('none')
  }

  const handleClickBack = () => {
    setInferior('flex')
    setIngredientList('none')
    if(objFreezer.length > 0) {
      setIngrediet('flex')
    } else {
      setAdd('flex')
    }
  }

  const handlePress = (item, iName) => {
    const newObjFreezer = [...objFreezer]
    const itemExIndex = newObjFreezer.findIndex(itemEx => itemEx.name === iName);

    if (itemExIndex !== -1) {
        newObjFreezer[itemExIndex].quant += 1
    } else {
        newObjFreezer.push({ name: item.name, img: item.img, quant: 1 });
    }
    setObjFreezer(newObjFreezer);
  }

  const incrementIng = (index) => {
    const newObjFreezer = [...objFreezer];
    newObjFreezer[index].quant += 1;
    setObjFreezer(newObjFreezer);
  }

  const decrementIng = (index) => {
    const newObjFreezer = [...objFreezer];
    if (newObjFreezer[index].quant > 1) {
        newObjFreezer[index].quant -= 1;
      } else {
        newObjFreezer.splice(index, 1);
      }
      setObjFreezer(newObjFreezer);
      if(newObjFreezer.length === 0) {
        setIngrediet('none')
        setAdd('flex')
      }
  }

  const clearFreezer = () => {
    setObjFreezer([]);
    setIngrediet('none')
    setAdd('flex')
  }

  const handleSearch = (text) => {
    setSearch(text);
  }
  const filterIng = ingredients.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.mainBox}>
      <View style={styles.header}>
        <PerfilComponent color={'#d1d3c1'} left={-80}/>
        <Coin/>
      </View>

      <View style={styles.mainCircle}>
        <View style={{display: add}}>
          <Text style={styles.addIngredient}>Adicione os ingredientes disponiveis em sua geladeira.</Text>
          <View style={styles.bigCircle}></View>
          <View style={styles.miniCircle}></View>
        </View>

        <View style={{display: ingredientList}}>
          <BackButton top={190} left={-60} color={true} onPress={handleClickBack}/>
          <TextInput style={styles.input} value={search} onChangeText={handleSearch} placeholder='Quais ingredientes voce tem em casa?'/>
          <View style={styles.ingredientBox}>
            <ScrollView style={styles.scroll}>
              {filterIng.map((item, index) => (
              <View key={index} style={styles.ingredient}>
                <View style={styles.ingredientLeft}>
                  <Image style={styles.img} source={item.img}/>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
                <View style={styles.ingredientRight}>
                    <TouchableOpacity onPressOut={() => handlePress(item, item.name)} style={styles.checkBox}></TouchableOpacity> 
                </View>
              </View>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={{display: ingredient}}>
          <TouchableOpacity style={{zIndex: 100}}>
            <Text onPress={() => clearFreezer()} style={styles.clearTextButton}>Esvaziar Geladeira</Text>
          </TouchableOpacity>

          <View style={styles.ingredientsBox}>
            <ScrollView style={styles.scroll}>
              {objFreezer.map((item, index) => (
              <View key={index} style={styles.ingredientMiniBox}>
                <View style={styles.ingredientMiniBoxLeft}>
                  <Image style={styles.img} source={item.img}/>
                  <Text style={styles.text}>{item.name}</Text>
                </View>

                <View style={styles.ingredientMiniBoxRight}>
                  <View style={styles.ingredientDecInc}>
                    <TouchableOpacity onPress={() => decrementIng(index)}><Text style={styles.ingredientDecIncText}>-</Text></TouchableOpacity>
                  </View>
                  
                  <View style={styles.ingredientQuant}>
                    <Text style={styles.ingredientQuantText}>{item.quant}</Text>
                  </View>
                  
                  <View style={styles.ingredientDecInc}>
                    <TouchableOpacity onPress={() => incrementIng(index)}><Text style={styles.ingredientDecIncText}>+</Text></TouchableOpacity>
                  </View>
                </View>
              </View>
              ))}
          </ScrollView>
          </View>
        </View>
      </View>

      <View style={[styles.footer, { display: inferior }]}>
        <View style={{ alignItems:'center', top: '45%' }}>
          <Adicionar color={"#AFB297"} onPress={handleClickAdd} />
        </View>
        <But texto={'BUSCAR'} onPress={() => navigation.navigate('receita_pesquisa')}/>
      </View>
    </View>
  );
}
  