import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    productstitle: {
      height: 100,
      fontSize: 30,
      textAlign: "center",
      flex: 1, 
      flexDirection: 'row',
    },
    welcome: {
     // fontFamily: "vinchand",
      fontSize: 30,
      textAlign: "center",
    },
    loginLayout: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    titleLayout: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    inputLayout: {
        flex: 1.5, 
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 48,
    },
  });
