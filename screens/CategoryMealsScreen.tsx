import React from 'react';
import {FlatList, ListRenderItemInfo, Platform, StyleSheet, Text, View} from 'react-native';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import {StackNavigationProp} from "react-navigation-stack/lib/typescript/src/vendor/types";
import {ROUTES} from "../navigation/MealsNavigator";
import MealItem from "../components/MealItem";


interface CategoryMealsScreenProps {
	navigation: StackNavigationProp<ROUTES>;
}

const renderSelectedMeals = (props: CategoryMealsScreenProps) =>
	(itemData: ListRenderItemInfo<Meal>): React.ReactElement => {
	const onPress = () => {
		props.navigation.navigate({
			routeName: 'MealDetail',
			params: {
				mealId: itemData.item.id
			}
		})
	}
		return (
		<MealItem
			title={itemData.item.title}
			imageUrl={itemData.item.imageUrl}
			duration={itemData.item.duration}
			complexity={itemData.item.complexity}
			affordability={itemData.item.affordability}
			onPressItem={onPress}
		/>
	)
}

const CategoryMealsScreen = (props: CategoryMealsScreenProps) => {
	const cartId = props.navigation.getParam('categoryId');
	const selectedMeals = MEALS.filter((el) => el.categoryIds.includes(cartId));
	return (
		<FlatList
			data={selectedMeals}
			renderItem={renderSelectedMeals(props)}
		/>
	);
}

CategoryMealsScreen.navigationOptions = (navigationData: any) => {
	const cartId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === cartId);
	return {
		headerTitle: selectedCategory && selectedCategory.title
	}
}

export default CategoryMealsScreen;
