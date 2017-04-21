/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import IndexScreen from './js/index/index';
import Detail from './js/detail/detail';
import ViewPageDemo from './js/view-page-demo/view-page-demo';
import WebviewDemo from './js/webview-demo/webview-demo';
import DrawerAndroidDemo from './js/drawer-android-demo/drawer-android-demo';
import RnViewPager from './js/js-view-page/js-view-page'
import {
  StackNavigator,
} from 'react-navigation';
import ListViewDemo from './js/list-view-demo/list-view-demo';
const App = StackNavigator({
  Main: {
            screen: IndexScreen,
            navigationOptions: {
            // headerVisible: false,
        }
  },
  Detail: {screen: Detail},
  ViewPageDemo: {
      screen:ViewPageDemo
  },
  WebviewDemo:{
      screen:WebviewDemo
  },
  DrawerAndroidDemo:{
      screen:DrawerAndroidDemo
  },
  RnViewPager:{
      screen:RnViewPager
  }
  
})


export default class invest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <IndexScreen></IndexScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('invest', () => ListViewDemo);
