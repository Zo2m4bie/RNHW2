import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { openProductDetails } from '../actions/NavigationActions';
import { saveProduct } from '../actions/ProductListAction';
import { connect } from 'react-redux';
import { styles } from './styles';

export class ProductsListScreen extends Component {

    selectProduct = (product) => {
        this.props.saveProduct(product);
        this.props.openProductDetails();
    }
    keyExtractor = ({ key }) => key;

    renderItem = ({item}) => {
        return (<TouchableOpacity onPress={() => this.selectProduct({title: item.key})} >
                    <Image  style={{width: 48, height: 48}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <Text>{item.key}</Text>
                    <Image  style={{width: 48, height: 48}}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                </TouchableOpacity>);
    }

    render() {
        return <View>
            <View style={{height:100}}>
                <Text style={styles.productstitle}>
                    Products
                </Text>
            </View>
            <FlatList
                data={[
                    {key: 'Product 1'},
                    {key: 'Product 2'},
                    {key: 'Product 3'},
                    {key: 'Product 4'},
                    {key: 'Product 5'},
                    {key: 'Product 6'},
                    {key: 'Product 7'},
                    {key: 'Product 8'},
                ]}
                keyExtractor={this.keyExtractor}
                renderItem={ this.renderItem }
            />
        </View>;
    }
}

export const ConnectedProductsListScreen = connect(null, { openProductDetails, saveProduct })(ProductsListScreen);