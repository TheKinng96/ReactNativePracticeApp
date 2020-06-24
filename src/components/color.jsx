import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
        <Button 
          title={`More ${color}`}
        />
        <Button 
          title={`Less ${color}`}
        />
    </View>
  )
}

const style = StyleSheet.create({})

export default ColorCounter;