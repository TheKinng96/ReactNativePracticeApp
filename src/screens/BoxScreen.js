import React, { useState } from 'react'
import { View, Text, FlatList,StyleSheet,Button } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={style.viewStyle} >
      <Text style={style.box1} />
      <Text style={style.box2} />
      <Text style={style.box3} />
    </View>
  )
}

const style = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor:'black',
    display:"flex",
    flexDirection: "row",
    height:200
  },
  box1: {
    backgroundColor: 'darksalmon',
    flex:1,
    height:100
  },
  box2: {
    backgroundColor: 'darkseagreen',
    flex:1,
    height:100,
    top:100
  },
  box3: {
    backgroundColor: 'mediumorchid',
    flex:1,
    height:100

  }

})

export default BoxScreen;