import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Account from '../../screens/Account'
import MainScreen from '../../screens/MainScreen'
import SeemoreMainDepartments from '../../screens/SeemoreMainDepartments'
import FindDoctorScreen from '../../screens/FindDoctorScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const AppNavigator = ()=>{
    const homechild =()=>
    <Stack.Navigator>
    <Stack.Screen name="MainScreen" component={MainScreen} options ={{headerShown:false}} />
    <Stack.Screen name="SeemoreMainDepartments" component={SeemoreMainDepartments} />
    </Stack.Navigator>
    
    const FindDoctorchild =()=>
    <Stack.Navigator>
    <Stack.Screen name="Find Doctor" component={FindDoctorScreen} options ={{headerShown:false}} />
    <Stack.Screen name="SeemoreMainDepartments" component={SeemoreMainDepartments} />
    </Stack.Navigator>


return(
    <>
    <Tab.Navigator>

    <Tab.Screen name="Home"    children={homechild} 
    options={{
        headerShown:false,
        tabBarIcon: ({color,size})=>
        <MaterialCommunityIcons name="home" size={size}  color={color} />
    }}
    />
    
    <Tab.Screen name="Doctor" children={FindDoctorchild}
    options={{
        headerShown:false,
        tabBarIcon: ({color,size})=>
        <MaterialCommunityIcons name="hospital-building" size={size}  color={color}/>
    }}/>

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