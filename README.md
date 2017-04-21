- react-navigation ^1.0.0-beta.7 有bug 需要安装master,git+https://github.com/react-community/react-navigation.git ,2017.04.13



## step by step 

### emulator
- emulator -help
- emulator -list-avds
- emulator -avd Nexus_5_API_23

## ListView
- showsVerticalScrollIndicator={false} 不展示滚动条
- onEndReachedThreshold={50} 距离底部50 px 触发onEndReached 这个函数

## dp and px 
- dp = PixelRatio.get() * px 


## ViewPageAndroid
- onPageScrollStateChanged [dragging,settling,idle]
- onPageScroll (e) => e.nativeElement {
    offset: 0, position: 0
}
- onPageSelected (e) => e.nativeEvent.position page的位置

## Image 
- image uri 必须设置宽度和高度


## react
- default props 
``` 
static defaultProps = {

}
```
- props types
```
static propTypes = {
    propsName: PropTypes.number.isRequied,
}
```
- defualt state 
```
1 . in constructors  this.state = {}    
2. 
state = {};
constructor(){

}
```
- change state
```
this.state.nameSate = 'sd''
this.state = {

}
this.setState({

}); -->extend state
```

## react ref
- 指向组件的引用