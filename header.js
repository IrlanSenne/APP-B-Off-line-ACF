import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Header (props){
    const navigation = useNavigation();
    
    function _onPress(){
        navigation.navigate('Livros')
    }
    function _onPress2(){
        navigation.navigate('Capitulo')
    }
 
    return(
        <SafeAreaView 
                  style={styles.headerPortrait}>
       
           <TouchableOpacity onPress={()=>_onPress()} style={styles.topMenu}>
             <Text style={{color:'#fff',fontSize:16}}>{props.nomeLivro}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>_onPress2()} style={styles.topMenu2}>
               <Text style={{color:'#fff',fontSize:16}}>{props.cap}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>props.multiVersao()} style={styles.topMenu3}>
           <Text><MaterialCommunityIcons  name="format-size" size={18} color="rgb(144,135,168)" /></Text>       
            </TouchableOpacity>         
          
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    headerPortrait:{  
        height:48,    
        flexDirection: "row",   
        backgroundColor:'#000',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'space-around',
        paddingHorizontal:20,

    },
    topMenu:{
        width:'45%',
        height:31,
        borderWidth:2,
        borderColor:'rgba(178,151,224,0.8)',    
        alignItems:'center',
        justifyContent:'center',
        
    },
    topMenu2:{  
        width:'25%',
        height:31,
        borderWidth:2,
        borderColor:'rgba(178,151,224,0.8)',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:25
       
    },
    topMenu3:{   
        width:'15%',
        height:31,
        borderWidth:2,
        borderColor:'rgba(178,151,224,0.8)',     
        alignItems:'center',
        justifyContent:'center',
        
    }
});  