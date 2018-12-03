import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { openProductList } from '../actions/NavigationActions';

export class ProductDetailsScreen extends Component {
    render() {
        return <View>
            <Image  style={{width: 50, height: 50}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
            <Text>{this.props.productTitle}</Text>
            <Text>Lorem ipsum</Text>
            <Button onPress={this.props.openProductList} title="Product list" />
        </View>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { productTitle: state.product.title };
};

export const ConnectedProductDetailsScreen = connect(mapStateToProps, { openProductList })(ProductDetailsScreen);