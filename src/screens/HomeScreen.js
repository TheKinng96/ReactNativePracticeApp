import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Book Page" 
        style={styles.buttonComponent}
        />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="List" 
        style={styles.buttonComponent}
        />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Image Screen" 
        style={styles.buttonComponent}
        />
      <Button 
        onPress={() => navigation.navigate('Count')}
        title="Counters" 
        style={styles.buttonComponent}
        />
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Color" 
        style={styles.buttonComponent}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  cardComponent: {
    marginVertical: 10
  }
});

export default HomeScreen;
