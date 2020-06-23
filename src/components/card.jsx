import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const ImageCard = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score: {score} </Text>
    </View>
  );
};

const style = StyleSheet.create({

});

export default ImageCard;