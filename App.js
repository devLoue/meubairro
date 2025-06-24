import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppDrawer from './src/components/navigation/AppDrawer';

export default function App() {
  return (
    //Hidden = escondido, StatusBar escondida. 
    //AppDrawer é um componente da pasta navigation
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <AppDrawer /> 
      </NavigationContainer>
    </>
  );
}

