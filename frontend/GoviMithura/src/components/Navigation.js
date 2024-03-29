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
import AddPostScreen from "../screens/farmer/FarmerAddPostScreen";
import CommentsScreen from '../screens/farmer/FarmerCommentsScreen';
import AddCommentScreen from '../screens/farmer/FarmerAddCommentScreen';
import AddReviewScreen from '../screens/farmer/FarmerAddReviewScreen';
import SelfPostsScreen from '../screens/farmer/FarmerSelfPostsScreen';
import SelfCommentsScreen from '../screens/farmer/FarmerSelfCommentsScreen';
import AddReportScreen from '../screens/farmer/FarmerReportScreen';
import AdminLoginScreen from '../screens/admin/AdminLoginScreen';
import AdminHomeScreen from '../screens/admin/adminHomeScreen';
import SelfAddReviewScreen from '../screens/farmer/FarmerSelfAddReviewScreen';

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
                <Stack.Screen name='AddPost' component={AddPostScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Comments' component={CommentsScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='AddComment' component={AddCommentScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='AddReview' component={AddReviewScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='SelfPosts' component={SelfPostsScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='CommentsOfTheSelfPosts' component={SelfCommentsScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='AddReport' component={AddReportScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='SelfReviews' component={SelfAddReviewScreen} options={{headerShown:false}}></Stack.Screen>


                <Stack.Screen name='AdminLogin' component={AdminLoginScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='AdminHome' component={AdminHomeScreen} options={{headerShown:false}}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;