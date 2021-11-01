import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './source/component/Navigation/AppNavigator'
export default function App() {
  return (
    <>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>    
    </>

  );
}

