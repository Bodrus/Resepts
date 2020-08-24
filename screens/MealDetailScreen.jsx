import React, {ReactNode} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MEALS} from "../data/dummy-data";

const MealDetailScreen = (props): ReactNode => {
	const mealId = MEALS.find(el => el.id === props.navigation.getParam('mealId'));
	return (
		<View style={styles.screen}>
			<Text>{mealId.title}</Text>
			<Button title='Go Back to Categories' onPress={() => {
				props.navigation.popToTop(); // .replace(Name of screen) stack became empty(for login)
			}} />
		</View>
	);
}



MealDetailScreen.navigationOptions = (navigationData: any) => {
	const mealId = MEALS.find(el => el.id === navigationData.navigation.getParam('mealId'));
	return {
		headerTitle: mealId && mealId.title
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

export default MealDetailScreen;
