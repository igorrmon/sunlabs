import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Views/Home';

import Header from '../Components/Header';
import Details from '../Views/Details';
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          option={{header: (props) => <Header {...props} />}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          option={{header: (props) => <Header {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
