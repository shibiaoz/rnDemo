// import { StyleSheet } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
var {height,width}=Dimensions.get('window')
const ListItemStyle = StyleSheet.create({
    media: {
        flex:1,
        flexDirection:'row',
        borderColor: 'blue',
        borderStyle: 'dashed',
        borderWidth: 1,
        marginBottom:10,
        height:60,
        width:width,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default ListItemStyle;