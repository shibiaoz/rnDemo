/**
 * 
 * rn-viewpager demo
 * https://github.com/zbtang/React-Native-ViewPager
 */
import {StyleSheet, View, Text,Alert,ListView,RefreshControl,} from 'react-native';
import React, {Component} from 'react';
import {    
    PagerTabIndicator, IndicatorViewPager, 
    PagerTitleIndicator, PagerDotIndicator,
} from 'rn-viewpager';
import Banner from '../banner/banner';
import NewsListData,{NewsListData2} from '../index/data'; // 假数据


class Article extends  Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return(
            <View style={{flexDirection:'row',flex:1,height:100,}}>
                <View style={{ flex:1,flexDirection:'column'}}>
                    <Text>{this.props.desc}</Text>
                    <Text>{this.props.author}</Text>
                    <View>
                        <Text>支持：{this.props.supportNum}</Text>
                        <Text>评论：{this.props.comment}</Text>
                    </View>
                </View>
                <View style={{width:100}}>
                    <Text>图片</Text>
                </View>
                
            </View>
        )
    }
}

class ArticleList extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    constructor(props) {
        super(props);
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.NewsListData = NewsListData;
        this.state = {
            isRefreshing:true,
            dataSource: this.ds.cloneWithRows(NewsListData)
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isRefreshing:false
            });
        },1000);
        
    }

    endReach() {
        var that = this;
        this.setState({
            dataSource:that.ds.cloneWithRows(this.NewsListData.concat(NewsListData2))
        });
    }
    _onRefresh() {
        this.setState({
            isRefreshing:true
        });
         setTimeout(() => {
            this.setState({
                isRefreshing:false
            });
        },1000);
    }
    render() {
        return (
            <View>
                 <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="正在加载中。。。。"
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }
                    dataSource={this.state.dataSource}
                    onEndReachedThreshold={50}
                    showsVerticalScrollIndicator={false}
                    initialListSize={5}
                    onEndReached={this.endReach.bind(this)}
                    renderRow={(rowData) =>  <Article {...rowData}/>}
                 />
            </View>
        );
    }
}


export default class RnViewPager extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage:0
        }
    }

    _renderDotIndicator() {
         return <PagerDotIndicator pageCount={3} />;
    }
     _renderTabIndicator() {
       
    }
    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['全部', '官方', '攻略','理财']} style={{height:60, paddingTop:0}}/>;
    }
    _onPageSelected(e) {
        this.setState({
            currentPage:e.position
        })
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Banner></Banner>
                <IndicatorViewPager
                    onPageSelected={this._onPageSelected.bind(this)}
                    style={{flex:1,flexDirection:'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page 1</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page 2</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                    <View style={{backgroundColor:'cadetblue'}}>
                         <Text>page 4</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}