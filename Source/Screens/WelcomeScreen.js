import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { widthToDP as wp } from 'react-native-responsive-screens';
import { heightToDP as hp } from "react-native-responsive-screens";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen(){
  const navigation = useNavigation();
  return (
    <View className = 'flex-1 flex justify-end'>
      <StatusBar style = 'light' />
      <Image className='h-full w-full absolute' source={require('../Images/welcome.png')} />
      
      <LinearGradient
        colors = {['transparent', '#18181b']}
        style = {{width: wp(100), height: hp(70)}}
        start = {{x: 0.5, y: 0}}
        end = {{x: 0.5, y: 0.8}}
        className = 'flex justify-end pb-12 space-y-8'
      >
        <View className = 'flex items-center'>
          <Text style = {{fontSize: hp(5)}} className = 'text-white font-bold tracking-wide'>
            Best <Text className = 'text-rose-500'>Workouts</Text>
          </Text>
          <Text style = {{fontSize: hp(5)}} className = 'text-white font-bold tracking-wide'>
            For You
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style = {{height: hp(7), width: wp(80)}}
            className = 'bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'
            onPress={() => navigation.navigate('Home')}
          >
            <Text style = {{fontSize: hp(3)}} className = 'text-white font-bold tracking-widest'>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};