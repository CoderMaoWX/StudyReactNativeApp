
//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

// create a component
class HomeGridView extends PureComponent {

  static defaultProps = {
    infos: []
  }

  render() {
    return (
        <View style={styles.container}>
          {this.props.infos.map((info, index) => (

              <TouchableOpacity key={info.title} style={styles.menuButtonStyle} onPress={() =>this.props.onPress(info)}>

                <View style={{flexDirection:'column'}}>
                  <Text style={{fontSize:12, color:info.deputy_typeface_color, marginBottom:10}}> {info.title} </Text>
                  <Text style={{fontSize:12, color:'#222222'}}> {info.deputytitle} </Text>
                </View>

                <Image source={{uri: info.imageurl}} style={styles.itemImgStyle}/>

              </TouchableOpacity>
          ))}
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
    backgroundColor:'red',
    width: 45,
    height: 45,
    margin: 5,
    borderRadius: 22.5,
    overflow: 'hidden'
  },
});

//make this component available to the app
export default HomeGridView;
