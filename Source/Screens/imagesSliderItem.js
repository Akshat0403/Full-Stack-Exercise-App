import { View, Text } from 'react-native'
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';

export default function ImagesSliderItem({ item }){
    const {width} = useWindowDimensions();
    return (
        <View style = {styles.container}>
            <Image source={item} style = {styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 10
    }
})