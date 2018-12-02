import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { openProductList } from '../actions/NavigationActions';
import { connect } from 'react-redux';

export class LoginScreen extends Component {
    render() {
        return <View style={{flex: 1}}>
                    <Text>Friday's shop</Text>
                    <TextInput style={{ width: '100%' }} placeholder="email"></TextInput>
                    <TextInput style={{ width: '100%' }} placeholder="password"></TextInput>
                    <Button style={{ width: 50 }} title="Login" onPress={this.props.openProductList} />
                </View>;
    }
}

export const ConnectedLoginScreen = connect(null, { openProductList })(LoginScreen);