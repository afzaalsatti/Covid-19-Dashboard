import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native' ;
import Form from '../Component/Form';
import { Ionicons } from '@expo/vector-icons'; 
import TouchableText from '../Component/TouchableText';
import {Actions} from 'react-native-router-flux';
import Logo from '../Component/Logo';
textstyle={position:'absolute',right:10}
export default function App() {
  const About_Us=()=>{
Actions.About()
  }
  const MovetoLogin=()=>{
    Actions.login()
      }
  return (
    
   <View style={styles.container}>
     <View style={{position:'absolute',top:50}}>
       <Logo />
      </View>
      <TouchableOpacity  onPress={About_Us}style={{position:'absolute',top:15,right:18}}>
      <Ionicons name="ios-help-circle-outline" size={28} 
      color="#FFFFFF" />
      </TouchableOpacity>
     
     <Form type="UPDATE"/>
     
      
     
     
     


   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#FFFFFF',
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#ffff',
    fontSize:24,
    fontWeight:'bold'
  }
});

