import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { openProductDetails } from '../actions/NavigationActions';
import { saveProduct } from '../actions/ProductListAction';
import { connect } from 'react-redux';
import { styles } from './styles';

export class ProductsListScreen extends Component {
    goToProductDetails = () => {
        const { navigate } = this.props.navigation;
        navigate("ProductDetails");
    }
    selectProduct = (product) => {
        this.props.saveProduct(product);
        this.goToProductDetails();
    }
    keyExtractor = ({ key }) => key;

    renderItem = ({item}) => {
        return (<TouchableOpacity style={styles.productItemLayout} onPress={() => this.selectProduct(item)} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image  style={styles.iconstyle}source={item.image}/>
                        <Text style={styles.productItemName}>{item.key}</Text>
                    </View>
                    <Image  style={styles.arrowstyle} source={require('../../assets/images/chevron.png')}/>
                </TouchableOpacity>);
    }

    render() {
        return <View style={styles.productListMainLayout}>
                <View style={styles.productsLayout}>
                    <Text style={styles.productstitle}>
                        Products
                    </Text>
                </View>
                <FlatList style={styles.productList}
                    data={[
                        {key: 'Product 1', image: require('../../assets/images/1.png')},
                        {key: 'Product 2', image: require("../../assets/images/2.png")},
                        {key: 'Product 3', image: require("../../assets/images/3.png")},
                        {key: 'Product 4', image: require("../../assets/images/4.png")},
                        {key: 'Product 5', image: require("../../assets/images/5.png")},
                        {key: 'Product 6', image: require("../../assets/images/6.png")},
                        {key: 'Product 7', image: require("../../assets/images/7.png")},
                        {key: 'Product 8', image: require("../../assets/images/8.png")},
                    ]}
                    keyExtractor={this.keyExtractor}
                    renderItem={ this.renderItem }
                />
        </View>;
    }
}

export const ConnectedProductsListScreen = connect(null, { openProductDetails, saveProduct })(ProductsListScreen);