import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { openProductDetails } from '../actions/NavigationActions';
import { saveProduct, reinitList, loadNextPage, addToBasket } from '../actions/ProductListAction';
import { connect } from 'react-redux';
import { styles } from './styles';
import { SCREEN_NAMES } from './ScreenNames';
import { ProductListItem } from './ProductListItem';
import { ProductListHeader } from './ProductListHeader';

export class ProductsListScreen extends Component {

    goToProductDetails = () => {
        const { navigate } = this.props.navigation;
        navigate(SCREEN_NAMES.PRODUCT_DETAILS);
    }

    selectProduct = (product) => {
        this.props.saveProduct(product);
        this.goToProductDetails();
    }

    keyExtractor = ({ key }) => key;

    renderItem = ({item}) => {
        if(item.type === 'Header'){
            return <ProductListHeader />
        } else {
            return <ProductListItem item={item} addToBasket={()=> this.props.addToBasket(item)} onPress={() => this.selectProduct(item)} />
        }
    }

    componentDidMount() {
      this.props.reinitList();
    }

    loadNextPage = () => {
        if(this.props.productList.isThereMoreItems 
            && !this.props.productList.isLoadingNextPage 
            && !this.props.productList.isInitLoading){
            this.props.loadNextPage();
        }
    }

    showErrorDialog = () => {
        if(this.props.login.showLoginError) {
            return <NoInternetDialog tryAgain={this.props.loginAction} hideDialog={this.props.hideError} />
        }
        return <View />
    }
    render() {
        return <View style={styles.productListMainLayout}>
                <FlatList style={styles.productList}
                    onRefresh={this.props.reinitList}
                    refreshing={this.props.productList.isInitLoading}
                    data={this.props.productList.productList}
                    keyExtractor={this.keyExtractor}
                    renderItem={ this.renderItem }
                    onEndReachedThreshold={0.75}
                    onEndReached={this.loadNextPage}
                />
        </View>;
    }
}
const mapStateToProps = (state) => {
    return { productList: state.productList };
}

export const ConnectedProductsListScreen = connect(mapStateToProps, { openProductDetails, saveProduct, addToBasket, reinitList, loadNextPage })(ProductsListScreen);