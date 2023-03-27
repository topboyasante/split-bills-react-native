import React from 'react'
import { Text } from 'react-native'
import { colors } from '../../constants/Colors'

function HeaderTitle() {
  return (
    <Text 
    style={
        {
            color:colors.secondaryColor,
            fontSize:20
        }
    }
    >
        OmniFlix
    </Text>
  )
}

export default HeaderTitle