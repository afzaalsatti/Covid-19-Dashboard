import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image,View,Text,StyleSheet,TouchableOpacity} from 'react-native' ;
import { ScrollView } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import Cards from '../Component/HotOfferCards';
export default function App(props) {
  const About_Us=()=>{
Actions.About()
  }
  const MovetoLogin=()=>{
    Actions.login()
      }
  return (
    
   
        <ScrollView showsVerticalScrollIndicator={false}>
    <Cards title="Bags Collection" content="Western Design in blue color" subtitle="Medium"/>
    <Cards title="Jewellary" content="Antique design with multiple shades" subtitle="Medium"/>
    <Cards title="Geans Collection" content="Western Design in blue ,black color" subtitle="small,Medium,Large"/>
     </ScrollView>


   
  );
}



