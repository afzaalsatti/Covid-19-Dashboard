import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Drawer from '../CustomNavigation/Drawer';
export default function App() {
  return (
  
    <Drawer independent={true} type="customer"/>
  
  );
}


