
import {Dimensions, Platform, PixelRatio } from 'react-native'

// 全局尺寸变量
global.MTFrame = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePixel: 1 / PixelRatio.get(),
  statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
};
