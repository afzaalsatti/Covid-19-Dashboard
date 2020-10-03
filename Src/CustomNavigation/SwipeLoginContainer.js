import * as React from 'react';
import { Text, View ,StyleSheet,StatusBar,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import {Actions} from 'react-native-router-flux';
import Logo from '../Component/Logo'
import TouchableText from '../Component/TouchableText';
import { Entypo } from '@expo/vector-icons'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Form from '../Component/Form'
const loginUser=()=>{
    Actions.Home();
  }
  const loginadmin=()=>{
    Actions.Admin_Home()
  }
const About_Us=()=>{
    Actions.About()
      }
      const MovetoRegister=()=>{
        Actions.register()
          }
          const MovetoForgetPassword=()=>{
            Actions.Forgetpass();
          }
function login_as_user() {
  return (
    <View style={styles.container}>
        <StatusBar theme="dark" color="blue"/>
       <TouchableOpacity  onPress={About_Us}style={{position:'absolute',top:15,right:18}}>
       <Ionicons name="ios-help-circle-outline" size={28} 
       color="#03a9f4" />
      </TouchableOpacity>
       <View style={{position:'absolute',top:50,alignSelf:'center'}}>
        <Logo />
      
    
    </View>
    <Form type="LOGIN AS USER" loginas={loginUser}/>
    <View>
    <TouchableText
          Customstyle={{right:Platform.OS==="ios"?10:0,color:'gray',fontSize:18}}
          title="Forget Password? "
          parentstyle={{marginLeft:220}}
          Move={MovetoForgetPassword}
          />
         
    </View>
         
          
         
          <TouchableOpacity onPress={MovetoRegister} style={{position:'absolute',bottom:40,flexDirection:'row'}}>
            <Text style={{color:'gray',fontSize:20}}>Don't have an account yet? </Text>
            <FontAwesome5 name="surprise" size={24} color="gray" />
          </TouchableOpacity>
    
    
          
          </View> 
        
    
  );
}

function login_as_admin() {
  return (
    <View style={styles.container}>
    <StatusBar theme="dark" color="blue"/>
   <TouchableOpacity  onPress={About_Us}style={{position:'absolute',top:15,right:18}}>
   <Ionicons name="ios-help-circle-outline" size={28} 
   color="#03a9f4" />
  </TouchableOpacity>
   <View style={{position:'absolute',top:50,alignSelf:'center'}}>
    <Logo />
  

</View>
<Form type="LOGIN AS ADMIN"  loginas={loginadmin}/>

<Text style={{color:'gray',fontSize:20,marginTop:3,marginTop:30}}>Grow Your Bussiness With Us</Text>

    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="User" component={login_as_user} />
        <Tab.Screen name="Admin" component={login_as_admin} />
      </Tab.Navigator>
    </NavigationContainer>
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
  
  