import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { openProductList } from '../actions/NavigationActions';
import { connect } from 'react-redux';
import { styles } from './styles';

export class LoginScreen extends Component {
    render() {
        console.log(styles);
        return <View style={{ flex:1, width: '100%' }}>
                    <View style={styles.titleLayout}>
                        <Text style={styles.welcome}>
                            Friday's shop
                        </Text>
                    </View>
                    <View style={styles.inputLayout}>
                        <TextInput 
                            style = {styles.input} 
                            autoCapitalize = "none"
                            placeholder="email"></TextInput>
                        <TextInput 
                            style = {styles.input} 
                            placeholder="password"
                            autoCapitalize = "none"></TextInput>
                        <Button 
                            title="Login" 
                            onPress={this.props.openProductList} />
                    </View>
                </View>;
    }
}

export const ConnectedLoginScreen = connect(null, { openProductList })(LoginScreen);
