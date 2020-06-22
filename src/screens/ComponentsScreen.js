import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const myName = "Kinng";

  return (
  <View>
   <Text style={{ fontSize:45 }}>Getting started with React Native!</Text>
   <Text style={{ fontSize:20 }}>My name is {myName}</Text>
  </View> 
  );
};

export default ComponentsScreen;