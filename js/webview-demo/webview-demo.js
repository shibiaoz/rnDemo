import React, { Component } from 'react';
import {
    ActivityIndicator,
    WebView,
    StyleSheet,
    View,
    Linking,
    Text,
    Button,
    Picker,
    Slider,
} from 'react-native';
export default class WebviewDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language:"js"
        };
    }
    static navigationOptions = {
        title:'WebviewDemo'
    }
    openUrl() {
        let url = 'http://www.baidu.com';
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }
    render () {
        return (
            <View style={webViewStyle.viewWraper}>
                 <Picker
                        prompt="select...."
                        selectedValue={this.state.language}
                        onValueChange={(lang) => this.setState({language: lang})}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                <Slider
                    minimumValue={-1}
                    maximumValue={2}
                />
                <Text onPress={ () => {this.openUrl()}} style={webViewStyle.textStyle}>open url</Text>
                 <ActivityIndicator
                    size="large"
                    color="#0000ff"
                />
                <Button
                    title="Press Me"
                    accessibilityLabel="See an informative alert"
                    disabled={true}
                />
                <WebView style={webViewStyle.webViewWraper} 
                    source={{uri:'http://www.baidu.com'}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                >
                </WebView>
            </View>
        );
    }
}

const webViewStyle = StyleSheet.create({
    viewWraper:{
        flex:1,
        backgroundColor:'red'
    },
    textStyle:{
        backgroundColor:'green'
    },
    webViewWraper:{
         flex:1,
        backgroundColor:'blue'
    }
});