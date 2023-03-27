import React from 'react'
import { Text } from 'react-native'
import { colors } from '../constants/Colors'

function Welcome() {
  return (
    <Text style={
        {
            color:colors.secondaryColor,
            padding:5
        }
    }>
        Movies. For Everyone.
    </Text>
  )
}

export default Welcome