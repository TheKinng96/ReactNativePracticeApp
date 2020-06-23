import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ImageCard from '../components/card'

const ImageScreen = () => {
  return (
    <View>
      <ImageCard title ="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
      <ImageCard title ="Beach" imageSource={require('../../assets/beach.jpg')} score={5} />
      <ImageCard title ="Mountain" imageSource={require('../../assets/mountain.jpg')} score={4} />
    </View>
  );
};

const style = StyleSheet.create({
  

});

export default ImageScreen;