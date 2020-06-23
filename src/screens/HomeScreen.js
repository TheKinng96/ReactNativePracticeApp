import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Book Page" />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="List" />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Image Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
