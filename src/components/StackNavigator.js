import { createStackNavigator, createAppContainer } from 'react-navigation';

import { LoginScreen, ProductDetailsScreen, ProductsListScreen } from './';

export const StackNavigator = createAppContainer(createStackNavigator(
    {
        Login: {
            screen: LoginScreen
        },
        ProductDetails: {
            screen: ProductDetailsScreen
        },
        ProductsList: {
            screen: ProductsListScreen
        }
    },
    {
        initialRouteName: 'Login',
    }
));