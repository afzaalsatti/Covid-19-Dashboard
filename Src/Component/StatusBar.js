
import React, {
    Component,
  } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    Platform,
  } from 'react-native';
  
  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
  
  export default class DarkTheme extends Component {
    render() {
      return (
        <View>
          <MyStatusBar backgroundColor="#054da1" barStyle={Platform.OS=='ios'?'dark-content':"light-content"} />
         
        </View>
      );
    }
  }
  
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
  const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    statusBar: {
      height: STATUSBAR_HEIGHT,
     
    },
    appBar: {
      backgroundColor:'#79B45D',
      height: APPBAR_HEIGHT,
    },
    content: {
      flex: 1,
      backgroundColor: '#33373B',
    },
  });
  
  AppRegistry.registerComponent('App', () => DarkTheme);