import React from 'react';
import {  StyleSheet,TouchableOpacity, View,Modal,Dimensions,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const height = Dimensions.get('window').height

export default class Modal2 extends React.Component{
    constructor(props){
        super(props)      
      }   
  
      render(){
          return( 
            <Modal
                visible={this.props.visible}
                animationType={'slide'}
                transparent={true}
          >             
            <View style={{flex:1,backgroundColor:'#000000AA',justifyContent:'flex-end'}}>   
              <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderTopRightRadius:10,borderTopLeftRadius:10,width:'100%',maxHeight:height * 0.2,paddingHorizontal:10}}>   
               <Text style={{color:'#422F6C',fontSize:20}}>Fonte</Text>
                <View style={styles.modal}>    
                    <TouchableOpacity style={{marginRight:20}} onPress={()=> this.props.diminuir()}><Text><MaterialCommunityIcons name="format-font-size-decrease" size={24} color="white" /></Text></TouchableOpacity>             
                    <TouchableOpacity style={{marginLeft:20}} onPress={()=> this.props.aumentar()}><Text><MaterialCommunityIcons name="format-font-size-increase" size={24} color="white" /></Text></TouchableOpacity>       
                </View>
             <View style={{flex:1,flexDirection:'row',marginVertical:5}}>
                <Text style={{marginHorizontal:10}}><TouchableOpacity onPress={()=> this.props.save()} style={{marginVertical:10,width:60,height:20,backgroundColor:'#426712',justifyContent:'center',alignItems:'center',borderRadius:12}}><Text><Ionicons name="checkmark-done" size={20} color="white" /></Text></TouchableOpacity></Text>
                <Text style={{marginHorizontal:10}}><TouchableOpacity onPress={()=> this.props.reset()} style={{marginVertical:10,width:40,height:20,backgroundColor:'rgba(190,0,0,0.8)',justifyContent:'center',alignItems:'center',borderRadius:12}}><Text><Ionicons name="close" size={16} color="white" /></Text></TouchableOpacity></Text>
            </View>   
              </View>
            </View>

          </Modal>
          )
      }
}

const styles = StyleSheet.create({
    modal:{
        width:'99.5%',
        backgroundColor:'rgba(0,0,0,0.8)',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderRadius:10,
        marginVertical:5
      },
});  