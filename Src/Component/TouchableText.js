import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Actions } from 'react-native-router-flux';

export default function Touchable(props) {
  
   
  return (
   <View>
      
          <TouchableOpacity onPress={()=>props.Move()}
        style={props.parentstyle} >
         <Text style={props.Customstyle}>{props.title}</Text> 
          </TouchableOpacity>
     
    
   

    

    </View>
  );
}


