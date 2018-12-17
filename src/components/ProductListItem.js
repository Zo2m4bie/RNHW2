import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export const ProductListItem = (props) => {
    let item = props.item;
    return (<TouchableOpacity style={styles.productItemLayout} onPress={() => this.selectProduct(item)} >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image  style={styles.iconstyle}source={item.image}/>
                    <Text style={styles.productItemName}>{item.key}</Text>
                </View>
                <Image  style={styles.arrowstyle} source={require('../../assets/images/chevron.png')}/>
            </TouchableOpacity>);
}