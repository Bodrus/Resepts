import React, {ReactNode} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const MealDetailScreen = (props): ReactNode => {
	return (
		<View style={styles.screen}>
			<Text>MealDetailScreen</Text>
			<Button title='Go Back to Categories' onPress={() => {
				props.navigation.popToTop(); // .replace(Name of screen) stack became empty(for login)
			}} />
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

export default MealDetailScreen;
