import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../Pages/LoginCustomer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import  Register from '../Pages/RegisterCustomer';
import ForgetPassword from '../Pages/ForgetPassword';
import Start from '../Pages/Lets_Start';
import Contact from '../Pages/Contact'
import { DarkTheme } from '@react-navigation/native';
import Admin_Home from '../Pages/Admin_Home'
const Routes = () => (
   <Router>
      <Scene key = "root">
      <Scene key = "Lets_Start" component = {Start} title = "Shopify" initial = {true} />
         <Scene key = "login" component = {Login} title = "Login" />
         <Scene key = "register" component = {Register} title = "Register" />
         <Scene key = "Home" component = {Home} title = "Home" header={null} />
         <Scene key = "Contact" component = {Contact} title = "Contact" />
         <Scene key = "About" component = {About} title = "About Us" />
         <Scene key = "Admin_Home" component = {Admin_Home} title = "Home" header={null}/>
         <Scene key = "Forgetpass" component = {ForgetPassword} title = "Forget Password" />
      </Scene>
   </Router>
)
export default Routes