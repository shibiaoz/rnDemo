import React ,{ Component } from 'react';
import { 
    View, 
    Text, 
    ToastAndroid, 
    ScrollView,
    ListView,
    ViewPagerAndroid, 
    StyleSheet, 
    Dimensions,
    RefreshControl,
    Alert } from 'react-native';
var {height,width}=Dimensions.get('window')
import Banner from '../banner/banner';
import ListItem from '../list-item/list-item';
import NewsListData from '../index/data'; // 假数据
export default class ViewPagerDemo extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            clickNum:0,
            isRefreshing:false,
            dataSource: ds.cloneWithRows(NewsListData)
        }
    }
    static navigationOptions = {
        title: 'ViewPagerAndroid Demo'
    }
    goMyPage (page){
        // if (this.state.animationsAreEnabled) {
        //     this.viewPager.setPage(page);
        // } else {
        //     this.viewPager.setPageWithoutAnimation(page);
        // }
        this.viewPager.setPage(page);
    }
    onPageScroll(e) {
        //  this.setState({progress: e.nativeEvent});
    }
    onPageScrollStateChanged(state) {
        // this.setState({scrollState: state});
    }
    onPageSelected(e) {
        // this.setState({page: e.nativeEvent.position});
    }
    _onRefresh() {
         this.setState({isRefreshing: true});
         var that = this;
         setTimeout( () =>{
            that.setState({isRefreshing: false});
         }, 500)
    }
    render() {
        return (
                <ScrollView 
                    /*removeClippedSubviews={false}*/
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
                    style={{flex:1,backgroundColor:'#93af99',flexDirection:'column'}}>
                    <Banner></Banner>
                    <ScrollView  style={styles.tabScroll} contentContainerStyle={{alignItems:'center'}} horizontal={true}>
                        <View style={styles.tabScrollSubView}>
                            <Text style={{color:"black"}} onPress={ () => { this.goMyPage(0) } }>全部</Text>
                        </View>
                        <View  style={styles.tabScrollSubView}>
                            <Text  style={{color:"black"}} onPress={ () => { this.goMyPage(1)} }>官方</Text>
                        </View>
                        <View  style={styles.tabScrollSubView}>
                            <Text  style={{color:"black"}} onPress={ () => { this.goMyPage(2)} }>攻略</Text>
                        </View>
                        <View  style={styles.tabScrollSubView}>
                            <Text  style={{color:"black"}} onPress={ () => { this.goMyPage(3)} }>理财</Text>
                        </View>
                    </ScrollView>
                    <ViewPagerAndroid
                            style={{backgroundColor:'blue',flex:1,height:200}}
                            onPageScroll={ (e)=> {this.onPageScroll(e)}}
                            onPageScrollStateChanged={this.onPageScrollStateChanged}
                            onPageSelected={this.onPageSelected}
                            ref={ viewPager => { this.viewPager = viewPager; }}
                            initialPage={0}>

                            <View style={styles.pageStyle}>
                                <ListView
                                    dataSource={this.state.dataSource}
                                    stickyHeaderIndices={[1]}
                                    onEndReachedThreshold={50}
                                    showsVerticalScrollIndicator={false}
                                    pageSize={10}
                                    initialListSize={15}
                                    onEndReached={this.endReach}
                                    renderRow={(rowData) =>  <ListItem {...rowData}/>}
                                />
                            </View>
                            
                            <View style={styles.pageStyleSecond}>
                                <Text>官方</Text>
                            </View>

                            <View style={styles.pageStyle}>
                                <Text>攻略</Text>
                            </View>

                            <View style={styles.pageStyle}>
                                <Text>理财</Text>
                            </View>
                    </ViewPagerAndroid>
                </ScrollView>
            
        );
    }
}
const styles = StyleSheet.create({
    tabScroll:{
        height:50,
        display:'flex',
        backgroundColor:'#2cbe4e',
    },
    tabScrollSubView:{
        width:100,
        display:'flex',
        alignItems:'center'
    },
    viewPager:{
        backgroundColor:'red',
        // borderColor:'red',
        // borderStyle:'dashed',
        // borderWidth:1,
        // height:200,
        flex:1,
    },
    pageStyle: {
        // alignItems: 'center',
        // padding: 20,
        flex:1,
        backgroundColor:'green',
        // flex:1
    },
    pageStyleSecond:{
         flex:1,
         backgroundColor:'blue',
    }
});