import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Perfil } from './pages/perfil'

import { Geladeira } from './pages/geladeira'
import { Buscar_Receita } from './pages/buscar_receita'
import  Favoritas  from './pages/favoritos'
import EscreverReceita from './pages/escreverReceita';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <Stack.Navigator>
          <Stack.Screen name="geladeira" component={Geladeira} 
          options={{ headerShown: false }}/>
          <Stack.Screen name="buscar" component={Buscar_Receita} 
          options={{ headerShown: false }}/>
          <Stack.Screen name="favorito" component={Favoritas} 
          options={{ headerShown: false }}/>
          <Stack.Screen name="escrever" component={EscreverReceita} 
          options={{ headerShown: false }}/>
          <Stack.Screen name="perfil" component={Perfil} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
      );
}
