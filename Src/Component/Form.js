import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Input from '../Component/TextInput';
import Password from '../Component/Password';
import Button from '../Component/ReusableButton';
import { Actions } from 'react-native-router-flux';



export default function App(props) {
 
  return (
    
       <View>
     
    <Input 
     CustomStyle={{height:50,
      width:Platform.OS==='ios'?350:400,
    alignSelf:'center',
     borderBottomColor:'#03a9f4',
      marginVertical:15,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}} data="User Name" name="mail" type="Entypo" />
    <Password 
    CustomStyle={{height:50,
      width:Platform.OS==='ios'?350:400,
    alignSelf:'center',
     borderBottomColor:'#03a9f4',
      marginVertical:15,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}}data="New Password" name="lock" type="Entypo"/>
    {props.type==="UPDATE"?<Password 
     CustomStyle={{height:50,
      width:Platform.OS==='ios'?350:400,
    alignSelf:'center',
     borderBottomColor:'#03a9f4',
      marginVertical:15,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}} data="Retype-Password" name="lock" type="Entypo"/>:null}
    <Button title={props.type}
     Method={props.loginas}
     CustomStyle={{height:60,width:Platform.OS==="ios"?350:400,
     alignSelf:'center', fontSize:20,alignItems:'center',
    backgroundColor:'red',marginVertical:5,
 borderRadius:5}}/>
   
  

    </View>
  );
}


