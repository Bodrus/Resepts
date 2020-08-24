import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import { MealType } from "../models/meal";

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 200,
    overflow: "hidden",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 10
  },
  header: {
    width: '100%',
    height: '85%'
  },
  titleContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
    textAlign: "center",
    color: 'white',
    textTransform: "uppercase",
    fontFamily: 'open-sans-bold',
    fontSize: 20
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
    justifyContent: "flex-end"
  },
  footer: {
    backgroundColor: '#e3e3e3',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width: '100%',
    height: '15%',
    paddingHorizontal: 10
  },
  footerContent: {
    fontFamily: 'open-sans-bold'
  }
});

interface MealItemProps extends MealType {
  onPressItem: () => void
};

const MealItem = (props: MealItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPressItem}>
        <View style={styles.header}>
          <ImageBackground source={{uri: props.imageUrl}} style={styles.backgroundImg}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerContent}>{props.duration}m</Text>
          <Text style={styles.footerContent}>{props.complexity?.toUpperCase()}</Text>
          <Text style={styles.footerContent}>{props.affordability?.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default MealItem;