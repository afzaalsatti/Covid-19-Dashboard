import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign ,Fontisto,Ionicons} from '@expo/vector-icons'; 
import TopBar from './TopTabNavigation';
import HotOffers from '../Pages/Hot_Offers'
import Profile from './ProfileTopBar'
import SearchItem from '../Component/Search'
import Upload from '../Modal/Upload_MOdal'
function HomeScreen() {
  return (
    
      <TopBar type="customer"/>
    
   
  );
}
function admin_HomeScreen() {
  return (
    
      <TopBar type="admin"/>
    
   
  );
}
function admin_profile() {
  return (
    <View style={{flex: 1,backgroundColor:'#FFFFFF',position:'absolute',bottom:5,alignSelf:'center'}}>
       {/* <Upload/> */}
       </View>
     
    
     
   
  );
}
function Hot_Offers() {
  return (
    <View style={{ flex: 1,backgroundColor:'#FFFFFF' }}>
      <HotOffers/>
    </View>
  );
}
function Search() {
  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF' }}>
     <SearchItem/>
    </View>
  );
}
function admin_Search() {
  return (
    <View style={{ flex: 1, backgroundColor:'#FFFFFF' }}>
     <SearchItem/>
    </View>
  );
}
function My_CART() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFFFFF' }}>
      <Text>My Cart</Text>
    </View>
  );
}
function My_Profile() {
  return (
   
      <Profile/>
    
  );
}
const Tab = createMaterialBottomTabNavigator();

export default function App(props) {
  if(props.type==="admin"){
    return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#03a9f4"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'black' ,}}
      tabStyle={{backgroundColor:'#03a9f4'}}
      >
        <Tab.Screen
         name="Home"
          component={admin_HomeScreen}
         
          options={{
            animationEnabled: true,
            swipeEnabled: true,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              tabStyle: {
                  backgroundColor: '#614971'
              }
          }
          }} 
        />
        
        <Tab.Screen
         name="Search"
          component={admin_Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={26}  color={color}/>
            
            ),
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              tabStyle: {
                  backgroundColor: '#614971'
              }
          }}} />
           <Tab.Screen
         name="Profile" 
         component={admin_profile} 
         
         options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ), tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabStyle: {
                backgroundColor: '#614971'
            }
        }}}/>
       
      </Tab.Navigator>
    );
  }if(props.type==="customer")
  {
  return (
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#03a9f4"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'black' ,}}
      tabStyle={{backgroundColor:'#03a9f4'}}
      >
        <Tab.Screen
         name="Home"
          component={HomeScreen}
         
          options={{
            animationEnabled: true,
            swipeEnabled: true,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              tabStyle: {
                  backgroundColor: '#614971'
              }
          }
          }} 
        />
        <Tab.Screen 
        name="Hot Offer"
         component={Hot_Offers}
         options={{
          tabBarLabel: 'Hot Offers',
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-package" color={color} size={26} />
          ),
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabStyle: {
                backgroundColor: '#614971'
            }
        }}} />
        <Tab.Screen 
        name="My Cart"
         component={My_CART} 
         options={{
          tabBarLabel: 'My Cart',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={26}  color={color}
            />
          ), tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabStyle: {
                backgroundColor: '#614971'
            }
        }
         
         
        }}
         />
        <Tab.Screen
         name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={26}  color={color}/>
            
            ),
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              tabStyle: {
                  backgroundColor: '#614971'
              }
          }}} />
        <Tab.Screen
         name="Profile" 
         component={My_Profile} 
         options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ), tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabStyle: {
                backgroundColor: '#614971'
            }
        }}}/>
      </Tab.Navigator>
  
  );
}
}