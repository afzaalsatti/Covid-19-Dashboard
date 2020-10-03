import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, Text, View,TextInput ,TouchableOpacity,Platform} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Actions } from 'react-native-router-flux';

export default function App(props) {
  
   
  return (
   <View>
       <TouchableOpacity onPress={()=>{props.Method()}}
       style={props.CustomStyle}
    
    >
          <Text style={{
           color:'#FFFFFF',
          fontSize:20,marginTop:15,fontWeight:'bold'}}>{props.title}</Text> 
          </TouchableOpacity>
      
     
    
   

    

    </View>
  );
}


