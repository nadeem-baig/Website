import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Account from '../../screens/Account'
import MainScreen from '../../screens/MainScreen'
import SeemoreMainDepartments from '../../screens/SeemoreMainDepartments'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const AppNavigator = ()=>{
    SeemoreStack =()=>
    <Stack.Navigator>
    <Stack.Screen name="MainScreen" component={MainScreen} options ={{headerShown:false}} />
    <Stack.Screen name="SeemoreMainDepartments" component={SeemoreMainDepartments} />
    </Stack.Navigator>
    


return(
    <>
    <Tab.Navigator>
    <Tab.Screen name="MainScreen"    children={SeemoreStack} 
    options={{
        headerShown:false,
        tabBarIcon: ({color,size})=>
        <MaterialCommunityIcons name="home" size={size}  color={color} />
    }}
    />
    <Tab.Screen name="Account" component={Account} 
        options={{
            tabBarIcon: ({color,size})=>
            <MaterialCommunityIcons name="plus-circle" size={size}  color={color}/>
        }}/>
    </Tab.Navigator>

        </>
)
}

export default AppNavigator