import { createStackNavigator } from 'react-navigation';

import { LoginScreen, ProductDetailsScreen, ProductsListScreen } from './';

export const StackNavigatorRoutes = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                title: "Login"
            }
        },
        ProductDetails: {
            screen: ProductDetailsScreen,
            navigationOptions: {
                title: "Product Details"
            }
        },
        ProductsList: {
            screen: ProductsListScreen,
            navigationOptions: {
                title: "Products List",
                headerLeft: null,
                gesturesEnabled: false,
            }
        }
    },
    {
      initialRouteName: 'Login'
    }
);