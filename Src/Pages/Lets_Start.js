import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Button from '../Component/ReusableButton';
import {Actions} from 'react-native-router-flux';
import Img from '../Images/img1.jpg';
export default function App() {
    Lets_start=()=>{
    Actions.login();
    }
  return (
      <View style={styles.container}>
        
          <Image source={Img} alt="bags image"   style={{ height:300,width:400,alignSelf:'center'
 }}/>
          
         
          <View style={{marginVertical:30,flexDirection:'row',alignSelf:'center'}}>
          <Text style={styles.heading}>
              WelCome to   
          </Text>
          <Text  style={styles.heading1}>
                Royal Cart
          </Text>
          </View>
          <View  style={styles.line}></View>
         <View style={{marginTop:10}}>
         <Text style={styles.text}>Each online store has its own Store and Bags,</Text>
       <Text  style={styles.text}>But if you want to go shopping in multiple</Text>
       <Text  style={styles.text}>places at once,so you have only one bag</Text>
         </View>
      
       <View style={{position:'absolute',bottom:5,alignSelf:'center'}}>
       <Button 
       title="Let's Start" 
       Method={Lets_start}
        CustomStyle={{height:60,width:Platform.OS==="ios"?350:400,
         alignSelf:'center', fontSize:20,alignItems:'center',
        backgroundColor:'red',marginVertical:5,
     borderRadius:5}} />
       </View>
      
      </View>
    
  
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#FFFFFF',
     
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    text:{
      color:'gray',
      fontSize:16,
      marginVertical:2,
      alignSelf:'center'

    },
    line:{

            borderWidth: 1,
            borderColor:'green',
            margin:5,
            width:40,
            alignSelf:'center'
            
        
    },
    heading:{
        color:'gray',
        fontSize:24,
        marginVertical:2,
        alignSelf:'center',
        marginHorizontal:10
  
    },
    heading1:{
        color:'green',
        fontSize:24,
        fontWeight:'bold',
        marginVertical:2,
        alignSelf:'center',
        fontStyle:'italic'
  
    }
  });

