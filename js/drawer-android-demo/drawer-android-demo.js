import React, { Component } from 'react';
import {
    DrawerLayoutAndroid,
    View,
    Text,
    Button,
    Modal,
    Picker,
} from 'react-native';
export default class DrawerAndroidDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            language:'js'
        };
    }
    static navigationOptions = {
        title:'WebviewDemo'
    }
    _setModalVisible(visible){
	    this.setState({modalVisible: visible});
    };
    render () {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                    <Text onPress={ () => {this.setState({modalVisible:true});}}>open modal!</Text>
                    <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {alert("Modal has been closed."); this.setState({modalVisible:false});}}>   
                        <View>
                            <Text> in modal</Text>
                            <Button title="close modal" onPress={ () => { this._setModalVisible(false); }} />
                        </View>
                    </Modal>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

