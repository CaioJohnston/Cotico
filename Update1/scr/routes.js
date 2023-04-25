import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Mapa from './screens/mapa'
import Scanner from './screens/scanner'
import Pets from './screens/pets'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#000000",
            }}
        >
            <Tab.Screen name='mapa' component={Mapa} />
            <Tab.Screen name='scanner' component={Scanner} />
            <Tab.Screen name='pets' component={Pets} />
        </Tab.Navigator>
    )
}