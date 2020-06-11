import React, { ReactNode } from 'react';
import { Button,
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = ({ navigation }) => (itemData) => {
	return (
		<TouchableOpacity
			style={styles.gritItem}
			onPress={() => navigation.navigate({ routeName: 'CategoriesMeals'})}
		>
			<View>
				<Text>{itemData.item.title}</Text>
			</View>
		</TouchableOpacity>
	);
}
const CategoriesScreen = (props): ReactNode => {
	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderGridItem(props)}
			numColumns={2}
		/>
		);
}

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
	headerStyle: {
		backgroundColor: Colors.primaryColor
	},
	headerTintColor: 'white'
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	gritItem: {
		margin: 15,
		flex: 1,
		height: 150
	}
});

export default CategoriesScreen;
