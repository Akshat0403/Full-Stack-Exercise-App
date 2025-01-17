import { View } from "react-native";
import { Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { widthToDP as wp } from 'react-native-responsive-screens';
import { heightToDP as hp } from "react-native-responsive-screens";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from "react-native-elements";
import { Image } from "react-native";
import ImageSlider from "./ImageSlider";
import BodyParts from "./BodyParts";
import axios from "axios";


export default function HomeScreen() {
  const [exercisebrief, SetExerciseBrief] = useState([]);
  return (
    <SafeAreaView className = 'flex-1 bg-white flex space-y-5' edges = {['top']}>
      <StatusBar style = 'dark'/>


      {/* Punchline and Avatar */}
      <View className = 'flex-row justify-between items-center mx-5'>
        <View className = 'space-y-2'>
          <Text style = {{fontSize: hp(4.5)}} className = 'font-bold tracking-wider text-neutral-700'>
            READY TO
          </Text>
          <Text style = {{fontSize: hp(4.5)}} className = 'font-bold tracking-wider text-rose-500'>
            WORKOUT
          </Text>
        </View>
        <View className = 'flex justify-center items-center space-y-2'>
          <Image 
            source = {require('../Images/avatar.png')}
            style = {{height: hp(6), width: hp(6)}}
            className = 'rounded-full'
          />
          <View className = 'bg-neutral-200 rounded-full flex justify-center items-center'>
            <Ionicons name = 'notifications' size = {39} color = 'gray' />
          </View>
        </View>
      </View>



      {/* Image Slider */}
      <View>
        <ImageSlider />
      </View>


      {/* Body Parts */}
      <View className = 'flex-1'>
        <BodyParts exercisebrief = {exercisebrief} />
      </View>
    </SafeAreaView>
  )
}