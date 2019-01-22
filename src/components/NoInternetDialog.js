import React, {Component} from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
export class NoInternetDialog extends Component {

    tryAgain = () => {
        this.props.hideDialog();
        this.props.tryAgain();
    }

    render() {
        return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}>
                <View style={styles.modalWindowLayout}>
                    <View style={styles.modalWindow}>
                        <Text style={{padding: 10}}>
                            Sorry, there's some problem with internet connection. Please try a bit later
                        </Text>
                        <TouchableHighlight style={styles.modalButtonStyle}
                            onPress={this.tryAgain}>
                            <Text>Try again</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{padding: 10, alignItems: 'center'}}
                            onPress={this.props.hideDialog}>
                            <Text>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>);
    }
}