import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native' ;
import { Ionicons } from '@expo/vector-icons'; 
import TouchableText from '../Component/TouchableText';
import {Actions} from 'react-native-router-flux';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'
export default function App(props) {
  const About_Us=()=>{
Actions.About()
  }
  const MovetoLogin=()=>{
    Actions.login()
      }
  return (
    
   <View style={props.CustomStyle}>
     <View style={{flexDirection:'row'}}>
     <FontAwesome5 name="crown" size={48} color="green" />
       <Text style={{fontSize:48,color:'#03a9f4',fontWeight:'bold',fontStyle:'italic'}}>Royal</Text>
       <Text style={{fontSize:28,color:'green',marginTop:25,fontWeight:'bold',fontStyle:'italic'}}>Cart</Text>
       <Entypo name="shopping-cart" size={22} color="green" style={{marginTop:32}}/>
     </View>


   </View>
  );
}



