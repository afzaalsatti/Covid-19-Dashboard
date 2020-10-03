import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Entypo ,MaterialIcons} from '@expo/vector-icons'; 
import { StyleSheet, Text, View,TextInput ,Platform} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default function App(props) {
  const [eye, seteye] = useState(false);
  const checkeye=()=>{
if(eye===false)
{
  seteye(true)
}
else{
  seteye(false)
}
  }
  return (
   <View>
      <View 
      style={props.CustomStyle}
       >
         {props.type==="Entypo"? <Entypo name={props.name} size={32}  color="#03a9f4"/> 
         : <Feather name={props.name}  color="#03a9f4" size={28} />}
      
  
        <TextInput  placeholder={props.data} 
        secureTextEntry={false}
        placeholderColor='#666666' style={{marginLeft:10, color:"gray",fontSize:20, width:Platform.OS==='ios'?250:300}} />
        
      
     
      </View>
   

    

    </View>
  );
}


