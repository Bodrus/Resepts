import React, { ReactNode } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ListRenderItemInfo,
	Platform
} from 'react-native';

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { ROUTES } from "../navigation/MealsNavigator";
// @ts-ignore
import CategoryGridTile from '../components/CategoryGridTile';

interface Props {
	navigation: StackNavigationProp<ROUTES>;
}

const renderGridItem = (props: Props) =>
	(itemData: ListRenderItemInfo<any>): React.ReactElement => {
	return (
		<CategoryGridTile
			title={itemData.item.title}
			color={itemData.item.color}
			press={() => {
				props.navigation.navigate(
					'CategoryMeals', {
						categoryId: itemData.item.id
					})
			}}
		/>
	)
}
const CategoriesScreen = (props: Props): ReactNode => {
	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderGridItem(props)}
			numColumns={2}
		/>
	);
}

CategoriesScreen.navigationOptions = {
	headerTitle: '!! Meal Categories !!'
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
