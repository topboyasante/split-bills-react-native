import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { colors } from '../constants/Colors'

function Button({text}) {
  return (
    <TouchableOpacity style={{
        backgroundColor:colors.secondaryColor,
        paddingVertical:20,
        marginVertical:10
    }}>
        <Text style={{
            color:colors.white,
            textAlign:'center'
        }}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

export default Button