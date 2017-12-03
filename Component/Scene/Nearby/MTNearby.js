/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class OKMore extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
        <TouchableOpacity style={styles.searchBar}>
          <Image source={{uri: 'search_icon'}} style={styles.searchIcon} />
          <Text style={{color:'#777777', fontSize: 12}}>找附近的吃喝玩乐</Text>
        </TouchableOpacity>
    ),
    headerLeft: (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Image style={{ width: 13, height: 16 }} source={{uri:'icon_food_merchant_address'}} />
          <Text style={{ fontSize: 15, color: 'white' }}> 深圳 宝安</Text>
        </TouchableOpacity>
    ),
    headerStyle: { backgroundColor: MTColor.theme },
  });

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Welcome to React Native!
          </Text>
        </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchBar: {
    width: MTFrame.width * 0.65,
    height: 30,
    borderRadius: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
});
