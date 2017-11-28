
import {Dimensions, Platform, PixelRatio } from 'react-native'

// 此文件用来定义整个App的使用全局变量

global.constants = {
  website:'http://www.baidu.com',
  name:'百度',
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePixel: 1 / PixelRatio.get(),
  statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
};


global.mainTheme = {
  theme: '#06C1AE',
  border: '#e0e0e0',
  background: '#f3f3f3'
};


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});
