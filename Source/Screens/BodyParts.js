import { View } from 'react-native';
import React from 'react';
import { widthToDP as wp } from 'react-native-responsive-screens';
import { heightToDP as hp } from "react-native-responsive-screens";
import { bodyParts } from './constant';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Exercises from './Exercises';
import { useNavigation } from '@react-navigation/native';

export default function BodyParts() {
    const navigation = useNavigation();
    return (
        <View className = 'mx-4'>
            <Text className = 'font-semibold text-neutral-700' style = {{fontSize: hp(3)}}>
                Exercises
            </Text>

            <FlatList 
                data = {bodyParts}
                numColumns = {2}
                keyExtractor = {item => item.name}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {{paddingBottom: 50, paddingTop: 20}}
                columnWrapperStyle = {{
                    justifyContent: 'space-between'
                }}
                renderItem = {({item, index}) => <BodyPartCard index = {index} item = {item} navigation = {navigation} />}
            />
        </View>
    );
};

const BodyPartCard = ({item, index, navigation}) => {
    return(
        <View>
            <TouchableOpacity
                style = {{width: wp(44), height: wp(52)}}
                className = 'flex justify-end p-4 mb-4'
                onPress={() => navigation.navigate('Exercises', {item: item})}
            >
                <Image 
                    source = {item.image}
                    resizeMode = 'cover'
                    style = {{width: wp(44), height: wp(52)}}
                    className = 'rounded-[35px] absolute'
                />
                <LinearGradient 
                    colors = {['transparent', 'rgba(0, 0, 0, 0.9)']}
                    style = {{width: wp(44), height: hp(15)}}
                    start={{x: 0.5, y: 0}}
                    end = {{x: 0.5, y: 1}}
                    className = 'absolute bottom-0 rounded-b-[35px]'
                />
                <Text style = {{fontSize: hp(2.3)}} className = 'text-white font-semibold text-center tracking-wide'>
                    {item?.name}
                </Text>
            </TouchableOpacity>
        </View>
    );
};