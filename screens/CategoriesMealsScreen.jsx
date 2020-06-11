import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CategoriesMealScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>CategoriesMealScreen</Text>
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
});

export default CategoriesMealScreen;
