import { createStackNavigator } from 'react-navigation';

import { LoginScreen, ProductDetailsScreen, ProductsListScreen } from './';

export const StackNavigatorRoutes = createStackNavigator(
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
    }
);