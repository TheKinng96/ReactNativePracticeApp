import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import ColorCounter from '../components/color'

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
      <View 
        style={{ height: 100, width: 100, backgroundColor: 'rgb(123,123,123)' }} 
      />
    </View>
  )
}

const style = StyleSheet.create({

})

export default SquareScreen;