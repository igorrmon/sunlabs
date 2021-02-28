import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Views/Home';
import colors from '../UI/colors';
import Header from '../Components/Header';
const Stack = createStackNavigator();

// import { Container } from './styles';

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: colors.primary,
          // },
          // headerTitleStyle: {
          //   color: colors.white,
          // },
          headerShown: false,
        }}>
        <Stack.Screen
          options={{
            headerTitle: () => <Header />,
          }}
          name="Cidades"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
