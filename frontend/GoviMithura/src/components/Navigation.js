import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import FarmerHomeScreen from '../screens/farmer/FarmerHomeScreen';
import FarmerLoginScreen from '../screens/farmer/FarmerLoginScreen';
import WelcomePageScreen from '../screens/WelcomePageScreen';
import FarmerRegisterScreen from '../screens/farmer/FarmerRegisterScreen';
import AccountSelectScreen from "../screens/AccountSelectScreen";
import DiseaseDitectionScreen from "../screens/farmer/FarmerDiseaseDetectionScreen";
import PlantsSelectionScreen from "../screens/farmer/PlantsSelectionsScreen";
import CommunityScreen from "../screens/farmer/FarmerCommunityScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Welcome' component={WelcomePageScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='AccountSelect' component={AccountSelectScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='FarmerLogin' component={FarmerLoginScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='FarmerHome' component={FarmerHomeScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='FarmerRegister' component={FarmerRegisterScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='FarmerDiseaseDetection' component={DiseaseDitectionScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='PlantsSelection' component={PlantsSelectionScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Community' component={CommunityScreen} options={{headerShown:false}}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;