import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View } from 'react-native';
import { Perfil } from './pages/perfil'
import { Escrever_Receita } from './pages/escrever_receita'
import { Geladeira } from './pages/geladeira'
import { Buscar_Receita } from './pages/buscar_receita'
import { Favoritos } from './pages/favoritos'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Menu() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:{ 
          position:'absolute',
          backgroundColor: '#D1D3C1',
          elevation: 0,
          height:'10%',
        }}}>
      <Tab.Screen name="geladeira" 
        component={Geladeira} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              marginTop:-16,
              marginLeft:30,
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#F2F2EC',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                source={require('./Assets/Freezer.png')}
                style={{
                  marginTop:10,
                  width: '50%',
                  height: '80%',
                  tintColor: focused ? '#DF6127' : '#AFB297',
                }}/>
            </View>)
      }}/>
      <Tab.Screen name="buscar" 
        component={Buscar_Receita} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ focused }) => (
            <View style={{
              marginTop:-16,
              marginLeft:10,
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#F2F2EC',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                source={require('./Assets/Book.png')}
                style={{
                  marginTop:10,
                  width: '50%',
                  height: '80%',
                  tintColor: focused ? '#DF6127' : '#AFB297',
                }}
              />
            </View>),
      }}/>
      <Tab.Screen name="favorito" 
        component={Favoritos} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              marginTop:-16,
              marginRight:10,
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#F2F2EC',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                source={require('./Assets/Heart.png')}
                style={{
                  marginTop:10,
                  width: '70%',
                  height: '70%',
                  tintColor: focused ? '#DF6127' : '#AFB297',
                }}
              />
            </View>),
      }}/>
      <Tab.Screen name="escrever" 
        component={Escrever_Receita} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{
              marginTop:-16,
              marginRight:30,
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#F2F2EC',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image
                source={require('./Assets/Pen.png')}
                style={{
                  marginTop:10,
                  width: '70%',
                  height: '70%',
                  tintColor: focused ? '#DF6127' : '#AFB297',
                }}
              />
            </View>),
      }}/>
    </Tab.Navigator>
  );
}

export function Routes(){
    return (
        <Stack.Navigator>
          <Stack.Screen name="menu" component={Menu} 
            options={{ headerShown: false }}/>
          <Stack.Screen name="perfil" component={Perfil} 
            options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}
