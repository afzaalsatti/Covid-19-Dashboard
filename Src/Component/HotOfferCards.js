import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { AntDesign ,Fontisto,Entypo,MaterialIcons} from '@expo/vector-icons'; 
import { StyleSheet, View, Text ,TouchableOpacity} from 'react-native';
import Display_Modal from '../Modal/Display_Modal';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = (props) => (
  <Card>
    <Card.Title title={props.title} subtitle={props.subtitle} left={LeftContent} titleStyle={props.titlestyle} />
    <Card.Content>

<Paragraph style={props.paragraph}>{props.content}</Paragraph>
    </Card.Content>
   
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
   
   
    <Card.Actions>
    <TouchableOpacity style={{marginHorizontal:10}} onPress={()=>{alert("add to wish list")}}>  
            <Entypo name="heart" size={26}  color='#03a9f4'  /> 
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:10}} onPress={()=>{alert("Added to cart successfully")}}>  
            <AntDesign name="shoppingcart" size={26}  color='#03a9f4'  /> 
        </TouchableOpacity> 
   
        <TouchableOpacity style={{marginHorizontal:30}}>  
          <Display_Modal/>
        </TouchableOpacity> 
       
        
    </Card.Actions>
  </Card>
);

export default MyComponent;