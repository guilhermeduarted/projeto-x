
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './compoentes/LoginScreen';
import TelaAulas from './compoentes/TelaAulas';
import Calendario from './compoentes/Calendario';
import link1 from './compoentes/link1';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TelaAulas" component={TelaAulas} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="link1" component={link1} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;



