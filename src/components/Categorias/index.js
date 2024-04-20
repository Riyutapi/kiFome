import React from "react";
import { View } from "react-native";
import styles from "./style";
import Itens from "./component";

export default function Categorias() {
    return(
    
    <View style={styles.catBox}>
        <Itens opaco={true} imagem={require("../../Assets/Doce.png")} texto="Doce"/>
        <Itens imagem={require("../../Assets/catBolo.png")} texto="Brunch"/>
        <Itens imagem={require("../../Assets/Almoco.png")} texto="Almoço"/>
        <Itens imagem={require("../../Assets/Manha.png")} texto="Manha"/>
        <Itens imagem={require("../../Assets/Jantar.png")} texto="Jantar"/>
        <Itens opaco={true} imagem={require("../../Assets/Fruta.png")} texto="Fruta"/>
    </View>

    )
}