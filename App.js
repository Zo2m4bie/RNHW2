/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {Platform, StyleSheet, Text, View} from 'react-native';
import thunk from 'redux-thunk';
import reducer from './src/reducer';
import { routes } from './src/components';
import { createAppContainer } from 'react-navigation';
import styles from './style';
import SplashScreen from 'react-native-splash-screen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { Sentry } from 'react-native-sentry';

Sentry.config('https://164229acbb9249afae94118fc3634d4d@sentry.io/1395547').install();


// type Props = {};

const ConnectedSwitch = createAppContainer(routes);
const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ConnectedSwitch />
        </View>
      </Provider>
    );
  }
}
