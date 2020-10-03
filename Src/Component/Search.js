import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, Text, View,TextInput ,Platform} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import Input from '../Component/TextInput';
export default function App(props) {
  const [eye, seteye] = useState(false);
 
  return (
   <View>
    
     
    <Input 
     CustomStyle={{height:50,
      width:Platform.OS==='ios'?350:400,
    alignSelf:'center',
      marginVertical:15,backgroundColor:'#f1f1f1',
      borderRadius:5,flexDirection:'row',padding:10}} 
       data="Search" name="search" type="AntDesign" />

    

    </View>
  );
}


