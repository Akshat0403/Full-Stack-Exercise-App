import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import WelcomeScreen from './WelcomeScreen';
import ImageSlider from './ImageSlider';
import ImagesSliderItem from './imagesSliderItem';
import Exercises from './Exercises';
import BodyParts from './BodyParts';
import { images } from './constant';
import { bodyParts } from './constant';
import ExercisesDetails from './ExercisesDetails';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="ImageSlider"
          component={ImageSlider}
          options={{ title: 'Image Slider' }}
        />
        <Stack.Screen
          name="BodyParts"
          component={BodyParts}
          options={{ title: 'Body Parts' }}
        />
        <Stack.Screen
          name="Exercises"
          component={Exercises}
          options={{ title: 'Exercises' }}
        />
        <Stack.Screen
          name="ImagesSliderItem"
          component={ImagesSliderItem}
          options={{ title: 'Images Slider Item' }}
        />
        <Stack.Screen
          name="ExercisesDetails"
          component={ExercisesDetails}
          options={{ title: 'Exercises Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}