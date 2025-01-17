import { 
    View, 
    Text, 
    FlatList, 
    Pressable, 
    ScrollView, 
    StatusBar, 
    TouchableOpacity,
    Image
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { bodyParts } from './constant';
import { useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { rapidAPIKey } from './constant';
import { MasonryList } from '@react-native-seoul/masonry-list';
import {
    heightToDP,
    heightToDP as hp,
    widthToDP as wp
} from 'react-native-responsive-screens';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Loading from './Loading';
import { useNavigation } from '@react-navigation/native';



export default function Exercises() {
    const route = useRoute();
    const item = route.params.item;
    console.log(item.name);
    const navigation = useNavigation();
    const [exercisesInfo, setExercisesInfo] = useState([]);

    const handlePress = () => {
        navigation.navigate('ExercisesDetails', {...exercisesInfo});
    }
    const apiCall = async (url, params) => {
        const options = {
          method: 'GET',
          url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${item.name}`,
          params: {
            limit: '10',
            offset: '0'
          },
          headers: {
            'x-rapidapi-key': 'efa54a34f7mshd8b550810a6acc3p1c273cjsn7d21c79ef45a',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        };
        
        try {
          const response = await axios.request(options);
          if(response){
            setExercisesInfo(response.data);
          }
        } catch (error) {
          console.error(error);
        }
    };
    useEffect(() => {
        apiCall();
    }, [item]);

    const getExercises = async(bodyParts) => {
        let data = await fetchExercisesByBodyPart(bodyParts);
        if(data){
            setExercisesInfo(data);
        }
    }

    return (
        <ScrollView>
            <StatusBar style = 'light' />
            <Image 
                source = {item.image}
                style = {{width: wp(100), height: hp(45)}}
                className = 'rounded-b-[40px]'
            />

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className = 'bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full'
                style = {{height: hp(5.5), width: wp(6.5), marginTop: hp(2)}}
            >
                <Ionicons name = 'caret-back-outline' size = {hp(4)} color = 'white' />
            </TouchableOpacity>


            <View className = 'mx-4 space-y-3 mt-4'>
                <Text style = {{fontSize: hp(3)}} className = 'font-semibold text-neutral-700'>
                    {item.name} Exercises
                </Text>
                <View className = 'mb-10'>
                    {
                        exercisesInfo.length == 0 ? (
                            <Loading size = "Large" className = 'mt-20' />
                        ):
                        (  
                            <FlatList 
                                data = {exercisesInfo}
                                numColumns = {2}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator = {false}
                                contentContainerStyle = {{paddingBottom: 60, paddingTop: 20}}
                                columnWrapperStyle = {{justifyContent: 'space-between'}}
                                renderItem={({item, index}) => 
                                    
                                    <View>
                                        <TouchableOpacity onPress={() => navigation.navigate('ExercisesDetails', {...item})} className = 'flex py-3 space-y-2'>
                                            <View className = 'bg-neutral-200 shadow rounded-[25px]'>
                                                <Image 
                                                    source = {{uri: item.gifUrl}}
                                                    contentFit = 'cover'
                                                    style = {{width: wp(44), height: wp(52)}}
                                                    className='rounded-[25px]'
                                                />
                                                <Text style = {{fontSize: hp(2.5)}} className = 'text-neutral ml-2'>
                                                    {
                                                        item.name.length > 15 ? item.name.slice(0, 15) + '...': item.name
                                                    }
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                }
                            /> 
                        )
                    } 
                </View>
            </View>
        </ScrollView>
    );
};


