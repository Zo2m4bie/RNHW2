import React, { Component } from 'react';
import { View, TextInput, Button, Text, Animated, Easing, Vibration } from 'react-native';
import { openProductList } from '../actions/NavigationActions';
import { changeEmail, changePassword, resetLoginData, loginAction, hideError } from '../actions/LoginActions';
import { connect } from 'react-redux';
import { styles } from './styles';
import { SCREEN_NAMES } from './ScreenNames';
import { NoInternetDialog } from './NoInternetDialog';
import { getLoginAndPassword } from '../storage';

const DURATION = 500;

export class LoginScreen extends Component {    

    constructor(){
        super();
        this.springValue = new Animated.Value(0.3);
        this.rotateInterpolate = new Animated.Value(0);
    }
    
    login = () => {
        this.rotate();
        this.props.loginAction();
    }

    componentDidMount() {
        getLoginAndPassword().then(emailPass => {
            if(emailPass.email && emailPass.password) {
                this.props.changeEmail(emailPass.email);
                this.props.changePassword(emailPass.password);
                this.login();
            }
        });
    }
    componentDidUpdate() {
        if(this.props.login.userLogedIn) {
            const { navigate } = this.props.navigation;
            navigate(SCREEN_NAMES.PRODUCT_LIST);
        }
    }
    showErrorDialog = () => {
        if(this.props.login.showLoginError) {
            Vibration.vibrate(DURATION);
            return <NoInternetDialog tryAgain={this.props.loginAction} hideDialog={this.props.hideError} />
        }
        return <View />
    }

    showEmptyFieldError = () => {
        if(this.props.login.oneOfFieldsEmpty){ //showProgress
            Vibration.vibrate(DURATION);
            return <Text style={styles.emptyFieldsError}>Some fields are empty!</Text>;
        }
        return <View />
    }

    showNetworkErrorDialog =() => {
        if(this.props.login.noInternetError){
            Vibration.vibrate(DURATION);
            return <NoInternetDialog tryAgain={this.props.loginAction} hideDialog={this.props.hideError} />
        }
        return <View />;
    }
    
    rotate = () => {
        this.rotateInterpolate = new Animated.Value(0);
        Animated.timing(this.rotateInterpolate, 
            {
              toValue: 1,
              duration: 2000,
              easing: Easing.linear
            }).start();
    }

    spring = () => {
        this.springValue.setValue(0.3)
        Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1,
            tension: 1
          }
        ).start()
    }

    componentDidMount(){
        this.spring();
        this.rotateInterpolate.setValue(0);
    }

    render() {
        let rotateValue = this.rotateInterpolate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
        });
        return <View style={styles.loginMainLayout}>
                    {this.showErrorDialog()}
                    <View style={ styles.titleLayout }>
                        <Animated.View style={{ transform: [{scale: this.springValue}]}}>
                            <Text style={styles.welcome}>
                                Friday's shop
                            </Text>
                        </Animated.View>
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
                        {this.showEmptyFieldError()}
                        <Animated.View style={{ transform: [{rotate: rotateValue}] }}>
                            <Button 
                                title="Login" 
                                onPress={this.login} />
                        </Animated.View>
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
