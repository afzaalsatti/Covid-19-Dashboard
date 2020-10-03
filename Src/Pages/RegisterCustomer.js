import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native';
import Input from '../Component/TextInput';
import Password from '../Component/Password';
import Button from '../Component/ReusableButton';
import { Actions } from 'react-native-router-flux';
import Logo from '../Component/Logo'
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { KeyboardAvoidingView } from 'react-native';
export default function App() {
  const MovetoLogin=()=>{
    Actions.login();
  }
  
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView 
          keyboardVerticalOffset={10}  
          behavior={Platform.OS == "ios" ? "padding" : "height"} enabled>
         <ScrollView   contentContainerStyle={{ flexGrow: 1 }}
         showsVerticalScrollIndicator={false}
         bounces={true}
         alwaysBounceVertical={true}
         indicatorStyle="black">
     <View>
       <Logo  CustomStyle={{top:10,marginVertical:20,alignSelf:'center'}}/>
      </View>
     <Input 
     CustomStyle={{height:50,
      width:Platform.OS==='ios'?350:400,
    alignSelf:'center',
     borderBottomColor:'#03a9f4',
      marginVertical:15,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}}data="User Name" name="user" type="Entypo"/>
     <Input  
     CustomStyle={{height:50,
      width:Platform.OS==='ios'?350:400,
    alignSelf:'center',
     borderBottomColor:'#03a9f4',
      marginVertical:15,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}}data="Phone #" name="phone-call" type="Feather"/>
     <Input 
     CustomStyle={{height:50,
      width:Platform.OS==='ios'?350:400,
    alignSelf:'center',
     borderBottomColor:'#03a9f4',
      marginVertical:15,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}} data="E-mail" name="mail" type="Feather"/>
     <Password 
     CustomStyle={{height:50,
      width:Platform.OS==='ios'?350:400,
    alignSelf:'center',
     borderBottomColor:'#03a9f4',
      marginVertical:15,
       borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}}data="Password" name="lock" type="Entypo"/>
     <Button title="REGISTER"  Method={MovetoLogin}
      CustomStyle={{height:60,width:Platform.OS==="ios"?350:400,
      alignSelf:'center', fontSize:20,alignItems:'center',
     backgroundColor:'red',marginVertical:5,
  borderRadius:5}}/>
     <View style={{position:'absolute',bottom:40,flexDirection:'row',left:22}}>
       
       <Text style={{color:'gray',fontSize:20,marginTop:3}}>or Sign In With</Text>
       
 
    <TouchableOpacity style={{marginLeft:50,marginRight:15}}>
     <Entypo name="facebook" size={32} color="#03a9f4" />
     </TouchableOpacity>
    <TouchableOpacity style={{marginHorizontal:Platform.OS==="ios"?13:20}}>
    <Entypo name="twitter" size={32} color="#03a9f4" />
    </TouchableOpacity>
    <TouchableOpacity style={{marginHorizontal:Platform.OS==="ios"?13:20}}>
    <AntDesign name="google" size={32} color="red" />
    </TouchableOpacity>
    </View>
    
    
   
     
    </ScrollView>
     </KeyboardAvoidingView>
    
    
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
