import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { ScreenUno } from './src/SCREEEN/ScreenUno';
import { ScreenDos } from './src/SCREEEN/ScreenDos';



const Stack = createStackNavigator(); 

const App = () => { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator 
        
       
      > 
        <Stack.Screen  name="2" component={ScreenUno} options={{ title: 'Inicio' }} 
        /> 
        <Stack.Screen  name="1"  component={ScreenDos} options={{ title: 'Imagen1' }} 

        />
        
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}; 
 
export default App;