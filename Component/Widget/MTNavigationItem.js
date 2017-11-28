
import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class MTNavigationItem extends Component {

  render () {
    let icon = this.props.icon &&
        <Image style={[styles.icon, this.props.iconStyle]} source={this.props.icon}/>

    let title = this.props.title &&
        <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>

    return (
        <TouchableOpacity style={styles.touchStyle} onPress={this.props.onPress}>
          {icon}
          {title}
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  touchStyle:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  icon:{
    width: 27,
    height: 27,
    margin: 8,
  },
  title:{
    fontSize: 15,
    color: '#333333',
    margin: 8,
  },

});
