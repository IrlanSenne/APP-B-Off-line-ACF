import React ,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Titulos from './Livros'
import Capitulos from './Capitulos'
import Versiculos from './versiculos'
import SplashScreen from 'react-native-splash-screen'

const Pilha = createStackNavigator()

function Capitulo({route}){
const {nome} = route.params
  return(     
      <Capitulos nome={nome}/>   
  )
}

function Livros({}){
  return(    
    <Titulos/>       
  )
}

function Vers({route}){
  const {liv} = route.params
  const {cap} = route.params

  return(     
      <Versiculos liv={liv} cap={cap} />    
  )
}

export default function  App ()  {

    useEffect(()=>{
      setTimeout(()=> {      
          SplashScreen.hide()          
    }, 1000);
      }, []);

  return (  
      <NavigationContainer>
        <Pilha.Navigator headerMode='none'>
          <Pilha.Screen
            name='Livros'
            component={Livros}
          />
           <Pilha.Screen
            name='Capitulo'
            component={Capitulo}
          />
          <Pilha.Screen
            name='Versiculo'
            component={Vers}
          />
        </Pilha.Navigator>
     </NavigationContainer>    
  );
}