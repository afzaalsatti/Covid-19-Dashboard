import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,Alert,icon } from 'react-native';
import * as Permissions from 'expo-permissions';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AsyncStorage} from 'react-native';
import * as Sharing from 'expo-sharing';
import * as  ImagePicker from 'expo-image-picker';
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
  state = {
    image: null,
    
  };
  componentDidMount()
   {
  
   }
  

         
       
     
     
      
  
  

  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 0.2,
      allowsEditing: true,
    });
    if (!cancelled) 
    {
    this.setState({ image:  uri });
   
    }}
   
  
 

 


   

  render() {
   
  
    
   
     
      
    return (
      <View style={styles.container}>
        
        {this.state.image? <Image style={styles.image} source={{ uri:this.state.image}} />:
        <Image style={styles.image}  />}  
      
        <View style={styles.row}>
          <Button 
          onPress={this.selectPicture} 
          style={styles.selectPicture}>
              <Text style={{color:'#FFFFFF',fontSize:18,alignContent:'center'}}>
              Select Image</Text></Button>
        </View>
        
    
      </View>
    );
      
    
   
    
    
  }
}

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
  row: { flexDirection: 'row' },
  image: { width: 270, height: 150, backgroundColor: '#f8f8ff',marginTop:5 },
  button: {
    padding: 5,
    marginVertical: 15,
    height:40,
    width:270,
    borderRadius:10,
  alignItems:'center',
    marginHorizontal:4,  
    backgroundColor: '#03a9f4',
  },
  container: {
   // flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectPicture:{
      borderRadius:10,
      color:'red'
  }
});
