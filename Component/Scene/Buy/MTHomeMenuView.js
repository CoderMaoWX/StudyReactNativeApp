
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


export default class MTHomeMenuView extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentPage: 0,

    }
  }

  //布局指示器小圆点视图
  renderIndicatorRound(count){
    let pageCount = Math.ceil(this.props.menuInfos.length / 10);
    let indicatorArr = [];

    for (let i=0; i<pageCount; i++){
      let selectedStyle = (i==this.state.currentPage) ? {color: MTColor.theme} : {color: 'gray'};
      indicatorArr.push(
          <Text key={i} style={[{fontSize:25, margin:-4}, selectedStyle]} >  &bull; </Text>
      );
    }
    return indicatorArr;
  }


  itemAction = () =>{
    alert('点击了item')
  };


  //布局滚动tem视图
  renderItemView = () => {
    const { menuInfos } = this.props;

    let menuItems = menuInfos.map(
        (info, i) => (
            <TouchableOpacity key={info.title} style={styles.menuButtonStyle} onPress={this.itemAction}>
              <Image source={{uri: info.icon}} style={styles.itemImgStyle}/>
              <Text style={{fontSize:14, color:'#222222'}}> {info.title} </Text>
            </TouchableOpacity>
        )
    );

    let pageViewArr = [];
    let pageCount = Math.ceil(menuItems.length / 10);

    for (let i=0; i<pageCount; i++) {
      let items = menuItems.slice(i * 10, i * 10 + 10);

      let pageView = (
          <View style={styles.pageViewStyle} key={i}>
            {items}
          </View>
      );
      pageViewArr.push(pageView)
    }
    return pageViewArr;

  };


  render (){
    const { itemInfoList } = this.props;
    console.log('参数'+itemInfoList);

    return (
        <View style={styles.scrollViewStyle}>

          {/*滚动视图*/}
          <ScrollView ref="scrollViewKey" style={styles.scrollViewStyle}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      alwaysBounceHorizontal={false}
                      alwaysBounceVertical={false}
                      pagingEnabled={true}
                      scrollEnabled={true}
                      //监听每次滚动来设置指示器小圆点颜色
                      onMomentumScrollEnd={(e)=>this.setupIndicatorRound(e)}>

            {/*布局滚动tem视图*/}
            {this.renderItemView.bind(this)()}
          </ScrollView>

          {/*指示器*/}
          <View style={styles.pageControlStyle}>
            {this.renderIndicatorRound()}
          </View>

        </View>
    )
  }


  //每一帧滚动结束时调用
  setupIndicatorRound = (e) => {
    //求出水平方向的偏移量
    let offsetX= e.nativeEvent.contentOffset.x;

    //求出当前的页数
    let currentPage = Math.floor(offsetX / MTFrame.width);
    // console.log("每一帧滚动结束时调用"+currentPage);

    //更新状态机，重新绘制UI
    this.setState({
      currentPage: currentPage,
    });
  }

}


const styles = StyleSheet.create({
  scrollViewStyle:{
    backgroundColor: 'white',

  },

  pageViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: MTFrame.width,
  },

  menuButtonStyle:{
    width: MTFrame.width / 5,
    height: MTFrame.width / 5,
    justifyContent: 'center',
    alignItems:'center'
  },

  itemImgStyle:{
    width: 30,
    height: 30,
    margin: 5,
  },

  pageControlStyle:{
    margin:5,
    flexDirection:'row',
    justifyContent:'center'
  },

});
