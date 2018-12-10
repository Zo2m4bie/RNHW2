import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { openProductList } from '../actions/NavigationActions';
import { changeEmail, changePassword, resetLoginData, loginAction } from '../actions/LoginActions';
import { connect } from 'react-redux';
import { styles } from './styles';

export class LoginScreen extends Component {
    
    goToProductList = () => {
        //this.props.loginAction();
         const { navigate } = this.props.navigation;
         navigate("ProductsList");
    }

    render() {
        return <View style={styles.loginMainLayout}>
                    <View style={styles.titleLayout}>
                        <Text style={styles.welcome}>
                            Friday's shop
                        </Text>
                    </View>
                    <View style={styles.inputLayout}>
                        <TextInput 
                            value = {this.props.login.email}
                            style = {styles.input} 
                            onChangeText={(text) => this.props.changeEmail(text)}
                            autoCapitalize = "none"
                            placeholder="email"></TextInput>
                        <TextInput 
                            value = {this.props.login.password}
                            secureTextEntry={true}
                            style = {styles.input} 
                            onChangeText={(text) => this.props.changePassword(text)}
                            placeholder="password"
                            autoCapitalize = "none"></TextInput>
                        <Button 
                            title="Login" 
                            onPress={this.goToProductList} />
                    </View>
                </View>;
    }
}

const mapStateToProps = ({ login }) => ({ login });

export const ConnectedLoginScreen = connect(mapStateToProps, { 
    openProductList, 
    changeEmail, 
    changePassword, 
    resetLoginData , 
    loginAction
})(LoginScreen);
