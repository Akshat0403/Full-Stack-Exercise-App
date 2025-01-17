import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import { images } from './constant';
import ImagesSliderItem from './imagesSliderItem';


export default function ImageSlider() {
  return (
    <View>
        <FlatList 
          data={images}
          renderItem={({item}) => <ImagesSliderItem item = {item} />}
          horizontal
          showsHorizontalScrollIndicator = {false}
        />
    </View>
  )
}