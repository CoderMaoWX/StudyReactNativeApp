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
  FlatList,
  TouchableOpacity
} from 'react-native';

import MTNavigationItem from '../../Widget/MTNavigationItem'
import MTProductCell from '../../Widget/MTProductCell'

export default class OKHome extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: MTColor.theme},
    headerTitle: (
      <TouchableOpacity style={styles.searchBarStyle} onPress={() => { alert('搜索附近美食')}}>
        <Image source={{uri:'search_icon'}} style={styles.searchIconStyle}/>
        <Text style={styles.searchTitleStyle}>搜索</Text>
      </TouchableOpacity>
    ),
    headerLeft: (
        <MTNavigationItem
            title='深圳'
            titleStyle={{ color: 'white' }}
            //注意：在static方法中不能调用this,需要在componentDidMount方法中重新设置调用的方法
            onPress={()=> navigation.state.params.navigatePress()}
        />
    ),
    headerRight: (
        <MTNavigationItem
            icon={{uri: 'icon_navigationItem_message_white'}}
            onPress={()=> navigation.state.params.navigatePress()}
        />
    ),
  });

  rightItemAction = () => {
    this.props.navigation.navigate('productDetail');
  };

  separator = () => {
    return <View style={{height:1,backgroundColor:'#999999'}}/>;
  };

  keyExtractor = (item: Object, index: number) => {
    return item.id
  };

  renderItemView = (item) => {
    return (
        <TouchableOpacity style={styles.cellStyle} >

          <Image style={styles.picStyle} source={{uri: item.imageUrl.replace('w.h', '160.0')}} />
          <View style={styles.rightContainer}>
            <Text style={styles.titleStyle}> {item.title} </Text>
            <Text style={styles.descStyle}> {item.subtitle} </Text>
            <Text style={styles.priceStyle}> {item.price} </Text>
          </View>
        </TouchableOpacity>
    );
  };

  constructor(props){
    super(props);
    this.state = {
      dataList: [],
      refreshing: false,
    }
  }

  render() {
    return (
        <FlatList style={styles.listViewStyle}>
            data={this.state.dataList}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItemView}
            onRefresh={this.requestListData.bind(this)}
            refreshing={this.state.refreshing}
            ItemSeparatorComponent={this.separator}
         </FlatList>
    );
  }

  componentDidMount(){
    this.requestListData();
    this.props.navigation.setParams({navigatePress:this.rightItemAction});
  }

  async requestListData () {
    this.setState({ refreshing: true });

    //这个是js的访问网络的方法
    fetch(MTApi.recommend)
    //ES6的写法左边代表输入的参数右边是逻辑处理和返回结果
        .then((response) => response.json())
        .then((responseData) => {
          let data = responseData.data;
          let dataBlob = [];

          data.map(function (info) {
            dataBlob.push({
              id: info.id,
              imageUrl: info.squareimgurl,
              title: info.mndataListame,
              subtitle: `[${info.range}]${info.title}`,
              price: info.price
            });
          });

          this.setState({
            dataList: this.state.dataList.concat(dataBlob),
            refreshing: false,
          })

        }) .catch( (error) => {
          this.setState({
            refreshing: false
          })

        }) .done();
  }

}

const styles = StyleSheet.create({
  listViewStyle:{
    flex: 1,
    backgroundColor: '#f3f3f3'
  },

  searchBarStyle: {
    width: MTFrame.width * 0.7,
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

  searchTitleStyle:{
    color: '#777777',
    fontSize:12,
  },



  cellStyle:{
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