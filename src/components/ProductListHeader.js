import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const ProductListHeader = (props) => {
    return (<View style={styles.productsLayout}>
                <Text style={styles.productstitle}>
                    Products
                </Text>
            </View>);
}