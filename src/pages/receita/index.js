import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./style";
import BackButton from "../BackButton";
import Perfil from "../../components/Perfil";

export default function Receita() {
    const [heart, setHeart] = React.useState(true)

    const handleFav = () => {
        setHeart(!heart)
    }

    return(
        <View style={styles.modal}>
            <ScrollView style={styles.scroll}>
            {/* Cabeçalho */}
            <View style={styles.Header}>
                <View style={styles.headerTop}>
                    <BackButton color={'#F2F2EC'}/>
                    <TouchableOpacity onPress={handleFav} style={styles.imgHeartBox}>
                      {heart ? (
                        <Image style={[styles.imgHeart, {height: 26, width: 26}]} source={require(`../../Assets/blackHeart.png`)}/>
                       ) : (
                        <Image style={[styles.imgHeart, {height: 26, width: 26}]} source={require(`../../Assets/orangeHeart.png`)}/>
                      )}
                    </TouchableOpacity>
                </View>
                <Image style={styles.imgReceita} source={require('../../Assets/omeleteBig.jpg')}/>
                <View style={styles.containerTime}>
                    <View style={styles.littleImgBox}>
                        <Image style={styles.litteImg} source={require('../../Assets/Clock.png')}/>
                        <Text>5 Min.</Text>
                    </View>
                    <View style={styles.littleImgBox}>
                        <Image style={styles.litteImg} source={require('../../Assets/Hat.png')}/>
                        <Text style={{fontWeight: 'bold'}}>5,0</Text>
                    </View>
                    <View style={styles.littleImgBox}>
                        <Image style={[styles.litteImg, {height: 35, width: 35}]} source={require('../../Assets/Brunsh.png')}/>
                        <Text  style={{fontWeight: 'bold', marginLeft: -5}}>Brunch</Text>
                    </View>
                </View>
                </View>

            {/* Ingredientes */}
            <View style={styles.ingredientBox}>
                <View style={styles.ingredientChicken}>
                    <Image source={require('../../Assets/Chicken.png')}/>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>INGREDIENTES:</Text>
                </View>
                <View style={styles.ingredientListBox}>
                    <View style={[styles.ingredientBeforeModal, {marginTop: 20}]}>
                        <View style={styles.ingredientBefore}></View>
                        <Text style={styles.ingredientList}> 02 Ovos;</Text>
                    </View>
                    <View style={styles.ingredientBeforeModal}>
                        <View style={styles.ingredientBefore}></View>
                        <Text style={styles.ingredientList}> 01 Fatia de presunto</Text>
                    </View >
                    <View style={styles.ingredientBeforeModal}>
                        <View style={styles.ingredientBefore}></View>
                        <Text style={styles.ingredientList}> Tempero verde;</Text>
                    </View>
                    <View style={styles.ingredientBeforeModal}>
                        <View style={styles.ingredientBefore}></View>
                        <Text style={styles.ingredientList}> Sal;</Text>
                    </View>
                    <View style={styles.ingredientBeforeModal}>
                        <View style={styles.ingredientBefore}></View>
                        <Text style={styles.ingredientList}> 02 Fatias de queijo;</Text>
                    </View>
                </View>
            </View>

            {/* Modo de Preparo */}
            <View style={styles.prepareBox}>
                <Text style={styles.prepareTitle}>Modo de Preparo</Text>
                <View style={styles.prepareTextBox}>
                    <Text style={styles.prepareNumber}>01</Text>
                    <Text style={styles.prepareText}>Bata os 2 ovos, pode ser na batedeira ou não</Text>
                </View>
                <View style={styles.prepareTextBox}>
                    <Text style={styles.prepareNumber}>02</Text>
                    <Text style={styles.prepareText}>Após ter batido bem, coloque-o na frigideira já untada com óleo, acrescente o sal, o presunto picado em 
                    quadradinhos e as duas fatias de queijo (não precisa picar o queijo). </Text>
                </View>
                <View style={styles.prepareTextBox}>
                    <Text style={styles.prepareNumber}>03</Text>
                    <Text style={styles.prepareText}>Coloque os temperos a gosto, espere ficar firme, e vire o omelete.</Text>
                </View>
                <View style={styles.prepareTextBox}>
                    <Text style={styles.prepareNumber}>04</Text>
                    <Text style={styles.prepareText}>Está pronto um omelete delicioso, bom apetite!</Text>
                </View>
                <Text style={{fontSize: 12}}>Por <Text style={{textDecorationLine: 'underline'}}> Rita Navarro</Text></Text>

            </View>

            {/* Avaliação */}
            <View style={styles.avaliBox}>
                <Text style={styles.prepareTitle}>COMENTÁRIO</Text>
                <View style={styles.prepareAvaliBox}>
                    <View style={styles.imgPerfil}>
                    <Image source={require('../../Assets/User.png')}/>
                    </View>
                    <View style={styles.avaliacaoBox}>
                        <Text style={styles.avaliText}>Já fez essa receita? Não esqueça de avaliá-la.</Text>
                        <Image source={require('../../Assets/Avaliação.png')}/>
                    </View>
                </View>
                <Text style={styles.comentario}>Você ainda não atingiu o nível para poder comentar.</Text>
            </View>

            {/* Comentario */}
            <View style={styles.comentBox}>
                <View style={styles.comentHeader}>
                    <Text style={{fontSize: 10, fontWeight: '700'}}>52 Comentários</Text>
                    <View style={styles.comentHeaderRight}>
                        <Image source={require('../../Assets/Order.png')}/>
                        <Text style={{fontSize: 10, fontWeight: '700'}}>Ordenar Por</Text>
                    </View>
                </View>
                <View style={styles.comentMidBox}>
                    <Image source={require('../../Assets/comentPhoto.png')}/>
                    <View style={styles.comentMidRight}>
                        <View style={styles.comentMidName}>
                            <Text style={{fontSize: 10, fontWeight: '700'}}>Gustavo Anghel</Text>
                            <Text style={{fontSize: 8, fontWeight: '400'}}>Há 1 Ano</Text>
                        </View>
                        <View style={styles.comentMidText}>
                            <Text style={{fontSize: 10, fontWeight: '400', color: '#3E4411', width: 300,}}>Eu simplesmente adorei esta receita de omelete! O sabor ficou incrível, e a textura ficou perfeita - não muito seca, nem muito úmida. Obrigado por compartilhar esta deliciosa receita!</Text>
                            <Image source={require('../../Assets/threeP.png')}/>
                        </View>
                        <View style={styles.likeDeslikeBox}>
                            <View style={styles.likeDeslike}>
                                <Image source={require('../../Assets/like.png')}/>
                                <Text style={{fontSize: 10, fontWeight: '400'}}>125</Text>
                            </View>
                            <View style={styles.likeDeslike}>
                                <Image source={require('../../Assets/dislike.png')}/>
                                <Text style={{fontSize: 10, fontWeight: '400'}}>2</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            </ScrollView>
        </View>
    )}