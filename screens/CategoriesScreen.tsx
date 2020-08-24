import React, { ReactNode } from 'react';
import {
	FlatList,
	ListRenderItemInfo,
} from 'react-native';

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
			onSelect={() => {
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


export default CategoriesScreen;
