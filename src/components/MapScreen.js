import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LONG = -0.076132;
const LAT = 51.508530;

export class MapScreen = () => {
        return (<View style={{width:'100%', height: '100%'}}>
                <MapView
                    style={{width:'100%', height: '100%'}}
                    initialRegion={{
                        latitude: LAT,
                        longitude: LONG,
                    }}
                    >
                    <Marker
                        coordinate={{latitude: LAT,
                            longitude: LONG,}}
                        title='Prduct title'
                        description='Product description'
                        onPress={()=>{
                            const url='tel:+123456789';
                            Linking.openURL(url);
                        }}
                        />
                </MapView>
              </View>);
}

export const ConnectedMapScreen = connect()(MapScreen);