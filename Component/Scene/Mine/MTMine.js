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
  ScrollView,
  RefreshControl,
} from 'react-native';

import MTNavigationItem from '../../Widget/MTNavigationItem'
import DetailCell from './MTDetailCell'

export default class MTMine extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
        <View style={{ flexDirection: 'row' }}>
          <MTNavigationItem
              icon={{uri: 'icon_navigationItem_set_white'}}
              onPress={() => {

              }}
          />
          <MTNavigationItem
              icon={{ur:'icon_navigationItem_message_white'}}
              onPress={() => {

              }}
          />
        </View>
    ),
    headerStyle: { backgroundColor: MTColor.theme },
  });

  state: {
    isRefreshing: boolean
  };

  constructor(props: Object) {
    super(props);

    this.state = {
      isRefreshing: false
    }
  }

  onHeaderRefresh() {
    this.setState({ isRefreshing: true });

    setTimeout(() => {
      this.setState({ isRefreshing: false })
    }, 2000);
  }

  renderCells() {
    let cells = [];
    let dataList = this.getDataList();
    for (let i = 0; i < dataList.length; i++) {
      let sublist = dataList[i];
      for (let j = 0; j < sublist.length; j++) {
        let data = sublist[j];
        let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
        cells.push(cell)
      }
      cells.push(<View style={{height:14, backgroundColor: MTColor.background}} key={i} />)
    }

    return (
        <View style={{ flex: 1 }}>
          {cells}
        </View>
    )
  }

  renderHeader() {
    return (
        <View style={styles.header}>
          <View style={styles.userContainer}>
            <Image style={styles.avatar} source={{uri:'avatar'}} />
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>洛城</Text>
                <Image style={{ marginLeft: 4 }} source={{uri:'beauty_technician_v15'}} />
              </View>
              <Text style={{ color: 'white', marginTop: 4 }}>个人信息 ></Text>
            </View>
          </View>
        </View>
    )
  }

  render() {
    return (
        <View style={{ flex: 1, backgroundColor: MTColor.background }}>
          <View style={{ position: 'absolute', width: MTFrame.width, height: MTFrame.height / 2, backgroundColor: MTColor.theme }} />
          <ScrollView
              refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => this.onHeaderRefresh()}
                    tintColor='gray'
                />
              }>
            {this.renderHeader()}

            <View style={{height:14, backgroundColor: MTColor.background}}/>

            {this.renderCells()}
          </ScrollView>
        </View>
    );
  }

  getDataList() {
    return (
        [
          [
            { title: '我的钱包', subtitle: '办信用卡', image: {uri:'icon_mine_wallet'} },
            { title: '余额', subtitle: '￥95872385', image: {uri:'icon_mine_balance'} },
            { title: '抵用券', subtitle: '63', image: {uri:'icon_mine_voucher'} },
            { title: '会员卡', subtitle: '2', image: {uri: 'icon_mine_membercard'} }
          ],
          [
            { title: '好友去哪', image: {uri:'icon_mine_friends'} },
            { title: '我的评价', image: {uri:'icon_mine_comment'} },
            { title: '我的收藏', image: {uri:'icon_mine_collection'} },
            { title: '会员中心', subtitle: 'v15', image: {uri:'icon_mine_membercenter'} },
            { title: '积分商城', subtitle: '好礼已上线', image: {uri:'icon_mine_member'} }
          ],
          [
            { title: '客服中心', image: {uri:'icon_mine_customerService'} },
            { title: '关于美团', subtitle: '我要合作', image: {uri:'icon_mine_aboutmeituan'} }
          ]
        ]
    )
  }

}

// define your styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: MTColor.theme,
    paddingBottom: 20
  },
  icon: {
    width: 27,
    height: 27,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#51D3C6'
  }
});
