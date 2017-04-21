import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
var {height,width}=Dimensions.get('window')
/**
 * image  response
 * 1. set width and height by Dimensions with and height
 * 2. set resizeMode eq contain and set image height 
 */
const BannerStyle = StyleSheet.create({
    banner: {
        // height:150,
        // width:10,
        width:width,
        marginTop:0,
        height:(300/750)*width
    }
});
export default BannerStyle;