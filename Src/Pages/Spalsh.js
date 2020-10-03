import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../Component/Logo'
export default function App() {
  return (
   <View style={styles.container}>
     <Logo/>
     <View  style={styles.line}></View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004B87',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#ffff',
    fontSize:24,
    fontWeight:'bold'
  },
  line:{

    borderWidth: 1.5,
    borderColor:'green',
    margin:5,
    width:50,
    alignSelf:'center'
    

}
});
