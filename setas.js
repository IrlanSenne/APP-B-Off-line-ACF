import React from 'react';
import {  StyleSheet,TouchableOpacity,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default class Setas extends React.Component{
    constructor(props){
        super(props)      
      }   
  
      render(){
          return( 
          <TouchableOpacity  onPress={()=>this.props.anterior()} style={[styles.sets]}>
            <Text><AntDesign name="caretleft" size={24} color="rgb(144,135,168)" /></Text>
          </TouchableOpacity>
          )
      }
}

const styles = StyleSheet.create({
    sets:{
        position:'absolute',
        top:'60%',
        left:'0.8%',
        backgroundColor:'rgba(250,250,250,1)',
        width:40,
        height:40,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        elevation:10
      },
});  