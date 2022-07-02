import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomePageScreen from '../screens/WelcomePageScreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={WelcomePageScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;