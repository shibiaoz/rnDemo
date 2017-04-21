import React,{ Component } from 'react';
import  ListItemStyle from './list-item.css.js';
import {
    View, 
    Text 
} from 'react-native';


export default class ListItem extends Component {
     constructor(props) {
        super(props);
    }
    render () {
        return (
            <View style={ListItemStyle.media}>
                <Text>{this.props.desc}</Text>
            </View>
        )
    }
}