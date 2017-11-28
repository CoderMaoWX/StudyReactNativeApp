
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class MTProductCell extends Component {

  render(){
    let { info } = this.props;
    let imageUrl = info.imageUrl.replace('w.h', '160.0');

    return (
        <TouchableOpacity style={styles.container} onPress={() =>{ this.props.onPress(info)}}>

          <Image style={styles.picStyle} source={{uri: imageUrl}} />

          <View style={styles.rightContainer}>
            <Text style={styles.titleStyle}> {info.title} </Text>
            <Text style={styles.descStyle}> {info.subtitle} </Text>
            <Text style={styles.priceStyle}> {info.price} </Text>
          </View>

        </TouchableOpacity>
    )
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  picStyle:{
    width: 60,
    height: 60,
    margin: 5,
  },

  rightContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    margin: 5,
  },

  titleStyle:{
    fontSize: 15,
    marginBottom: 10,
  },

  descStyle:{
    fontSize: 15,
    marginBottom: 10,
  },

  priceStyle:{
    fontSize: 15,
    marginBottom: 10,
  },

});
