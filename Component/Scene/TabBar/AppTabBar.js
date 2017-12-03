/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PureComponent } from 'react';
import {
  StatusBar,
  Image,
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import HomeScreen from '../Buy/MTGroupBuy';
import OrderScreen from '../Order/MTOrder';
import NearbyScreen from '../Nearby/MTNearby';
import MineScreen from '../Mine/MTMine';

//商品详情页面
import ProductDetail from '../Buy/MTProductDetail';
import Web from '../../Widget/MTWebScene';

export default class OKMain extends Component {

  constructor() {
    super();
    StatusBar.setBarStyle('dark-content')
  }

  render() {
    return(
        <Navigator />
    )
  }
}

// TabNavigator，StackNavigator 的学习地址：
// http://blog.csdn.net/u013718120/article/details/72357698
const Tab = TabNavigator(
    {
      Home:{
        screen:HomeScreen,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'团购',
          title:'团购',
          tabBarIcon:({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri:('pfb_tabbar_homepage')}}
                  selectedImage={{uri:('pfb_tabbar_homepage_selected')}}
              />
          )
        }),
      },

      Shop:{
        screen:NearbyScreen,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'附近',
          // title:'附近',
          tabBarIcon:({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri:('pfb_tabbar_merchant')}}
                  selectedImage={{uri:('pfb_tabbar_merchant_selected')}}
              />
          )
        }),
      },

      More:{
        screen:OrderScreen,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'订单',
          title:'订单',
          tabBarIcon:({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri:('pfb_tabbar_order')}}
                  selectedImage={{uri:('pfb_tabbar_order_selected')}}
              />
          )
        }),
      },

      Mine:{
        screen:MineScreen,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'我的',
          title:'我的',
          tabBarIcon:({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri:('pfb_tabbar_mine')}}
                  selectedImage={{uri:('pfb_tabbar_mine_selected')}}
              />
          )
        }),
      },
    },

    {
      tabBarComponent:TabBarBottom,
      tabBarPosition:'bottom',
      swipeEnabled:true,
      animationEnabled:false,
      lazy:true,
      tabBarOptions:{
        activeTintColor:'#06C1AE',
        inactiveTintColor:'#979797',
        style:{backgroundColor:'#ffffff',},
        labelStyle: {fontSize:10},
      }
    }
);

const Navigator = StackNavigator(
    {
      Tab:{screen:Tab},
      Web:{screen:Web},
      productDetail:{screen: ProductDetail}
    },

    {
      navigationOptions:{
        headerBackTitle:null,
        headerTintColor:'#333333',
        showIcon:true,
        swipeEnabled:false,
        animationEnabled:false,
      },
    }
);


// create a component
class TabBarItem extends PureComponent {
  render() {
    let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
    return (
        <Image
            source={this.props.focused ? selectedImage : this.props.normalImage}
            style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
        />
    );
  }
}
