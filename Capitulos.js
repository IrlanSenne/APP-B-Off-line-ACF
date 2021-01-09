import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text,TouchableOpacity,ScrollView,Alert } from 'react-native';
import Biblia from './biblia-acf.json'
import { useNavigation } from '@react-navigation/native';
import Header from './header'
import { AdMobBanner,setTestDeviceIDAsync} from 'expo-ads-admob';

export default function Capitulos(props){
    const navigation = useNavigation();
    var caps = []
    const livro = props.nome     
    const numeroCaps =Biblia[livro].length  
    const [capAtual,setCapAtual] = useState('-') 
        
        for(let i=0;i<numeroCaps;i++){
            caps.push(
                <View key={i}>     
                    <TouchableOpacity style={styles.cx} onPress={()=>listaVers(livro,i)}>                       
                            <Text style={styles.txt}>{i+1}</Text> 
                    </TouchableOpacity>   
                </View>
            )           
        }    
        const listaVers = (l,c)=>{
           navigation.navigate('Versiculo', {liv:l,cap:c})
           setCapAtual(c+1)
        }
      
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'rgb(51,42,66)', padding:1}}>    
        <Header  nomeLivro={livro} cap={capAtual}  multiVersao={()=>Alert.alert('Primeiro escolha um capítulo')}/>
      
            <ScrollView >    
            <View style={{flex:1,alignItems:'center',alignContent:'center',width:'100%',height:'100%',paddingBottom:30}}>         
                <View style={{width:'92%',backgroundColor:'rgba(0,0,0,0.3)',elevation: 15,height:70,marginBottom:20,borderRadius:20,marginTop:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.title}>{livro}</Text></View>           
                <Text> {caps}</Text>  
            </View>         
            </ScrollView>
            <AdMobBanner
                        bannerSize="fullBanner"
                        adUnitID="ca-app-pub-7042395532979448/7360118683"
                        servePersonalizedAds
                        setTestDeviceIDAsync={false}
                        onDidFailToReceiveAdWithError={(error)=>console.log(error)} />
                     
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        txt:{ 
            color:'#6617AF',
            fontSize:20,
    },
    cx:{
        width:60,
        height:35,
        borderWidth:1,
        borderColor:'#32054B',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        margin:4,
        padding:5,
        borderRadius:5
    },
    title:{
        color:'#fff',
        fontSize:20,
        letterSpacing:2,
        margin:5
    }
  });  