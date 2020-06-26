import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

const TextScreen = () => {
  const [name,setName] = useState('');

  return (
    <View style={style.container} >
      <Text style={style.title} >Your Name</Text>
      <TextInput 
        style={style.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
        />
      <Text>Hi, my name is {name}</Text>
      {name.length < 5 ? <Text>Password must be longer than 5 characters</Text>: null}
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth:1,
    padding: 5
  },
  title: {
    fontSize: 20
  },
  container: {
    margin:15
  }
})

export default TextScreen;