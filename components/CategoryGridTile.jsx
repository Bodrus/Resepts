import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity
      style={styles.gritItem}
      onPress={props.press}
    >
      <View style={[styles.container, {backgroundColor: props.color}]}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gritItem: {
    margin: 15,
    flex: 1,
    height: 150
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    padding: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
})

export default CategoryGridTile;