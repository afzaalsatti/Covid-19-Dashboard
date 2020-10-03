
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Actions } from 'react-native-router-flux';
export default function App() {
    const about=()=>{
         Actions.About();
    }

  const  contact=()=>{
        Actions.Contact();
    }
  return (
    <View>
      <Text style={styles.text}>GENERAL</Text>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <EvilIcons name="calendar" size={24} color="#03a9f4" />
      <Text style={styles.innertext}>New Digital Identity</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <Feather name="globe" size={20} color="#03a9f4" />
      <Text style={styles.innertext}>Language</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={about} style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <Feather name="info" size={20} color="#03a9f4" />
      <Text style={styles.innertext}>About Prove</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={contact} style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <AntDesign name="contacts" size={24} color="#03a9f4" />
      <Text style={styles.innertext}>Contact</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />

     
      </TouchableOpacity>
      <Text style={styles.text}>DIGITAL IDENTITIES</Text>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <Ionicons name="ios-contact" size={24} color="#03a9f4" />
      <Text style={styles.innertext}>Name :John Doe</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <Feather name="help-circle" size={20} color="#03a9f4" />
      <Text style={styles.innertext}>Valid to :2023-06-24</Text>
      </TouchableOpacity>


      <Text style={styles.text}>FEEDBACK</Text>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <AntDesign name="notification" size={24} color="#03a9f4" />
      <Text style={styles.innertext}>App feedback</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <Entypo name="bug" size={24} color="#03a9f4" />
      <Text style={styles.innertext}>Bug report</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />

     
      </TouchableOpacity>
      <Text style={styles.text}>LEGAL</Text>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <AntDesign name="lock" size={24} color="#03a9f4" />
      <Text style={styles.innertext}>Privacy</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <MaterialCommunityIcons name="license" size={24} color="#03a9f4" />
      <Text style={styles.innertext}>License</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
      <MaterialIcons name="security" size={24} color="#03a9f4" />
      <Text style={styles.innertext}>Security</Text>
      <AntDesign style={{right:5, position:'absolute'}} name="right" size={16} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontWeight:'bold',
    justifyContent: 'center',
  },
  text:{
    color:'#03a9f4',
    fontSize:14,
    fontWeight:'bold',
    marginLeft:10,
    marginTop:10
},
innertext:{
    // fontWeight:'bold',
    marginLeft:15,
    fontSize:14,
    color:'gray'
}
});
