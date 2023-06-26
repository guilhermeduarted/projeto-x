
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './compoentes/LoginScreen';
import TelaAulas from './compoentes/TelaAulas';





const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TelaAulas" component={TelaAulas} />

       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;



