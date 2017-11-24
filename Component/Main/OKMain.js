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

import HomeScreen from '../Home/OKHome';
import ShopScreen from '../Shop/OKShop';
import MoreScreen from '../More/OKMore';
import MineScreen from '../Mine/OKMine';

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
          tabBarLabel:'首页',
          title:'首页',
          tabBarIcon:({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri:('icon_tabbar_homepage')}}
                  selectedImage={{uri:('icon_tabbar_homepage')}}
              />
          )
        }),
      },

      Shop:{
        screen:ShopScreen,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'商家',
          title:'商家',
          tabBarIcon:({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri:('icon_tabbar_merchant_normal.png')}}
                  selectedImage={{uri:('icon_tabbar_merchant_selected.png')}}
              />
          )
        }),
      },

      More:{
        screen:MoreScreen,
        navigationOptions:({navigation}) => ({
          tabBarLabel:'更多',
          title:'更多',
          tabBarIcon:({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={{uri:('icon_tabbar_misc.png')}}
                  selectedImage={{uri:('icon_tabbar_misc_selected.png')}}
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
                  normalImage={{uri:('icon_tabbar_mine.png')}}
                  selectedImage={{uri:('icon_tabbar_mine_selected.png')}}
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

const Navigator = StackNavigator(
    {
      Tab:{screen:Tab},
      // Product:{screen:ProductScreen}
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
