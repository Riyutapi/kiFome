import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Perfil } from './pages/perfil'
import { Escrever_Receita } from './pages/escrever_receita'
import { Geladeira } from './pages/geladeira'
import { Buscar_Receita } from './pages/buscar_receita'
import { Favoritos } from './pages/favoritos'

const Stack = createStackNavigator();

export function Routes(){
    return (
        <Stack.Navigator>
          <Stack.Screen name="geladeira" component={Geladeira} 
          options={{ headerShown: false }}/>
          <Stack.Screen name="buscar" component={Buscar_Receita} 
          options={{ headerShown: false }}/>
          <Stack.Screen name="favorito" component={Favoritos} 
          options={{ headerShown: false }}/>
          <Stack.Screen name="escrever" component={Escrever_Receita} 
          options={{ headerShown: false }}/>
          <Stack.Screen name="perfil" component={Perfil} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
      );
}
