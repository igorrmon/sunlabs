import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Views/Home';
import colors from '../UI/colors';
import Header from '../Components/Header';
import Details from '../Views/Details';
const Stack = createStackNavigator();

// import { Container } from './styles';

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cidades"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Cidades" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
