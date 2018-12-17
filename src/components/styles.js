import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    productItemName: {
        fontFamily: "vinchand",
        paddingStart: 10,
        fontSize: 20
    },
    productDetailtsContent: { 
        fontFamily: "vinchand",
        width: '70%' 
    },
    productDetailsReturnLayout: {
        width: 110, 
        marginTop: 10
    },
    productDetailtsTitle: { 
        fontFamily: "vinchand",
        fontSize: 30, 
        textAlign: 'center', 
        paddingStart: 10 
    },
    productDetailsContentLayout: { 
        paddingStart: 30, 
        justifyContent: 'flex-start' 
    },
    productDetailsLayout: { 
        width: '100%', 
        height: '100%', 
        paddingStart: 10, 
        paddingEnd: 10, 
        flexDirection: 'column', 
        justifyContent: 'center' 
    },
    productDetailsImageLayout: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    productDetailsImage: {
        width: 50, 
        height: 50
    },
    productListMainLayout: { 
        flexDirection: 'column', 
        width: '100%', 
        height: '100%' 
    },
    arrowstyle: {
        width: 14, 
        height: 14
    },
    iconstyle: {
        width: 24, 
        height: 24
    },
    productItemLayout: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        height: 48,
        alignItems: 'center', 
        paddingLeft: 10, 
        paddingRight: 10
    },
    productsLayout: { 
        flex: 1, 
        height: 100,
        justifyContent: "center", 
        alignItems: 'center' 
    },
    productstitle: {
      fontFamily: "vinchand",
      fontSize: 30,
      textAlign: 'center'
    },
    productList: { 
        flex: 1,
        width: '100%'
    },
    welcome: {
     fontFamily: "vinchand",
      fontSize: 30,
      textAlign: "center",
    },
    loginMainLayout: { 
        flex:1, 
        width: '100%' 
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
        flex: 1.5
    },
    input: {
       fontFamily: "vinchand",
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
        fontFamily: "vinchand",
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 48,
    },
  });
