import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { openProductList } from '../actions/NavigationActions';
import { styles } from './styles';

export class ProductDetailsScreen extends Component {
    render() {
        return <View style={styles.productDetailsLayout}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image  style={{width: 50, height: 50}}
                    source={this.props.productImage}/>
                <Text style={styles.productDetailtsTitle}>{this.props.productTitle}</Text>
            </View>
            <View style={styles.productDetailsContentLayout}>
                <Text style={styles.productDetailtsContent}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <View style={{width: 110, marginTop: 10}}><Button onPress={this.props.openProductList} title="Product list" /></View>
            </View>
        </View>;
    }
}

const mapStateToProps = (state) => {
    return { productTitle: state.product.title, productImage: state.product.image };
};

export const ConnectedProductDetailsScreen = connect(mapStateToProps, { openProductList })(ProductDetailsScreen);