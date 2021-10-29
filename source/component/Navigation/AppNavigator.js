import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Account from '../../screens/Account'
import MainScreen from '../../screens/MainScreen'
const Tab = createBottomTabNavigator()

const AppNavigator = ()=>{
return(
    <Tab.Navigator>
    <Tab.Screen name="MainScreen"    component={MainScreen} 
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
    {/* <Tab.Screen name="Account"     component={AccountNavigaator}
        options={{
            tabBarIcon: ({color,size})=>
            <MaterialCommunityIcons name="account" size={size}  color={color}/>
        }}
        /> */}
</Tab.Navigator>
)
}

export default AppNavigator