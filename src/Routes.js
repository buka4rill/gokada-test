import React from 'react';
// import {createStackNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Register } from './components/Register';
import Posts from './components/Posts';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Posts" component={Posts} />
      </Drawer.Navigator>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};
