import React, { Component, useState } from "react";
import { DataTable} from 'react-native-paper';
import { Ionicons ,AntDesign ,Fontisto,MaterialIcons} from "@expo/vector-icons";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,Image,
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
  const [color, iscolor] = useState(['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',  '#E6B333' ]);
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
    
              <DataTable>
              <Image style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
              <Text style={{fontSize:16,color:'gray',marginVertical:10}}>
                 Description:
             </Text>
             <Text  style={{fontSize:12,color:'gray',marginVertical:3}}>
             a woman's fitted dress or other garment cut in long panels without a horizontal
              join or separation at the waist. Instead of relying on darts to shape the garment, 
             the fit is achieved with long seams ("princess seams") and shaped pattern pieces.
             </Text>
             <View style={styles.line}></View>
             <Text style={{fontSize:16,color:'gray',marginVertical:10}}>
                 Available Size:
             </Text>
             <Text  style={{fontSize:12,color:'gray',marginVertical:3}}>
                 Small Medium Large
             </Text>
             <Text style={{fontSize:16,color:'gray',marginVertical:10}}>
                 Available Colors:
             </Text>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             {
              color.map((val)=>(
                     
                  
                    <View style={{height:30,width:30,borderRadius:15,backgroundColor:val,borderColor:'red',borderWidth:1}}>
                    </View>
                   
              ))
             }
              </View>
              <View style={{flexDirection:'row',marginVertical:15}}>
              <Text style={{fontSize:16,color:'gray'}}>
                 Hot Offer :
             </Text>
             <Text style={{fontSize:12,color:'gray',marginTop:2,marginHorizontal:20}}>
                 none
             </Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:16,color:'gray'}}>
                 Sale Price :
             </Text>
             <Text style={{fontSize:12,color:'gray',marginTop:5,marginHorizontal:20}}>
                 2600/-
             </Text>
              </View>
             
            
           
            
       
               
            
       
       
      
    
            </DataTable>
     
           
           
    
        
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
         <MaterialIcons name="pageview" size={26}  color='#03a9f4'  /> 
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
  line:{

    borderWidth: 1,
    borderColor:'#f1f1f1',
  
   
   
    

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
