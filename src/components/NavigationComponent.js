import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PRODUCT_LIST, PRODUCT_DETAILS } from '../reducer/types';

import { LoginScreen, ProductDetailsScreen, ProductsListScreen } from './';

export class NavigationComponent extends Component {
    
    render() {
        if(this.props.currentpage == PRODUCT_DETAILS) {
            return <ProductDetailsScreen />;
        } else if (this.props.currentpage == PRODUCT_LIST) {
            return <ProductsListScreen />;
        } else {
            return <LoginScreen />;
        }
    }

}

const mapStateToProps = (state) => {
    return { currentpage: state.nav.currentpage };
};

export const ConnectedNavigationComponent = connect(mapStateToProps, null)(NavigationComponent);