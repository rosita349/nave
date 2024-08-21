import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View} from 'react-native'
import { Buttoncomponent } from '../Component'



export interface Props extends StackScreenProps<any, any> { }
export const ScreenUno = ({ navigation }: Props) => {
  return (
    <View>   
     <Buttoncomponent textbutton="Pagina2" onpress={() => navigation.navigate('1')} />

    

    </View>
  


  )
}

