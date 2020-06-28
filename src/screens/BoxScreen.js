import React, { useState } from 'react'
import { View, Text, FlatList,StyleSheet,Button } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={style.viewStyle} >
      <Text style={style.textStyle} >Box 1</Text>
      <Text style={style.textStyle} >Box 2</Text>
      <Text style={style.textStyle} >Box 3</Text>
    </View>
  )
}

const style = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor:'black',
    alignItems:"center"
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'blue',
  }
})

export default BoxScreen;