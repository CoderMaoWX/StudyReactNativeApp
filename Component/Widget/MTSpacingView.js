//import liraries
import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'


// create a component
class SpacingView extends PureComponent {
  render() {
    return (
        <View style={styles.container}>
        </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 14,
    backgroundColor: '#F0F0F0',
  },
});

//make this component available to the app
export default SpacingView;
