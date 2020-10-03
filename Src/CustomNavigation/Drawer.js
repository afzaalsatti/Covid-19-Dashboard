import * as React from 'react';
import { Button, View,Text,StyleSheet,Alert,StatusBar } from 'react-native';
import {  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import MenuBarHome from '../Component/MenuBar_Home';
import { Actions } from 'react-native-router-flux';
import Settings from '../Pages/Settings';
import CustomStatusBar from '../Component/StatusBar'
function HomeScreen({ navigation }) {
  return (
   
         <React.Fragment>
               <MenuBarHome navigation={navigation} type="customer"/> 
         </React.Fragment>
      
    
  );
}
function admin_Home({ navigation }) {
  return (
   
         <React.Fragment>
               <MenuBarHome navigation={navigation} type="admin"/> 
         </React.Fragment>
      
    
  );
}
function adminaccount_Setting({ navigation }) {
  return (
    <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
   <Settings/>
   </View>
  );
}
function adminNotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   
    </View>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   
    </View>
  );
}
function admin_Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   
    </View>
  );
}
function account_Setting({ navigation }) {
  return (
    <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
   <Settings/>
   </View>
  );
}
function CustomDrawerContent_Customer(props) {
 
  return (
    <React.Fragment>
      
      {/* <CustomStatusBar/> */}
      
       
   <Text style={styles.Text}>Mehak Fatima</Text>
   <View  style={styles.line}></View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
 icon={ ({focused, size,color}) => (
  <MaterialCommunityIcons name="delete" color={color} size={26} />
)}
label="Remove Account"
onPress= {()=>Alert.alert(
              
  'Delete Account',
 
  'Do You Want to Delete Account' ,            
  [
    {text: 'Yes', onPress: ()=> {Actions.login()}},
    {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
   
  ],
{ cancelable: false })}
/>
    </DrawerContentScrollView>
    
    <DrawerItem 
 icon={ ({focused, size,color}) => (
  <MaterialCommunityIcons name="logout" color={color} size={26} />
)}
label="Sign Out"
onPress= {()=>Alert.alert(
              
  'Logout Account',
 
  'Do You Want to Logout' ,            
  [
    {text: 'Yes', onPress: ()=> {Actions.login()}},
    {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
   
  ],
{ cancelable: false })}
/>

    </React.Fragment>
  );
}
function CustomDrawerContent_admin(props) {
 
  return (
    <React.Fragment>
      
      {/* <CustomStatusBar/> */}
      
       
   <Text style={styles.Text}>Mehak Fatima</Text>
   <View  style={styles.line}></View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
 icon={ ({focused, size,color}) => (
  <MaterialCommunityIcons name="delete" color={color} size={26} />
)}
label="Remove Account"
onPress= {()=>Alert.alert(
              
  'Delete Account',
 
  'Do You Want to Delete Account' ,            
  [
    {text: 'Yes', onPress: ()=> {Actions.login()}},
    {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
   
  ],
{ cancelable: false })}
/>
    </DrawerContentScrollView>
    
    <DrawerItem 
 icon={ ({focused, size,color}) => (
  <MaterialCommunityIcons name="logout" color={color} size={26} />
)}
label="Sign Out"
onPress= {()=>Alert.alert(
              
  'Logout Account',
 
  'Do You Want to Logout' ,            
  [
    {text: 'Yes', onPress: ()=> {Actions.login()}},
    {text: 'NO', onPress: () =>  console.log(),style: 'cancel'},
   
  ],
{ cancelable: false })}
/>

    </React.Fragment>
  );
}
 const Drawer = createDrawerNavigator();

 function MyDrawer(props) {
  if(props.type==="customer")
  {
    return (
   
  
    <Drawer.Navigator drawerContent={props => CustomDrawerContent_Customer(props)}
     drawerStyle={{backgroundColor:'#FFFFFF',  borderTopRightRadius:15,borderBottomRightRadius:15,width:'65%'}}
     drawerContentOptions={{
      activeTintColor: '#e91e63',
      activeBackgroundColor:'transparent',
      itemStyle: { marginVertical: 10 },
     
    }}
   
   
    initialRouteName="Home">
     
      <Drawer.Screen
       name="Home" component={HomeScreen}
       options={{ drawerLabel: 'Feed' ,
       drawerIcon: ({focused, size,color}) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),}}
      />
        <Drawer.Screen  name='Setting'
       component={account_Setting}
       options={{ drawerLabel: 'Setting' ,
       drawerIcon: ({focused, size,color}) => (
        <MaterialCommunityIcons name="settings" color={color} size={26} />
      ),}} />

      <Drawer.Screen name="Live Chat"
       component={NotificationsScreen}
       options={{ drawerLabel: 'Live Chat' ,
       drawerIcon: ({focused, size,color}) => (
        <MaterialCommunityIcons name="chat" color={color} size={26} />
      ),}} />
       <Drawer.Screen  name='Previous Order'
       component={NotificationsScreen}
       options={{ drawerLabel: 'Previous Order' ,
       drawerIcon: ({focused, size,color}) => (
        <MaterialCommunityIcons name="cart" color={color} size={26} />
      ),}} />
     
       
      
    
    </Drawer.Navigator>);
    }
    if(props.type==="admin"){
      return (
   
  
        <Drawer.Navigator drawerContent={props => CustomDrawerContent_admin(props)}
         drawerStyle={{backgroundColor:'#FFFFFF',  borderTopRightRadius:15,borderBottomRightRadius:15,width:'65%'}}
         drawerContentOptions={{
          activeTintColor: '#e91e63',
          activeBackgroundColor:'transparent',
          itemStyle: { marginVertical: 10 },
         
        }}
       
       
        initialRouteName="Home">
         
          <Drawer.Screen
           name="Home" component={admin_Home}
           options={{ drawerLabel: 'Feed' ,
           drawerIcon: ({focused, size,color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),}}
          />
        
            <Drawer.Screen  name='Setting'
           component={adminaccount_Setting}
           options={{ drawerLabel: 'Setting' ,
           drawerIcon: ({focused, size,color}) => (
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),}} />
    
          <Drawer.Screen name="Live Chat"
           component={adminNotificationsScreen}
           options={{ drawerLabel: 'Live Chat' ,
           drawerIcon: ({focused, size,color}) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),}} />
          
         
           
          
        
        </Drawer.Navigator>);
    }
  
      
  
  
}
export default function MenuBar(props) {
 
  return (
   
    <NavigationContainer >
     <MyDrawer type={props.type}/>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Text:{
    marginTop:32,
    marginLeft:10,
     fontSize:18,
     fontWeight:'bold',
     color:'gray'
  },
  line:{

    borderWidth: 1,
    borderColor:'gray',
    margin:5,
    width:'100%',
    alignSelf:'center'
    

},
line1:{

  borderWidth: 1,
  borderColor:'gray',
  margin:5,
  width:'100%',
  alignSelf:'center'
  

},
bottomSection:{

}
});
