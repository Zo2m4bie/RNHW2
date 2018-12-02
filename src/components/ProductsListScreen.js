import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { openProductDetails } from '../actions/NavigationActions';
import { connect } from 'react-redux';

export class ProductsListScreen extends Component {

    renderItem = ({item}) => {
        return (<TouchableOpacity onPress={this.props.openProductDetails}>
                    <Text>{item.key}</Text>
                </TouchableOpacity>);
    }

    render() {
        return <View>
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
                renderItem={ this.renderItem }
            />
        </View>;
    }
}

export const ConnectedProductsListScreen = connect(null, { openProductDetails })(ProductsListScreen);