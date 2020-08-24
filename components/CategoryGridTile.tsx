import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";

const styles = StyleSheet.create({
  gritItem: {
    margin: 15,
    flex: 1,
    height: 150,
    borderRadius: 10,
    overflow: "hidden"
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

export interface CategoryGridTileProps {
  title: string;
  color: string;
  onSelect: () => void
}

const CategoryGridTile = (props: CategoryGridTileProps) => {
  let TouchableComp: any = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gritItem}>
      <TouchableComp
        style={{ flex: 1 }}
        onPress={props.onSelect}
      >
        <View style={[styles.container, { backgroundColor: props.color }]}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableComp>
    </View>
  );
}

export default CategoryGridTile;