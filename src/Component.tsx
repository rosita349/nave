import React from 'react'
import { TouchableOpacity, Text } from 'react-native'



interface Props {
  textbutton: string;
  onpress: () => void;
}

export const Buttoncomponent = ({ textbutton, onpress }: Props) => {
  return (
    <TouchableOpacity  onPress={onpress}>
      <Text >{textbutton}</Text>
    </TouchableOpacity>
  )
}