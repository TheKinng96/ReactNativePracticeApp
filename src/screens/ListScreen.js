import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const newList = [
    { name: "book 1", age: 20 },
    { name: "book 2", age: 45 },
    { name: "book 3", age: 32 },
    { name: "book 4", age: 27 },
    { name: "book 5", age: 53 },
    { name: "book 6", age: 30 },
    { name: "book 7", age: 21 },
    { name: "book 8", age: 18 },
    { name: "book 9", age: 31 },
  ]
  return (
    <FlatList 
      showsHorizontalScrollIndicator={false}
      keyExtractor= {key => newList.name}
      data={newList}
      renderItem={({ item }) => {
        return <Text style={style.textStyle}>{item.name} - {item.age}</Text>
      }}
    />
  )
}

const style = StyleSheet.create({
  textStyle = {
    marginVertical: 50
  }

})

export default ListScreen;