// import {Component} from 'react';
import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import bannerImg from './banner.png';
import BannerStyle from './banner.css.js';
const imgUri = 'http://officalcms.b0.upaiyun.com/2017/0414/20170414043046159.png';
export default class Banner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Image source={{uri:'http://officalcms.b0.upaiyun.com/2017/0414/20170414043046159.png'}} resizeMode={Image.resizeMode.contain} style={BannerStyle.banner} />
            </View>
            
        );
    }
}