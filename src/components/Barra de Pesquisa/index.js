import React from "react";
import { View, TextInput } from "react-native";
import styles from "./style";

export default function BarradePesquisa () {
    const [search, setSearch] = React.useState('');

    const handleSearch = (text) => {
        setSearch(text);
    }

    return (
        <View style={styles.barra}>
            <TextInput
                style={styles.input}
                value={search}
                onChangeText={handleSearch}
                placeholder='Buscar'
            />
        </View>
    );
};