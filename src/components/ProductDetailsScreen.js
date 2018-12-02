import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export class ProductDetailsScreen extends Component {
    render() {
        return <View>
            <Image  style={{width: 50, height: 50}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
            <Text>Product 1</Text>
            <Text>Lorem ipsum</Text>
        </View>;
    }
}

export const ConnectedProductDetailsScreen = ProductDetailsScreen;