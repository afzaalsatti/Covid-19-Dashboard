import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
     
      firstLanguage: '500/-',
    
    }
  }
  
  
 
  render() {
  
    
    return (
      <View style={styles.container}>
       
        
        
        <Picker
          style={styles.onePicker} itemStyle={styles.onePickerItem}
          selectedValue={this.state.firstLanguage}
          onValueChange={(itemValue) => {
            this.setState({firstLanguage: itemValue}) 
          }}
        >
          <Picker.Item label="Small" value="Small" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Large" value="Large" />
          <Picker.Item label="Small Medium Large" value="Small Medium Large" />
          <Picker.Item label="2pcs Suit" value="2pcs Suit" />
          <Picker.Item label="3pcs Suit" value="3pcs Suit" />
         
        
        </Picker>
       
      </View>
    );
        
       
     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
   // backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    color:'gray',
    fontWeight: 'bold',
    // marginTop: 20,
    // marginBottom: 10,
  },
  picker: {
    width: 300,
    // backgroundColor: '#FFF0E0',
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  pickerView:{
    height:400,    
  },
  pickerItem: {
    color: 'red'
  },
  onePicker: {
    width: 300,
    height: 44,
    // backgroundColor: '#FFF0E0',
   
    
  },
  onePickerItem: {
    height: 44,
    color: 'red',
    fontSize:16
  },
 
});
