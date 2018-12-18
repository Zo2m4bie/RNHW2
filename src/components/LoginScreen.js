import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { openProductList } from '../actions/NavigationActions';
import { changeEmail, changePassword, resetLoginData, loginAction, hideError } from '../actions/LoginActions';
import { connect } from 'react-redux';
import { styles } from './styles';
import { SCREEN_NAMES } from './ScreenNames';
import { NoInternetDialog } from './NoInternetDialog';
export class LoginScreen extends Component {

    componentDidUpdate() {
        if(this.props.login.userLogedIn) {
            const { navigate } = this.props.navigation;
            navigate(SCREEN_NAMES.PRODUCT_LIST);
        }
    }
    showErrorDialog = () => {
        if(this.props.login.showLoginError) {
            return <NoInternetDialog tryAgain={this.props.loginAction} hideDialog={this.props.hideError} />
        }
        return <View />
    }
    render() {
        return <View style={styles.loginMainLayout}>
                    {this.showErrorDialog()}
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
                            onPress={this.props.loginAction} />
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
    loginAction, 
    hideError,
})(LoginScreen);
