import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCT_LIST, PRODUCT_DETAILS } from '../reducer/types';

import { LoginScreen, ProductDetailsScreen, ProductsListScreen } from './';

export class NavigationComponent extends Component {
    
    render() {
        console.log(this.props);
        if(this.props.nav.currentpage == PRODUCT_DETAILS) {
            return <ProductDetailsScreen />;
        } else if (this.props.nav.currentpage == PRODUCT_LIST) {
            return <ProductsListScreen />;
        } else {
            return <LoginScreen />;
        }
    }

}

const mapStateToProps = (state) => {
    
    console.log(state);
    return state;
};

export const ConnectedNavigationComponent = connect(mapStateToProps, null)(NavigationComponent);