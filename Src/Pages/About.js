
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function App() {
  return (
    <View>
        <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Text style={styles.Text}>Lorem Ipsum dolor sit amet?</Text>
        <AntDesign style={{right:7, position:'absolute',top:15}} name="right" size={18} color="gray" />
        </TouchableOpacity>
       
        <Text style={{marginLeft:10,marginTop:15,color:'gray',fontSize:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
             laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.</Text>
            <View style = {styles.lineStyle} />
            <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Text style={styles.Text}>Lorem Ipsum dolor sit amet?</Text>
        <AntDesign style={{right:7, position:'absolute',top:15}} name="down" size={18} color="gray" />
        </TouchableOpacity>
        <View style = {styles.lineStyle} />
        <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Text style={styles.Text}>Lorem Ipsum dolor sit amet?</Text>
        <AntDesign style={{right:7, position:'absolute',top:15}} name="down" size={18} color="gray" />
        </TouchableOpacity>
        <View style = {styles.lineStyle} />
        <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Text style={styles.Text}>Lorem Ipsum dolor sit amet?</Text>
        <AntDesign style={{right:7, position:'absolute',top:15}} name="down" size={18} color="gray" />
        </TouchableOpacity>
         <View style = {styles.lineStyle} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
      color:'#03a9f4',
      marginTop:10,
      fontSize:20,
      marginLeft:10
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'gray',
    margin:10,
}
});
