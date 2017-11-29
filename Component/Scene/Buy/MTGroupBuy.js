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
import MTProductCell from './MTProductCell'
import MTHomeMenuView from './MTHomeMenuView'
import MTSpacingView from '../../Widget/MTSpacingView'
import MTHomeGridView from './MTHomeGridView'

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

  rightItemAction = (info: Object) => {
    this.props.navigation.navigate('productDetail', { info: info });
  };

  separator = () => {
    return <View style={{height:0.5, backgroundColor:'#e2e2e2'}}/>;
  };

  keyExtractor = (item: Object) => {
    return item.key
  };

  renderItemView ({item}) {
    return <MTProductCell info={item} onPress={this.rightItemAction} />
  };

  renderHeaderView ({info}) {
    return (
        <View>
          <MTHomeMenuView menuInfos={MTApi.menuInfo} onPress={this.rightItemAction}/>
          <MTSpacingView />
          {/*广告*/}
          <MTHomeGridView infos={this.state.discounts} onPress={this.rightItemAction} />
          <MTSpacingView />
          <Text style={{ backgroundColor:'white', borderColor:'#e2e2e2', borderWidth:1, lineHeight:30, color:'#222222'}} >     猜你喜欢 </Text>
        </View>
    )
  };

  constructor(props){
    super(props);
    this.state = {
      dataList: [],
      discounts: [],
      refreshing: false,
    }
  }

  render() {
    return (
        <FlatList style={styles.listViewStyle}
            data={this.state.dataList}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItemView.bind(this)}
            onRefresh={this.requestListData.bind(this)}
            refreshing={this.state.refreshing}
            ListHeaderComponent={this.renderHeaderView.bind(this)}
            ItemSeparatorComponent={this.separator}
         />
    );
  }

  componentDidMount(){
    this.props.navigation.setParams({navigatePress:this.rightItemAction});
    this.setState({ refreshing: true });
    this.requestListData();
    this.requestGridData();
  }

  //请求头部广告数据
  requestGridData() {

    fetch(MTApi.discount)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            discounts: responseData.data
          })
        }) .catch((error) => {
      this.setState({
        refreshing: false
      })
    }) .done();
  }

  //请求列表数据
  async requestListData () {

    fetch(MTApi.recommend)
        .then((response) => response.json())
        .then((responseData) => {
          let data = responseData.data;
          let dataBlob = [];
          let index = 0;

          data.map(function (info) {
            dataBlob.push({
              key:index,
              id: info.id,
              imageUrl: info.squareimgurl,
              title: info.mname,
              subtitle: `[${info.range}]${info.title}`,
              price: info.price
            });
            index++;
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
});
