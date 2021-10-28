import React from 'react';
import MainScreen from './source/screens/MainScreen'
import Account from './source/screens/Account'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="MainScreen" component={MainScreen} 
        options={{
          headerShown:false,
        }}
        />
        <Drawer.Screen name="Account" component={Account} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

