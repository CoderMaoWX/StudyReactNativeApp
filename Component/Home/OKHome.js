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

export default class OKHome extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: global.mainTheme.theme},
    headerTitle: (
      <TouchableOpacity style={styles.searchBarStyle}>
        <Image source={{uri:'search_icon'}} style={styles.searchIconStyle}/>
        <Text style={styles.instructions}> 一点点 </Text>
      </TouchableOpacity>
    ),
    // headerRight: (
    //
    // ),

  });


  onTouchAction = () =>{
    // alert("测试一下");
    this.props.navigation.navigate('detail');
  };


  render() {
    return (
        <View style={styles.container}>
          <Image style={{width:50, height:50, backgroundColor:'red'}} source={{uri:'weixin'}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarStyle: {
    width: global.constants.width * 0.7,
    height: 30,
    borderRadius: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
  },

  searchIconStyle: {
    width: 20,
    height: 20,
    margin: 5,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
