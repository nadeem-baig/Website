import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colour from '../../assests/colour';
import Account from '../../screens/Account'
import MainScreen from '../../screens/MainScreen'
import SeemoreMainDepartments from '../../screens/SeemoreMainDepartments'
import FindDoctorScreen from '../../screens/FindDoctorScreen'
import autoSearch from '../mainscreen/autoSearch'
import SeedetailsScreen from '../findDoctorScreen/SeedetailsScreen';
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

    const search =()=>
    <Stack.Navigator>
    <Stack.Screen name="Search Medicines" component={autoSearch} options ={{headerShown:false}} />
    <Stack.Screen name="SeedetailsScreen" component={SeedetailsScreen}  options = {({route})=>({title:route.params.data.manufacturer,
    headerStyle: {backgroundColor: colour.productBackground}, headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}})} />
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
    
    <Tab.Screen name="SearchBar"    children={search} 
    options={{
        headerShown:false,
        tabBarIcon: ({color,size})=>
        <MaterialCommunityIcons name="database-search" size={size} color={color} />
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