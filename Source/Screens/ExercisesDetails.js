import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { heightToDP as hp, widthToDP as wp } from 'react-native-responsive-screens';
import Anticons from 'react-native-vector-icons/AntDesign'; 
import { useNavigation } from '@react-navigation/native';



export default function ExercisesDetails(props) {
    const navigation = useNavigation();
    let item = props.route.params;
    return (
        <View className = 'flex flex-1'>
            <View className = 'shadow-md bg-neutral-200 rounded-b-[40px]'>
                <Image 
                    source={{uri: item.gifUrl}}
                    contentFit = 'cover'
                    style = {{width: wp(100), height: wp(100)}}
                    className = 'rounded-b-[40px]'
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className = 'mx-2 absolute rounded-full mt-2 right-0'
            >
                <Anticons name='closecircle' size = {hp(4.5)} color={"#f43f5e"} />
            </TouchableOpacity>

            <ScrollView className = 'mx-4 space-y-2 mt-3'>
                <Text
                    style = {{fontSize: hp(3.5)}}
                    className = 'font-semibold text-neutral-800 tracking-wide'
                >
                    {item.name}
                </Text>
                <Text
                    style = {{fontSize: hp(3.5)}}
                    className = 'text-neutral-700 tracking-wide'
                >
                    Equipment: 
                    <Text className = 'text-neutral-800 font-semibold'>
                        {item.equipment}
                    </Text>
                </Text>
                <Text
                    style = {{fontSize: hp(3.5)}}
                    className = 'text-neutral-700 tracking-wide'
                >
                    Secondary Muscles: 
                    <Text className = 'text-neutral-800 font-semibold'>
                        {item.secondaryMuscles}
                    </Text>
                </Text>
                <Text
                    style = {{fontSize: hp(3.5)}}
                    className = 'text-neutral-700 tracking-wide'
                >
                    Target: 
                    <Text className = 'text-neutral-800 font-semibold'>
                        {item.target}
                    </Text>
                </Text>
                <Text
                    style={{ fontSize: hp(3.5) }}
                    className='text-neutral-700 tracking-wide'
                >
                    Instructions: 
                    {/* <Text className = 'text-neutral-800 font-semibold'>
                        {item.instructions}
                    </Text> */}
                </Text>
                {
                    item.instructions.toString().split('.').map((instruction, index) => {
                        return (
                        <Text 
                            key={instruction}
                            style={{ fontSize: hp(1.7) }}
                            className='text-neutral-700'
                        >
                            {instruction}
                        </Text>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};