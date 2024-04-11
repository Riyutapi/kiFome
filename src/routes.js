import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Perfil } from './pages/perfil'
import { Escrever_Receita } from './pages/escrever_receita'
import { Geladeira } from './pages/geladeira'

const Tab = createMaterialBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="perfil"
                component={Perfil}
            />
            <Tab.Screen
                name="escrever"
                component={Escrever_Receita}
            />
            <Tab.Screen
                name="geladeira"
                component={Geladeira}
            />
        </Tab.Navigator>
    )
}