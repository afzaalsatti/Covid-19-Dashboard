import React, { Component, useState } from "react";
import { DataTable} from 'react-native-paper';
import { Ionicons ,AntDesign ,Fontisto} from "@expo/vector-icons";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView
} from "react-native";
import SizePicker from '../Component/SizePicker'
import CheckBox from '../Component/CheckBox'
import ImagePIcker from '../Component/PickImage'
import Input from '../Component/TextInput'
import { setStatusBarBackgroundColor } from "expo-status-bar";
const App = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [start, isstart] = useState(true);
  const [submit, issubmit] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {start===true?
              <DataTable>
            
              <Input 
           CustomStyle={{height:50,
            width:Platform.OS==='ios'?300:350,
          alignSelf:'center',
           borderBottomColor:'#03a9f4',
            marginVertical:15,
             borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}}
              data="Description" name="info" type="Entypo" />
              <Input 
           CustomStyle={{height:50,
            width:Platform.OS==='ios'?300:350,
          alignSelf:'center',
           borderBottomColor:'#03a9f4',
            marginVertical:15,
             borderBottomWidth:1,borderRadius:5,flexDirection:'row',padding:10}} data="Price " name="dollar-sign" type="Feather" />
            <Text style={{color:'gray'}}>Available Size:</Text>
            <SizePicker/>
            <Text style={{color:'gray',marginTop:40}}>Available Colors:</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15}}>
            <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'#ff002a'}}>
             <CheckBox/>
             </View>
             <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'#03a9f4'}}>
             <CheckBox/>
             </View>
             <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'#D651F8'}}>
             <CheckBox/>
             </View>
             <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'pink'}}>
             <CheckBox/>
             </View>
             <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'#ffeb3b'}}>
             <CheckBox/>
             </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
            <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'#4caf50'}}>
             <CheckBox/>
             </View>
             <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'black'}}>
             <CheckBox/>
             </View>
             <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'white'}}>
             <CheckBox/>
             </View>
             <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'#FBAFF8'}}>
             <CheckBox/>
             </View>
             <View style={{borderWidth:1,marginRight:10,height:35,borderRadius:15,backgroundColor:'#ff5722'}}>
             <CheckBox/>
             </View>
            </View>
            
           
            <View style={{flexDirection:'row',marginTop:30}}>
        <View style={{borderColor:'gray',borderWidth:1,marginRight:10,height:35,borderRadius:15}}>
        <CheckBox/>
        </View>
        <Text style={{color:'gray',fontSize:16,marginTop:12}}>Hot Offer </Text>
        
       
        </View>
               
            
       
       
      
    
            </DataTable>: <View>
           <ImagePIcker/>
           <ImagePIcker/>
        
        </View>}
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight
             style={{ marginVertical:10,marginHorizontal:12  }}
              onPress={() => {
                            if(start===true)
                            {
                              isstart(false)
                            }
                            else{
                              isstart(true)
                            }
              }}
            >
              <Text style={{color:"#03a9f4"}}>{start===true?"Next":"Back"}</Text>
            </TouchableHighlight>
            {start===false?
             <TouchableHighlight
             style={{ marginVertical:10 ,marginHorizontal:12 }}
              onPress={() => {
                            if(submit===true)
                            {
                              isstart(false)
                              issubmit(false)
                            }
                            else{
                              issubmit(true)
                            }
              }}
            >
              <Text style={{color:"#03a9f4"}}>Submit</Text>
            </TouchableHighlight>:null}
           
        </View>
        
            <TouchableHighlight
              style={{ marginTop:10  }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}><AntDesign name="closecircle"  color="#03a9f4" size={28} /></Text>
            </TouchableHighlight>
        </View>
       
          </View>
      
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
         <Ionicons name="md-add-circle" color="red" size={52} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  //  marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    //backgroundColor: "#F194FF",
    //borderRadius: 20,
   
    elevation: 2
  },
  textStyle: {
    color:"gray",
    marginLeft:2
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
