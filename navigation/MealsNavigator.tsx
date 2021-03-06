import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// @ts-ignore
import CategoriesScreen from '../screens/CategoriesScreen';
// @ts-ignore
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
// @ts-ignore
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from "react-native";
import Colors from "../constants/Colors";

export enum ROUTES {
  Categories = "Categories",
  CategoryMeals = "CategoryMeals",
  MealDetail = "MealDetail",
}

// @ts-ignore
const MealsNavigator = createStackNavigator({
  [ROUTES.Categories]: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories'
    }
  },
  [ROUTES.CategoryMeals]: CategoryMealsScreen,
  [ROUTES.MealDetail]: MealDetailScreen
},
  {
    // mode: 'modal',
    // initialRouteName: 'MealDetail',
    defaultNavigationOptions: {
      headerTitle: 'Default Screen Name!!!',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
    }
  })

export default createAppContainer(MealsNavigator);
