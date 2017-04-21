import React, {Component} from 'react';
import { View, Text,Button,ListView,ScrollView } from 'react-native';
import { NewsListData2 } from '../index/data';
export default class ListViewDemo extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(NewsListData2),
        };
        setTimeout( () => {
            NewsListData2[0].desc="=====";
            this.setState({
                 dataSource: ds.cloneWithRows(NewsListData2),
            });

        },200)
    }

    _onEndReached(){
        console.log('_onEndReached');
    }

    _renderRow(rowData,sectionID, rowID, highlightRow) {
        // if( rowID == 2) {
        //     return this._renderRowScrollComponent();
        // }
        return (
            <View style={{height:60,borderColor:'red',borderStyle:'solid',borderWidth:1,justifyContent:"center",}}>
                 <Text>{rowID}---{rowData.desc}</Text>
            </View>
        )
    }
    _renderScrollComponent() {
        // renderScrollComponent 没明白怎么使用的。。。
        return (
            <ScrollView horizontal={true}>
                <View style={{height:60,width:200,borderColor:'green',borderStyle:'solid',borderWidth:1,justifyContent:"center",}}>
                    <Text>1111111111</Text>
                </View>
                <View style={{height:60,width:200,borderColor:'green',borderStyle:'solid',borderWidth:1,justifyContent:"center",}}>
                    <Text>222222</Text>
                </View>
                <View style={{height:60,width:200,borderColor:'green',borderStyle:'solid',borderWidth:1,justifyContent:"center",}}>
                    <Text>333333333</Text>
                </View>
            </ScrollView>
        )
    }

    _renderRowScrollComponent() {
        return (
            <ScrollView horizontal={true}>
                <View style={{height:60,width:200,borderColor:'green',borderStyle:'solid',borderWidth:1,justifyContent:"center",}}>
                    <Text>---------</Text>
                </View>
                <View style={{height:60,width:200,borderColor:'green',borderStyle:'solid',borderWidth:1,justifyContent:"center",}}>
                    <Text>==========</Text>
                </View>
                <View style={{height:60,width:200,borderColor:'green',borderStyle:'solid',borderWidth:1,justifyContent:"center",}}>
                    <Text>333333333</Text>
                </View>
            </ScrollView>
        )
    }
    _renderFooter() {
        // console.log('_renderFooter...')
        return (
            <View style={{height:60,backgroundColor:'green'}}></View>
        )
    }
    _renderHeader() {
        //  console.log('_renderHeader...')
        return (
            <View style={{height:60,backgroundColor:'blue'}}></View>
        )
    }
    _renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={{height:60,backgroundColor:'yellow'}}>
                 <Text>sticky</Text>
            </View>
        )
    }
    render () {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 100,justifyContent:"center"}}>
                      <Text>详情</Text>
                </View>
               <ListView 
                    initialListSize={3}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={50}
                    renderSectionHeader={this._renderSectionHeader}
                    onChangeVisibleRows={ (visibleRows, changedRows) => {console.log(visibleRows, changedRows)}}
                    dataSource={this.state.dataSource}
                    renderHeader={this._renderHeader}
                    renderFooter={this._renderFooter}
                    renderRow={(rowData,sectionID, rowID, highlightRow) => { return this._renderRow(rowData,sectionID, rowID, highlightRow)}}
               />
            </View>
        );
    }
}