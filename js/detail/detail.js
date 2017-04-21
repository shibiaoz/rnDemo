import React, {Component} from 'react';
import { View, Text,Button } from 'react-native';
export default class Detail extends Component {
    constructor(props) {
        super(props);
    }
    //  static navigationOptions = {
    //     title: '投资有道2',
    //     titleStyle: {
    //         textAlign: 'center'
    //     }
    // };
    // static navigationOptions = {
    //     header: ({ navigation }) => {
    //         return {
    //             title: `投资有道2 ${navigation.state.params.user}`,
    //         };
    //     }
    // }

    static navigationOptions = ({ navigation }) => ({
        title: `投资有道2`,
        titleStyle: {
            textAlign: 'center'
        },
        /*header: (
            <Button
                title={navigation.state.params.name}
                onPress={() => console.log('press')}
            />
        ),*/
        headerRight: (
            <Button
                title={navigation.state.params.name}
                onPress={() => console.log('press')}
            />
        ),
    });
    render () {
        return (
            <View style={{justifyContent:'center',flex: 1}}>
                <Text>详情</Text>
            </View>
        );
    }
}