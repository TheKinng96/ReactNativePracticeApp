import React, { useState } from 'react'
import { View, Text, FlatList,StyleSheet,Button } from 'react-native'

const ColorScreen = () => {
  const [colors, setColor] = useState([])

  return (
    <View>
      <Button 
        title = "Add a Color"
        onPress={()=>{
          setColor([...colors, randomRgb()])
        }}
      />
      
      <FlatList 
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item})=>{
          return <View 
        style={{ height: 100, width: 100, backgroundColor: item }} 
      />
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);

  return `rgb(${red},${green}, ${blue})`
}

const style = StyleSheet.create({

});

export default ColorScreen;