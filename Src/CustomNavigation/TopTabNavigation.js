import * as React from 'react';
import { Text, View ,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BagsCollection from '../Component/BagsCollection'
import Jewellary_Collection from '../Component/Jewellary'
import Western from '../Component/Western_Wear'
import Accessories_Collection from '../Component/Accessories'
import Modal from '../Modal/Upload_MOdal';


function Bags() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
     <BagsCollection/>
  
    </View>
  );
}
function admin_Bags() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
     <BagsCollection/>
     
      <View style={{position:'absolute',bottom:5,right:15}}>
      <Modal/>
      </View>
    
    
    </View>
  );
}

function Western_Wear() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
      <Western/>
    </View>
  );
}
function admin_Western_Wear() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
      <Western/>
     
      <View style={{position:'absolute',bottom:5,right:15}}>
      <Modal/>
      </View>
    </View>
  );
}
function Jewellary(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#FFFFFF'}}>
        <Jewellary_Collection/>
  
      </View>
    );
  }
  function admin_Jewellary(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#FFFFFF'}}>
        <Jewellary_Collection/>
       
      <View style={{position:'absolute',bottom:5,right:15}}>
      <Modal/>
      </View>
      </View>
    );
  }

const Tab = createMaterialTopTabNavigator();

export default function App(props) {
  if(props.type==="admin")
  {
    return (
    
      <Tab.Navigator
      activeTintColor="#03a9f4">
        
        <Tab.Screen name="Bags" component={admin_Bags} />
        <Tab.Screen name="Western Wear" component={admin_Western_Wear} />
        <Tab.Screen name="Jewellary" component={admin_Jewellary} />
      
      </Tab.Navigator>
   
  );
  }
  if(props.type==="customer")
  {
    return (
    
      <Tab.Navigator
      activeTintColor="#03a9f4">
        
        <Tab.Screen name="Bags" component={Bags} />
        <Tab.Screen name="Western Wear" component={Western_Wear} />
        <Tab.Screen name="Jewellary" component={Jewellary} />
      
      </Tab.Navigator>
   
  );
  }
 
}
