import { createStackNavigator } from 'react-navigation';
import { LoginScreen, ProductDetailsScreen, ProductsListScreen } from './';
import { SCREEN_NAMES } from './ScreenNames';

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
      initialRouteName: SCREEN_NAMES.PRODUCT_LIST
    }
);
