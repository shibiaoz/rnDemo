import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';

import Banner from '../banner/banner';
import ListItem from '../list-item/list-item';

var {height,width}=Dimensions.get('window')
// style 
import IndexStyle from './index.css.js';

import NewsListData from './data'; // 假数据

// import Detail from '../detail/detail';
export default class IndexScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(NewsListData)
        };
    }
    _onPressButton() {
        console.log('presss....')
    }
    static navigationOptions = {
        title: '投资有道',
    };
    endReach() {
        Alert.alert('alert title', 'alert message');
        console.log('滚动到底了。。。');
    }
    render() {
        let isHorizontal = true;
        const { navigate } = this.props.navigation;
        const initialSize = 10;
        return (
        <View style={styles.container}>
            <Banner></Banner>
            {/*<TouchableHighlight >
                <Text>Button TouchableHighlight</Text>
            </TouchableHighlight>
            <TouchableOpacity onPress={this._onPressButton}>
                <Text>Button TouchableOpacity</Text>
            </TouchableOpacity>*/}
            <ScrollView horizontal={false} style={styles.scrolWraper} showsHorizontalScrollIndicator={false}>
                <View style={styles.tabItem} >
                    <Text style={styles.tabItem}  onPress={ () => navigate('ListViewDemo', { name: 'ListViewDemo' })}>ListViewDemo</Text>
                </View>
                <View style={styles.tabItem}>
                    <Text style={styles.tabItem}  onPress={ () => navigate('ViewPageDemo',{name:'ViewPageDemo'})}> android ViewPageDemo</Text>
                </View>
                <Text style={styles.tabItem} onPress={ () => navigate('RnViewPager', { name: 'RnViewPager' })}>RnViewPager</Text>
                <Text style={styles.tabItem} onPress={ () => navigate('WebviewDemo',{name:'WebviewDemo'}) }>WebviewDemo</Text>
                <Text style={styles.tabItem} onPress={ () => navigate('DrawerAndroidDemo', { name: 'DrawerAndroidDemo' })}>DrawerAndroidDemo </Text>
                <Text style={styles.tabItem} onPress={this._onPressButton}>新手攻略</Text>
                <Text style={styles.tabItem} onPress={ () => navigate('Detail', { name: 'Jane' })}>宝友故事</Text>
                <Text style={styles.tabItem}>投资有道2</Text>
                <Text style={styles.tabItem}>企业版2</Text>
            </ScrollView>
            {/*<ListView
                dataSource={this.state.dataSource}
                onEndReachedThreshold={50}
                showsVerticalScrollIndicator={false}
                pageSize={10}
                initialListSize={15}
                onEndReached={this.endReach}
                renderRow={(rowData) =>  <ListItem {...rowData}/>}
            />*/}
        </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:0,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    borderColor:'blue',
    borderStyle:'solid',
    borderWidth:1
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
  scrolWraper: {
    //   height:100,
      flex:1,
      width:width
  },
  tabItem:{
      flex:1,
      width:width,
      height:50,
      justifyContent:'center',
    //   borderColor:'red',
    //   borderStyle:'dashed',
    //   borderWidth:1,
      borderRightWidth:0,
      backgroundColor:'#fffccc',
    //   textAlign:'center',
      alignItems:'center',
    //   textAlignVertical:'center',
  }
});
