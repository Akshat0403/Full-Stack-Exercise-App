import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Source/Screens/HomeScreen';
import WelcomeScreen from './Source/Screens/WelcomeScreen';
import ImageSlider from './Source/Screens/ImageSlider';
import ImagesSliderItem from './Source/Screens/imagesSliderItem';
import Exercises from './Source/Screens/Exercises';
import BodyParts from './Source/Screens/BodyParts';
import { images } from './Source/Screens/constant';
import { bodyParts } from './Source/Screens/constant';
import Navigation from './Source/Screens/Navigation';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Navigation />
    );
};