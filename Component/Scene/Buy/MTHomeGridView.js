
//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

// create a component
export default class HomeGridView extends PureComponent {

  static defaultProps = {
    infos: []
  };

  renderItemView = () => {
    let itemViewArr = [];
    let infoItemArr = this.props.infos;

    for (let i=0; i<infoItemArr.length; i++) {
      let info = infoItemArr[i];
      let imageUrl = info.imageurl.replace('w.h', '400.0');

      itemViewArr.push(
        <TouchableOpacity key={info.title} style={styles.menuButtonStyle} onPress={() =>this.props.onPress(info.share.url)}>

          <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:12, color:info.deputy_typeface_color, marginBottom:10}}> {info.title} </Text>
            <Text style={{fontSize:12, color:'#222222'}}> {info.deputytitle} </Text>
          </View>

          <Image source={{ uri: imageUrl }} style={styles.itemImgStyle}/>
        </TouchableOpacity>
      )
    }
    return itemViewArr;
  };

  render() {
    return (
        <View style={styles.container}>
          {this.renderItemView.bind(this)()}
        </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // borderTopWidth: MTFrame.onePixel,
    // borderLeftWidth: MTFrame.onePixel,
    // borderColor: MTColor.border
    // borderColor:'#e2e2e2',
    // borderWidth:1
  },
  menuButtonStyle:{
    width: MTFrame.width/2-0.01,
    height:80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#e2e2e2',
    borderWidth:0.5,
  },
  itemImgStyle:{
    backgroundColor:'white',
    width: MTFrame.width/5,
    height: MTFrame.width/5,
    margin: 15,
    // borderRadius: 22.5,
    // overflow: 'hidden'
  },
});
