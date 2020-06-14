import React from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import { CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
	const cartId = props.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === cartId);
	return (
		<View style={styles.screen}>
			<Text>CategoriesMealScreen</Text>
			<Text>{selectedCategory.title}</Text>
			<Button
				title='Go to MealDetail'
				onPress={() => props.navigation.navigate('MealDetail')}
			/>
			<Button
				title='Go back to Categories'
				onPress={() => props.navigation.pop()}
			/>
		</View>
	);
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
	const cartId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === cartId);
	return {
		headerTitle: selectedCategory.title
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

export default CategoryMealsScreen;
